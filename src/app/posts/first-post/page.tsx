import Link from 'next/link';

import Layout, { metaData } from '@/components/layout';

export const metadata = {
  title: 'First Post',
  ...metaData,
};

export default async function Page() {
  return (
    <Layout>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
    </Layout>
  );
}
