import css from './page.module.css';

import Link from 'next/link';

export default function Home() {
  return (
    <main
      className={css.heroPage}
      role="img"
      aria-describedby="Yellow camper van near water at sunset"
    >
      <section className={css.heroSection}>
        <div className={css.heroText}>
          <h1 className={css.heroTitle}>Campers of your dreams</h1>
          <p className={css.heroSubText}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Link className={css.heroBtn} href="/catalog" aria-label="View more">
          View Now
        </Link>
      </section>
    </main>
  );
}
