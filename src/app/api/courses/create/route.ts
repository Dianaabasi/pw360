import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Course from '@/models/Course';
import { verifyRole, unauthorizedResponse } from '@/lib/rbac';

export async function POST(req: Request) {
  try {
    await dbConnect();

    const email = req.headers.get('x-admin-email');
    if (!email) return unauthorizedResponse();

    // Only Content Manager & Super Admin
    const admin = await verifyRole(email, ['content_manager']); 
    if (!admin) return unauthorizedResponse();

    const body = await req.json();
    const newCourse = await Course.create(body);

    return NextResponse.json({ success: true, course: newCourse });

  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}