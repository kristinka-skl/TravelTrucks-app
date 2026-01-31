import axios from 'axios';
import { Camper, HttpResponse, SearchParams } from '../types/camper';
import cardsPerPage from '../constants/constants';

const nextServer = axios.create({
  baseURL: 'http://localhost:3002/api',
});

export async function getCampers(params: SearchParams = {}) {
  const { page = 1, limit = cardsPerPage, ...filters } = params;
  const res = await nextServer.get<HttpResponse>('/catalog', {
    params: {
      page,
      limit,
      ...filters,
    },
  });
  return res.data;
}

export async function getCamperDetails(id: string) {
  const res = await nextServer.get<Camper>(`/catalog/${id}`);
  return res.data;
}
