import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import User from '../models/User';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI!;
const TARGET_EMAIL = process.argv[2]; 
const NEW_ROLE = process.argv[3]; 

const VALID_ROLES = ['super_admin', 'support_specialist', 'content_manager', 'student'];

if (!TARGET_EMAIL || !NEW_ROLE) {
  console.error('Usage: npx tsx src/scripts/makeAdmin.ts <email> <role>');
  console.error(`   Valid roles: ${VALID_ROLES.join(', ')}`);
  process.exit(1);
}

if (!VALID_ROLES.includes(NEW_ROLE)) {
  console.error(`Invalid role. Choose from: ${VALID_ROLES.join(', ')}`);
  process.exit(1);
}

async function promoteUser() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('🔌 Connected to MongoDB');

    const user = await User.findOne({ email: TARGET_EMAIL });

    if (!user) {
      console.error(`User with email "${TARGET_EMAIL}" not found.`);
      process.exit(1);
    }

    user.role = NEW_ROLE;
    await user.save();

    console.log(`✅ Success! ${user.firstName} is now a ${NEW_ROLE.toUpperCase()}.`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

promoteUser();