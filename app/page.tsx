import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      

      <div>
      <h1>Hello Word</h1>

      <Link href='/auth/login'>Login</Link>
      </div>

    </main>
  )
}
