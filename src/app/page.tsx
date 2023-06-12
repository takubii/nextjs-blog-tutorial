import Link from 'next/link';

import { getSortedPostsData } from '@/lib/posts';
import Date from '@/components/date';
import Layout from '@/components/layout';
import utilStyles from '@/styles/utils.module.css';

export const siteTitle = 'Next.js Sample Website';

export const metadata = {
  title: siteTitle,
  description: 'Learn how to build a personal website using Next.js',
  openGraph: {
    images: [
      {
        url: `https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`,
      },
    ],
    title: siteTitle,
  },
  twitter: {
    card: 'summary_large_image',
  },
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
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
