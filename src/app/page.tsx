import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link children="Ir al Blog" href={'/blog'} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"/>
    </main>
  )
}
