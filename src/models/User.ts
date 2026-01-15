import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IUser extends Document {
  firebaseUid: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  
  // Specific Roles
  role: 'student' | 'super_admin' | 'support_specialist' | 'content_manager';
  
  subscription: {
    status: 'active' | 'expired' | 'grace_period';
    planId: string;
    currentPeriodEnd: Date; // The "Gatekeeper"
    provider: 'flutterwave' | 'coinbase' | 'manual';
    autoRenew: boolean;
  };
  
  referralCode?: string;
  walletAddress?: string; // For Onchain Badges
  
  // Gamification (Optional)
  totalPoints: number;
  currentStreak: number;
  
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  firebaseUid: { type: String, required: true, unique: true, index: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  
  role: { 
    type: String, 
    enum: ['student', 'super_admin', 'support_specialist', 'content_manager'], 
    default: 'student' 
  },
  
  subscription: {
    status: { type: String, enum: ['active', 'expired', 'grace_period'], default: 'expired' },
    planId: { type: String, default: 'monthly_basic' },
    currentPeriodEnd: { type: Date },
    provider: { type: String, enum: ['flutterwave', 'coinbase', 'manual'] },
    autoRenew: { type: Boolean, default: false }
  },
  
  referralCode: { type: String, unique: true, sparse: true },
  walletAddress: { type: String },
  totalPoints: { type: Number, default: 0 },
  currentStreak: { type: Number, default: 0 },

}, { timestamps: true });

export default models.User || model<IUser>('User', UserSchema);