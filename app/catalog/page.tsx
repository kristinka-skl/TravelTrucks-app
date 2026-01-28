import Link from 'next/link';

export default function Campers() {
  const camper = {
    id: 1,
  };
  return (
    <>
      <p>Campers list page</p>
      <Link href={`/catalog/${camper.id}`}>Show more</Link>
    </>
  );
}
