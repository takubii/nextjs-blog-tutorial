import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/layout.module.css';
import utilStyles from '@/styles/utils.module.css';

const name = 'Your Name';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <>
          <Link href='/'>
            <Image
              priority
              src='/images/profile.jpg'
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt=''
            />
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href='/' className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
        </>
      </header>
      <main>{children}</main>
      <div className={styles.backToHome}>
        <Link href='/'>← Back to home</Link>
      </div>
    </div>
  );
}
