import Link from 'next/link';
import { getCampers } from '../lib/api';

export default async function Campers() {
  const { items: campers } = await getCampers();

  return (
    <>
      <p>Campers list page</p>
      {campers && (
        <ul>
          {campers.map((camper) => (
            <li key={camper.id}>
              <p>{camper.name}</p>
              <Link href={`/catalog/${camper.id}`}>Show more</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
