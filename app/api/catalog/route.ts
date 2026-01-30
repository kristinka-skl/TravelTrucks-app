import { NextRequest, NextResponse } from 'next/server';
import { api } from '../api';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');
    const res = await api.get('/campers', { params: { page, limit } });
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch campers' },
      { status: 500 }
    );
  }
}
