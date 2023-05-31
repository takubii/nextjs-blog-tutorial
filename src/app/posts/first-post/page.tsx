import Link from 'next/link';

export const metadata = {
  title: 'First Post',
};

export default async function Page() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
    </>
  );
}
