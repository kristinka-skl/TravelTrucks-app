import axios from 'axios';
import { Camper, HttpResponse } from '../types/camper';
import cardsPerPage from '../constants/constants';

const nextServer = axios.create({
  baseURL: 'http://localhost:3002/api',
});

export async function getCampers(page?: number) {
  const res = await nextServer.get<HttpResponse>('/catalog', {
    params: { page, limit: cardsPerPage },
  });
  return res.data;
}

export async function getCamperDetails(id: string) {
  const res = await nextServer.get<Camper>(`/catalog/${id}`);
  return res.data;
}
