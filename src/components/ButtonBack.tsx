"use client";

import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const ButtonBack = ({children}:Props) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      type="button"
      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
    >
      {children}
    </button>
  );
};
export default ButtonBack;
