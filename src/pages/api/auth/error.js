// pages/auth/error.js
import Link from 'next/link';

const ErrorPage = ({ error }) => {
  return (
    <div>
      <h1>Authentication Error</h1>
      <p>{error ? error : "An unknown error occurred."}</p>
      <p>
        <Link href="/login">Go back to Sign In</Link>
      </p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { error } = context.query;

  return {
    props: {
      error: error || null,
    },
  };
};

export default ErrorPage;
