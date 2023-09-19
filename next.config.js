

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"],
      },
}

module.exports = nextConfig


// const withMDX = createMDX({
//   options: {
//     extension: /\.mdx?$/,
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: "@mdx-js/react",
//   },
// })
// export default withMDX(nextConfig)