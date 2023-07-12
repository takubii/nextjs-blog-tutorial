import Image from 'next/image';

import styles from '@/styles/layout.module.css';
import utilStyles from '@/styles/utils.module.css';

const name = 'Your Name';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <>
          <Image
            priority
            src='/images/profile.jpg'
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt=''
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      </header>
      <main>{children}</main>
    </div>
  );
}
