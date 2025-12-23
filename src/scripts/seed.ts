// You might need to adjust imports depending on how you run this script.
// If running as a standalone script, ensure ts-node/tsx is set up.
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Course from '../models/Course'; // Adjust path if needed

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI!;

const dummyCourses = [
  {
    title: "Intro to Blockchain",
    slug: "intro-to-blockchain",
    description: "Learn the fundamentals of distributed ledger technology.",
    thumbnail: "/images/course-1.jpg", // Placeholder
    category: "Blockchain",
    published: true,
    totalLessons: 2,
    modules: [
      {
        title: "Module 1: History",
        lessons: [
          { title: "What is Bitcoin?", type: "video", duration: 600, isLocked: false },
          { title: "The Double Spend Problem", type: "video", duration: 450, isLocked: true }
        ]
      }
    ]
  },
  {
    title: "DeFi 101",
    slug: "defi-101",
    description: "Master Decentralized Finance protocols and yield farming.",
    thumbnail: "/images/course-2.jpg",
    category: "Finance",
    published: true,
    totalLessons: 3,
    modules: []
  }
];

async function seed() {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is missing in .env.local');
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('🔌 Connected to MongoDB');

    // Clear existing courses (Optional: be careful in prod!)
    await Course.deleteMany({});
    console.log('🧹 Cleared existing courses');

    // Insert new ones
    await Course.insertMany(dummyCourses);
    console.log('✅ Seeded dummy courses successfully');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();