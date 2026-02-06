import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Progress from '@/models/Progress';

export async function POST(req: Request) {
  try {
    await dbConnect();
    
    const { userId, courseId, lessonId } = await req.json();

    if (!userId || !courseId || !lessonId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Find or Initialize Progress
    let progress = await Progress.findOne({ userId, courseId });

    if (!progress) {
      progress = await Progress.create({
        userId,
        courseId,
        completedLessonIds: [],
        lastLessonCompletedAt: null
      });
    }

    // 2. Check if lesson is already completed
    if (progress.completedLessonIds.includes(lessonId)) {
      return NextResponse.json({ message: 'Lesson already completed', progress }, { status: 200 });
    }

    // 3. THE "NEXT DAY 12:00 AM" LOCK LOGIC
    if (progress.lastLessonCompletedAt) {
      const lastCompletedDate = new Date(progress.lastLessonCompletedAt);
      const now = new Date();

      // Calculate the "Unlock Time"
      // Take the date the user LAST finished a lesson, add 1 day, and set time to 00:00:00 (Midnight)
      const nextUnlockTime = new Date(lastCompletedDate);
      nextUnlockTime.setDate(lastCompletedDate.getDate() + 1); // Move to next day
      nextUnlockTime.setHours(0, 0, 0, 0); // Set to 12:00 AM (Midnight)

      // If right now is BEFORE that unlock time, block them
      if (now < nextUnlockTime) {
         return NextResponse.json({ 
           error: 'Daily limit reached. Next lesson unlocks tomorrow at 12:00 AM.',
           nextUnlock: nextUnlockTime
         }, { status: 403 });
      }
    }

    // 4. Update Progress
    progress.completedLessonIds.push(lessonId);
    progress.lastLessonCompletedAt = new Date();
    
    await progress.save();

    return NextResponse.json({ success: true, message: 'Lesson completed!', progress }, { status: 200 });

  } catch (error) {
    console.error('Progress Update Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}