import { Metadata } from 'next';

import Date from '@/components/date';
import { getAllPostIds, getPostData } from '@/lib/posts';
import utilStyles from '@/styles/utils.module.css';

// getStaticPathsのfallback: falseの代替手段
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPostIds();
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const postData = await getPostData(params.id);

  return { title: postData.title };
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return (
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
