import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p>Hero banner page</p>
      <Link href="/catalog">View Now</Link>
    </>
  );
}
