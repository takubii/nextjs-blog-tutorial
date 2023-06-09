import Layout from '@/components/layout';
import { getAllPostIds, getPostData } from '@/lib/posts';

export async function generateStaticParams() {
  return getAllPostIds();
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return { title: postData.title };
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
