'use client';

export const MyClientComponent = () => {
  return (
    <div>
      NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA:{' '}
      {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
      <br />
      NEXT_PUBLIC_VERCEL_ENV: {process.env.NEXT_PUBLIC_VERCEL_ENV}
    </div>
  );
};
