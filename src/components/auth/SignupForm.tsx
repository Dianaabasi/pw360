'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils'; // Uses the helper we made earlier

export default function SignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 1. Create User in Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      const user = userCredential.user;

      // 2. Sync with MongoDB
      const res = await fetch('/api/auth/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firebaseUid: user.uid,
          email: user.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
        }),
      });

      if (!res.ok) throw new Error('Failed to sync user to database');

      // 3. Redirect to Onboarding or Dashboard
      router.push('/dashboard/home');

    } catch (err: any) {
      console.error(err);
      // Firebase error codes are messy (e.g. "auth/email-already-in-use"), so we clean them up
      const msg = err.code === 'auth/email-already-in-use' 
        ? 'Email already in use' 
        : err.message || 'Something went wrong';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      {error && <div className="p-3 bg-red-100 text-red-600 rounded text-sm">{error}</div>}
      
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          required
          className="p-3 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent w-full"
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          className="p-3 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent w-full"
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
      </div>

      <input
        type="email"
        placeholder="Email"
        required
        className="w-full p-3 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        required
        className="w-full p-3 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <button
        type="submit"
        disabled={loading}
        className={cn(
          "w-full py-3 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition",
          loading && "opacity-50 cursor-not-allowed"
        )}
      >
        {loading ? 'Creating Account...' : 'Sign Up'}
      </button>
    </form>
  );
}