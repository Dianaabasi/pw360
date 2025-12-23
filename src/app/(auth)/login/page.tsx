import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-white dark:bg-black">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
        <p className="text-zinc-500 mb-6">Enter your details to access your dashboard.</p>
        
        <LoginForm />
        
        <p className="mt-4 text-sm text-center text-zinc-500">
          Don't have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}