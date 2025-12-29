'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

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
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      const user = userCredential.user;

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

      if (!res.ok) throw new Error('Failed to sync user data');
      router.push('/dashboard/home');

    } catch (err: any) {
      console.error(err);
      const msg = err.code === 'auth/email-already-in-use' 
        ? 'That email is already in use.' 
        : err.message || 'Something went wrong.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-100">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">First Name</label>
          <input
            type="text"
            required
            className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Last Name</label>
          <input
            type="text"
            required
            className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
        <input
          type="email"
          required
          className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</label>
        <input
          type="password"
          required
          className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={cn(
          "w-full py-3.5 bg-black text-white dark:bg-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity mt-2",
          loading && "opacity-50 cursor-not-allowed"
        )}
      >
        {loading ? 'Creating account...' : 'Create Account'}
      </button>
    </form>
  );
}