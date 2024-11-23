// pages/auth/error.js
import { useRouter } from 'next/router'; 
import Link from 'next/link';

const ErrorPage = () => {
  const router = useRouter(); 
  const { error } = router.query;

  return (
    <div>
      <h1>Authentication Error</h1>
      <p>{error ? error : "An unknown error occurred."}</p>
      <p>
        <Link href="/auth/signin">Go back to Sign In</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
