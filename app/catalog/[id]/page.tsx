import { getCamperDetails } from '@/app/lib/api';

import CamperDetailsClientPage from './camperDetails.client';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

interface CamperDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function CamperDetailsPage({
  params,
}: CamperDetailsProps) {
  const { id } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['camper', id],
    queryFn: () => getCamperDetails(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClientPage />
    </HydrationBoundary>
  );
}
