import Date from '@/components/date';
import Layout from '@/components/layout';
import { getAllPostIds, getPostData } from '@/lib/posts';
import utilStyles from '@/styles/utils.module.css';

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
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
