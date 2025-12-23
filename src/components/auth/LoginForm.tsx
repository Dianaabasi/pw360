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
      // Success! The AuthContext will update, so we just redirect.
      router.push('/dashboard/home');
    } catch (err: any) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 w-full max-w-md">
      {error && <div className="p-3 bg-red-100 text-red-600 rounded text-sm">{error}</div>}
      
      <input
        type="email"
        placeholder="Email"
        required
        className="w-full p-3 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        required
        className="w-full p-3 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className={cn(
          "w-full py-3 bg-black text-white dark:bg-white dark:text-black rounded font-medium transition",
          loading && "opacity-50"
        )}
      >
        {loading ? 'Logging in...' : 'Log In'}
      </button>
    </form>
  );
}