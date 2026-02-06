import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IProgress extends Document {
  userId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  
  completedLessonIds: string[]; // Array of completed lesson IDs
  
  // RESTRICTION #1: The 24-Hour Lock Logic
  // Stores the exact time the LAST lesson was finished.
  lastLessonCompletedAt: Date; 
  
  examPassed: boolean; 
  quizScores: Map<string, number>;
}

const ProgressSchema = new Schema<IProgress>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  
  completedLessonIds: [{ type: String }], 
  
  // Checked by API before unlocking the next lesson
  lastLessonCompletedAt: { type: Date, default: null },
  
  examPassed: { type: Boolean, default: false },
  quizScores: { type: Map, of: Number }
}, { timestamps: true });

// Ensure a user only has ONE progress document per course
ProgressSchema.index({ userId: 1, courseId: 1 }, { unique: true });

export default models.Progress || model<IProgress>('Progress', ProgressSchema);