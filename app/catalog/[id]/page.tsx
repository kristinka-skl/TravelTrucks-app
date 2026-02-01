import { getCamperDetails } from '@/app/lib/api';

import CamperDetailsClientPage from './camperDetails.client';

interface CamperDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function CamperDetailsPage({
  params,
}: CamperDetailsProps) {
  const { id } = await params;
  const camper = await getCamperDetails(id);
  return <CamperDetailsClientPage camper={camper} />;
}
