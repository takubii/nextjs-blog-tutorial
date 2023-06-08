import { getSortedPostsData } from '@/lib/posts';
import Layout, { siteTitle, metaData } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export const metadata = {
  title: siteTitle,
  ...metaData,
};

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you&apos;ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
