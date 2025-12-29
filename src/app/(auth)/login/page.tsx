import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black p-4">
      <div className="w-full max-w-[480px] bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Welcome Back</h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">Enter your details to access your dashboard.</p>
        </div>
        
        <LoginForm />
        
        <p className="mt-8 text-center text-sm text-zinc-500">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}