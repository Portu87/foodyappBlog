import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid grid-cols-1 place-items-center h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-3xl">404 | Not Found</h1>
        <p>Página no encontrada 😒</p>
        <Link
          href="/blog"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Todos los posts
        </Link>
      </div>
    </div>
  );
}
