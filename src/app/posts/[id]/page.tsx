import Layout from '@/components/layout';
import { getAllPostIds, getPostData } from '@/lib/posts';

export async function generateStaticParams() {
  return getAllPostIds();
}

export default function Post({ params }: { params: { id: string } }) {
  const postData = getPostData(params.id);
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
