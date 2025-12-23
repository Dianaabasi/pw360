import SignupForm from '@/components/auth/SignupForm';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-white dark:bg-black">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Create your Account</h1>
        <p className="text-zinc-500 mb-6">Join PW360 and start learning today.</p>
        
        <SignupForm />
        
        <p className="mt-4 text-sm text-center text-zinc-500">
          Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}