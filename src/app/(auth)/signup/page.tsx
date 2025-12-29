import SignupForm from '@/components/auth/SignupForm';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black p-4">
      <div className="w-full max-w-[480px] bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Get Started</h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">Join PW360 and unlock your potential.</p>
        </div>
        
        <SignupForm />
        
        <p className="mt-8 text-center text-sm text-zinc-500">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}