import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

// Define the shape of a MongoDB error so TypeScript knows it has a 'code'
interface MongoError extends Error {
  code?: number;
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    
    const body = await req.json();
    const { firebaseUid, email, firstName, lastName, referralCode } = body;

    // Basic Validation
    if (!firebaseUid || !email) {
      return NextResponse.json({ error: 'Missing UID or Email' }, { status: 400 });
    }

    // Check if user already exists (Idempotency)
    const existingUser = await User.findOne({ firebaseUid });
    if (existingUser) {
      return NextResponse.json({ message: 'User synced (existing)', user: existingUser }, { status: 200 });
    }

    // Create the New User in MongoDB
    const newUser = await User.create({
      firebaseUid,
      email,
      firstName: firstName || 'New',
      lastName: lastName || 'Student',
      role: 'student', 
      referralCode: referralCode || undefined,
      subscription: {
        status: 'expired', 
        provider: 'manual'
      }
    });

    return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });

  } catch (error) {
    console.error('Sync Error:', error);
    
    // cast 'error' to our custom MongoError type
    const err = error as MongoError;

    if (err.code === 11000) {
       return NextResponse.json({ error: 'Email already exists in database' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}