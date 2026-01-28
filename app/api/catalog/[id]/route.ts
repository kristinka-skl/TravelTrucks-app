import { NextRequest, NextResponse } from 'next/server';
import { api, ApiError } from '../../api';

interface CamperDetailsProps {
  params: Promise<{ id: string }>;
}
export async function GET(
  request: NextRequest,
  { params }: CamperDetailsProps
) {
  const { id } = await params;
  try {
    const { data } = await api(`/campers/${id}`);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      },
      { status: (error as ApiError).status }
    );
  }
}
