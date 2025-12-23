import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Course from '@/models/Course';

export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const limit = Number(searchParams.get('limit')) || 10;

    const query: any = { published: true };
    if (category && category !== 'All') {
      query.category = category;
    }

    // Fetch courses, selecting only necessary fields for the card view
    const courses = await Course.find(query)
      .select('title slug thumbnail category totalLessons')
      .limit(limit)
      .lean();

    return NextResponse.json({ success: true, data: courses }, { status: 200 });

  } catch (error) {
    console.error('Fetch Courses Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch courses' }, { status: 500 });
  }
}