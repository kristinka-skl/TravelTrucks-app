import { NextRequest, NextResponse } from 'next/server';
import { api } from '../api';

export async function GET(request: NextRequest) {
  try {
    const res = await api.get(
      '/campers'
      //   { params }
    );
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch campers' },
      { status: 500 }
    );
  }
}
