import { NextRequest, NextResponse } from 'next/server';
import { api, ApiError } from '../api';
import axios from 'axios';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams.entries());
    const res = await api.get('/campers', { params });
    return NextResponse.json(res.data);
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const error = e as ApiError;
      const status = error.response?.status || 500;
      if (status === 404) {
        return NextResponse.json({ items: [], total: 0 }, { status: 200 });
      }
      return NextResponse.json(
        {
          error: error.response?.data?.error || error.message,
        },
        { status }
      );
    }
  }
}
