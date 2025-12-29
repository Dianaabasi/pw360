import User from '@/models/User';
import { NextResponse } from 'next/server';

type AllowedRole = 'super_admin' | 'support_specialist' | 'content_manager' | 'student';

/**
 * Checks if the user exists and has one of the allowed roles.
 * Returns the user object if authorized, or throws an error/returns null.
 */
export async function verifyRole(email: string, allowedRoles: AllowedRole[]) {
  const user = await User.findOne({ email });

  if (!user) {
    return null; // User not found
  }

  // Super Admin can do EVERYTHING (Fail-safe)
  if (user.role === 'super_admin') {
    return user;
  }

  // Check specific roles
  if (allowedRoles.includes(user.role)) {
    return user;
  }

  return null; // Unauthorized
}

/**
 * Standard unauthorized response helper
 */
export function unauthorizedResponse() {
  return NextResponse.json(
    { error: 'Unauthorized: Insufficient permissions' },
    { status: 403 }
  );
}