'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import CampersList from '../components/CampersList/CampersList';
import Filters from '../components/Filters/Filters';
import css from './catalogPage.module.css';
import { getCampers } from '../lib/api';
import { useEffect, useRef } from 'react';

import { useSearchParams } from 'next/navigation';

export default function CatalogClientPage() {
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const {
    data,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['campers', params],
    queryFn: ({ pageParam }) => {
      return getCampers({ ...params, page: pageParam });
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
  const prevCountRef = useRef(0);
  useEffect(() => {
    if (prevCountRef.current > 0 && campers.length > prevCountRef.current) {
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
      <div className={css.campersList}>
        {isLoading ? (
          <div className={css.loaderContainer}>
            <span className={css.loader}></span>
          </div>
        ) : isSuccess && data.campers.length > 0 ? (
          <CampersList campers={data.campers} />
        ) : (
          <div className={css.noResults}>
            <p className={css.noResultsText}>Sorry, nothing found</p>
            <p className={css.noResultsSubtext}>
              We couldn&apos;t find any matches for your search. Try adjusting
              your filters or checking for typos.
            </p>
          </div>
        )}

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
