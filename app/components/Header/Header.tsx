import Link from 'next/link';
import css from './Header.module.css';
export default function Header() {
  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <Link href="/">
          <svg width="136" height="15" viewBox="0 0 136 15">
            <use href="/sprite.svg#icon-TravelTrucks"></use>
          </svg>
        </Link>

        <ul className={css.headerNavLinks}>
          <li className={css.headerLink}>
            <Link href="/">Home</Link>
          </li>
          <li className={css.headerLink}>
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
