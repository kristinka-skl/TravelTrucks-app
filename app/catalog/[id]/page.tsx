import CamperItem from '@/app/components/CamperItem/CamperItem';
import { getCamperDetails } from '@/app/lib/api';

interface CamperDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function CamperDetails({ params }: CamperDetailsProps) {
  const { id } = await params;
  const camper = await getCamperDetails(id);
  return <CamperItem camper={camper} />;
}
