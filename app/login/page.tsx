import Link from 'next/link';
import LoginForm from '../ui/login/login-form';

export default function LoginPage() {
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome</h1>
      <LoginForm />
      <Link className="flex justify-end w-full link-primary" href="/register">
        Create an account
      </Link>
    </div>
  );
}
