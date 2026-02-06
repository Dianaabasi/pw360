import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import Course from '@/models/Course';
import { verifyRole, unauthorizedResponse } from '@/lib/rbac';

export async function GET(req: Request) {
  try {
    await dbConnect();

    // 1. SECURITY CHECK (Using a header for now, later we use session)
    const email = req.headers.get('x-admin-email');
    if (!email) return unauthorizedResponse();

    // Only Super Admin & Support can see money stats
    const admin = await verifyRole(email, ['support_specialist']); 
    if (!admin) return unauthorizedResponse();

    // 2. LOGIC
    const [totalUsers, activeSubs, totalCourses] = await Promise.all([
      User.countDocuments({}),
      User.countDocuments({ 'subscription.status': 'active' }),
      Course.countDocuments({}),
    ]);

    const revenue = activeSubs * 29; 

    return NextResponse.json({
      success: true,
      stats: { totalUsers, activeSubs, totalCourses, revenue }
    });

  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}