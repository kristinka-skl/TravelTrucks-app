import Link from 'next/link';
import { getCampers } from '../lib/api';
import CampersList from '../components/CampersList/CampersList';

export default async function Campers() {
  const { items: campers } = await getCampers();

  return (
    <section>
      <h2>Campers List</h2>
      {campers && <CampersList campers={campers} />}
    </section>
  );
}

//   (
//   <ul>
//     {campers.map((camper) => (
//       <li key={camper.id}>
//         <p>{camper.name}</p>
//         <Link href={`/catalog/${camper.id}`}>Show more</Link>
//       </li>
//     ))}
//   </ul>
// )}
