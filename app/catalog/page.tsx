import { getCampers } from '../lib/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import CatalogClientPage from './catalogPage.client';

export default async function Campers() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['campers'],
    queryFn: () => getCampers(1),
    initialPageParam: 1,
  });
  // const { items: campers } = await getCampers();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClientPage />
    </HydrationBoundary>
  );
}
