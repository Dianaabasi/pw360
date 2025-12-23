import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Course from '@/models/Course';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> } // In Next.js 15, params is a Promise
) {
  try {
    await dbConnect();

    // Await the params object
    const { slug } = await params;

    const course = await Course.findOne({ slug, published: true }).lean();

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, course }, { status: 200 });

  } catch (error) {
    console.error('Fetch Course Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}