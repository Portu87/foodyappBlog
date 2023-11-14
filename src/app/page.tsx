import { generatePostStatics } from '@/helpers/generation-statics-post';
import Image from 'next/image'
import Link from 'next/link'
import PageCardImage from '@/components/PageCardImage';
import PageCardStore from '@/components/PageCardStore';
import { fetchApi } from '@/helpers/fetch-api';
import { Post } from '@/interfaces/post';
import { Book } from '@/interfaces/book';

const getPost = async (page = 1, pageSize = 2) => {
  const path = "/posts";
  const urlParamsObject = {
    populate: "*",
    sort: {
      createdAt: "desc",
    },
    pagination: {
      page: page,
      pageSize: pageSize,
    },
  };
  const { data, meta } = await fetchApi(path, urlParamsObject);

  return { data, pagination: meta.pagination };
};

const getBooks = async (page = 1, pageSize = 2) => {
  const path = "/books";
  const urlParamsObject = {
    populate: "*",
    sort: {
      createdAt: "asc",
    },
    pagination: {
      page: page,
      pageSize: pageSize,
    },
  };

  const { data, meta } = await fetchApi(path, urlParamsObject);
  return { data: data, pagination: meta.pagination };
};

export default async function Home() {
  const { data: products } = await getBooks();
  const { data: posts} = await getPost();
  const post = posts.pop()
  const product = products.pop()
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Novedades</h1>
      <div className="flex flex-wrap gap-4">
        <PageCardImage post={post} />
      </div>
      <h1 className="text-3xl font-semibold mt-8 mb-4">Productos Destacados</h1>
      <div className="flex flex-wrap gap-4">
        <PageCardStore book={product} />
      </div>
    </div>
  )
}
