'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import CampersList from '../components/CampersList/CampersList';
import Filters from '../components/Filters/Filters';
import css from './catalogPage.module.css';
import { getCampers } from '../lib/api';
import { useEffect, useRef } from 'react';
import cardsPerPage from '../constants/constants';

export default function CatalogClientPage() {
  const { data, isSuccess, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['campers'],
      queryFn: ({ pageParam }) => {
        return getCampers(pageParam);
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const totalItems = lastPage.total;
        const loadedItems = allPages.flatMap((page) => page.items).length;
        if (loadedItems < totalItems) {
          return allPages.length + 1;
        }
        return undefined;
      },
      select: (data) => {
        return {
          ...data,
          campers: data.pages.flatMap((page) => page.items),
        };
      },
    });
  const campers = data?.campers || [];
  const prevCountRef = useRef(campers.length);
  useEffect(() => {
    if (campers.length > prevCountRef.current) {
      window.scrollBy({ top: 360, behavior: 'smooth' });
    }
    prevCountRef.current = campers.length;
  }, [campers.length]);

  return (
    <section className={css.catalogSection}>
      <h2 className={css.hidden}>Campers List</h2>
      <div className={css.filters}>
        <Filters />
      </div>
      <div>
        {isSuccess && data.campers && <CampersList campers={data.campers} />}

        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className={css.loadMoreBtn}
            type="button"
          >
            {isFetchingNextPage ? 'Loading...' : 'Load More'}
          </button>
        )}
      </div>
    </section>
  );
}
