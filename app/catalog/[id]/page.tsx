import { getCamperDetails } from '@/app/lib/api';

import CamperDetailsClientPage from './camperDetails.client';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Metadata } from 'next';

interface CamperDetailsProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: CamperDetailsProps): Promise<Metadata> {
  const { id } = await params;
  const camper = await getCamperDetails(id);
  return {
    title: `Camper: ${camper.name}`,
    description: camper.description.slice(0, 30),
    openGraph: {
      title: `Camper: ${camper.name}`,
      description: camper.description.slice(0, 100),
      url: `/catalog/${id}`,
      siteName: 'Travel Trucks',
      images: [
        {
          url: camper.gallery[0].thumb,
          width: 1200,
          height: 630,
          alt: camper.name,
        },
      ],
      type: 'article',
    },
  };
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
