import axios from 'axios';
import { Camper, HttpResponse } from '../types/camper';

const nextServer = axios.create({
  baseURL: 'http://localhost:3002/api',
});

export async function getCampers() {
  const res = await nextServer.get<HttpResponse>('/catalog');
  return res.data;
}

export async function getCamperDetails(id: string) {
  const res = await nextServer.get<Camper>(`/catalog/${id}`);
  return res.data;
}
