import PageHeader from "@/components/PageHeader";
import { fetchApi } from "@/helpers/fetch-api";
import { formatDate } from "@/helpers/format-date-helper";
import { Post } from "@/interfaces/post";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import ButtonBack from "@/components/ButtonBack";
const getData = async (slug = "") => {
  const path = "/posts";
  const urlParamsObject = {
    populate: "*",
    filters: {
      slug: slug,
    },
  };
  const { data } = await fetchApi(path, urlParamsObject);
  return data[0];
};

interface Props {
  params: {
    slug: string;
  };
}
const Post = async ({ params }: Props) => {
  const { slug } = params;
  const post: Post = await getData(slug);

  if (!post) {
    return notFound();
  }

  const { title, description, body, createdAt, image } = post.attributes;
  const { url, width, height } = image.data.attributes.formats.medium;

  return (
    <div className="space-y-8 px-8">
      <div className="ml-8">
      <ButtonBack children="Volver"/>
      </div>
      <PageHeader text={title} />
      <p className="text-gray-500">{formatDate(createdAt)}</p>
      <p>{description}</p>
      <Image
        className="rounded-t-lg"
        src={url}
        alt={`image ${title}`}
        width={width}
        height={height}
      />
      <div className="prose">
        {/* Este error en particular está codificado en TypeScript. El equipo de React está trabajando con el equipo de TypeScript para resolver esto. */}
        {/* https://github.com/vercel/next.js/issues/42292 */}
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={body} />
      </div>
    </div>
  );
};

export default Post;
