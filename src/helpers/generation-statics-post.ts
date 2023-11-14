import fs from "fs/promises";
import { fetchApi } from "./fetch-api";

/**
 * Elimina el último archivo y el archivo allPosts.mdx si existen.
 * @async
 */
async function deleteLastFile() {
  try {
    try {
      // Elimina el archivo allPosts.mdx si existe
      const allPostsFileName = `./posts/allPosts.mdx`;
      await fs.unlink(allPostsFileName); // Intenta eliminar el archivo sin verificar su existencia
    } catch (error) {
      if (error) {
        // El archivo no existe, lo puedes ignorar
      } else {
        console.error("Error al eliminar el archivo:", error);
      }
    }

    // Obtener la lista de archivos en la carpeta /post
    const files = await fs.readdir("./posts");

    // Encontrar el número del último archivo .mdx
    const lastFile = files
      .filter((file) => file.endsWith(".mdx")) // Filtra solo los archivos con extensión .mdx
      .map((file) => parseInt(file.split(".")[0])) // Convierte el nombre de archivo a número
      .sort((a, b) => b - a)[0]; // Obtiene el número del último archivo

    if (lastFile) {
      // Elimina el último archivo .mdx
      const fileName = `./posts/${lastFile}.mdx`;
      await fs.unlink(fileName);     
    }
  } catch (error) {
    console.error("Error al eliminar el archivo:", error);
  }
}

/**
 * Genera archivos estáticos para los posts obtenidos de la API.
 * @async
 */
export async function generatePostStatics() {
  async function getServerSideProps() {
    if (process.env.NODE_ENV === "development") {
      const { data } = await fetchApi("/posts");
      const posts = data;

      // Crear la carpeta /post si no existe
      await fs.mkdir("./posts", { recursive: true });

      // Crear un archivo único para todos los posts
      const allPostsFileName = `./posts/allPosts.mdx`;
      let allPostsContent = "";

      for (const post of posts) {
        const { title, description, createdAt, body } = post.attributes;

        // Agregar marcador de inicio único para cada post
        const postContent = `---
title: ${title}
description: ${description}
date: ${createdAt}
---

${body}

---POST_DELIMITER---\n`;

        allPostsContent += postContent;
      }

      // Escribe todos los posts en el archivo único
      await fs.writeFile(allPostsFileName, allPostsContent);

      // Divide el archivo único en archivos individuales
      const postsArray = allPostsContent.split("---POST_DELIMITER---\n");
    
      for (let i = 0; i < postsArray.length; i++) {
        const postContent = postsArray[i];
        
        
        const fileName = `./posts/${i + 1}.mdx`; 
        await fs.writeFile(fileName, postContent);        
      }

      // Llama a la función para eliminar los últimos archivos
      //await deleteLastFile();
    }
  }

  getServerSideProps();
}
