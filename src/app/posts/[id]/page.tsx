import Layout from '@/components/layout';
import { getAllPostIds } from '@/lib/posts';

export async function generateStaticParams() {
  return getAllPostIds();
}

export default function Post() {
  return <Layout>...</Layout>;
}
