'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard/home');
    } catch (err: any) {
      setError('Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-100">
          {error}
        </div>
      )}
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
        <input
          type="email"
          required
          className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</label>
          <a href="/forgot-password" className="text-xs text-blue-600 hover:underline">Forgot?</a>
        </div>
        <input
          type="password"
          required
          className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          onChange={(e) => setPassword(e.target.value)}
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
        {loading ? 'Logging in...' : 'Sign In'}
      </button>
    </form>
  );
}