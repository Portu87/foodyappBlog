 import PageHeader from "@/components/PageHeader";
 import { fetchApi } from "@/helpers/fetch-api";
 import { formatDate } from "@/helpers/format-date-helper";
 import { Post } from "@/interfaces/post";
 import { notFound } from "next/navigation";
 import Image from "next/image";
 import ButtonBack from "@/components/ButtonBack";
 import ReactMarkdown from 'react-markdown';

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
     <div className="space-y-8 px-8 text-black dark:text-white">
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
       <div className="prose text-black dark:text-white">    
       
       <ReactMarkdown>{body}</ReactMarkdown>
     
       </div>
     </div>
   );
 };

 export default Post;
