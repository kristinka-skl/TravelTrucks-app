'use client';

import Link from 'next/link';
import css from './Header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <Link href="/">
          <svg width="136" height="15" viewBox="0 0 136 15">
            <use href="/sprite.svg#icon-travel-trucks"></use>
          </svg>
        </Link>

        <ul className={css.headerNavLinks}>
          <li>
            <Link
              href="/"
              className={
                pathname === '/' ? css.activeHeaderLink : css.headerLink
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/catalog"
              className={
                pathname === '/catalog' ? css.activeHeaderLink : css.headerLink
              }
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
