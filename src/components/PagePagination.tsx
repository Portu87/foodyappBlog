import { cn } from "@/helpers/classnames";
import Link from "next/link";

interface Props {
  path: string;
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
const PagePagination = ({ pagination, path }: Props) => {
  const { page, pageCount, pageSize, total } = pagination;
  const classNumber =
    "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const classNumberActive =
    "z-10 flex items-center justify-center px-3 h-8 leading-tight text-red-600 border border-red-300 bg-red-50 hover:bg-red-100 hover:text-red-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
  const classPrevius =
    "flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const classNext =
    "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";


  return (
    <nav aria-label="Page navigation example" className="text-center">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <Link
            href={
                page === 1 ? `/${path}?page=${page}` : `/blog?page=${page - 1}`
            }
            className={cn(classPrevius,{
                "bg-gray-300 opacity-30 pointer-events-none hover:none": page === 1
            })}
          >
            <span className="sr-only">Anterior</span>
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
          </Link>
        </li>

        {Array.from({ length: pageCount }, (_, i) => i + 1).map((number) => (
          <li>
            <Link
              href={`/${path}?page=${number}`}
              className={`${number === page ? classNumberActive : classNumber}`}
            >
              {number}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={
                page === pageCount
                ? `/${path}?page=${page}`
                : `/${path}?page=${page + 1}`
            }
            className={cn(classNext,{
                "bg-gray-300 opacity-30 pointer-events-none hover:none": page === pageCount
              })}
          >
            <span className="sr-only">Siguiente</span>
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PagePagination;
