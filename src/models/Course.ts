import mongoose, { Schema, models, model } from 'mongoose';

// Individual Lesson Schema
const LessonSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['video', 'quiz', 'exam'], required: true },
  videoUrl: { type: String }, // Firebase Storage (Dev) or Cloudflare (Prod)
  duration: Number, // in seconds
  isLocked: { type: Boolean, default: true } // Default state for users
});

// Module Schema (Container for Lessons)
const ModuleSchema = new Schema({
  title: { type: String, required: true },
  lessons: [LessonSchema]
});

const CourseSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true }, // URL friendly name e.g. "intro-to-defi"
  description: String,
  thumbnail: String, // URL to image
  category: { type: String, index: true }, // "Marketing", "Finance"
  
  modules: [ModuleSchema],
  
  totalLessons: { type: Number, default: 0 },
  published: { type: Boolean, default: false }
}, { timestamps: true });

export default models.Course || model('Course', CourseSchema);