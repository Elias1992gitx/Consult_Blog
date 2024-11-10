'use client'

import RelatedPosts from '@/components/related-posts'
import { client, urlFor } from '@/lib/sanity'
import { Post } from '@/types'
import { PortableText } from '@portabletext/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface PostData {
  post: Post
  relatedPosts: Post[]
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [postData, setPostData] = useState<PostData | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      const query = `{
        "post": *[_type == "post" && slug.current == $slug][0]{
          title,
          mainImage,
          publishedAt,
          body,
          "relatedPosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3]{
            title,
            slug,
            mainImage,
            publishedAt
          }
        }
      }`

      const result = await client.fetch(query, { slug: params.slug })
      setPostData(result)
    }

    fetchPost()
  }, [params.slug])

  if (!postData) return <div>Loading...</div>

  const { post, relatedPosts } = postData

  return (
    <motion.main
      className="min-h-screen pt-32 max-w-4xl mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={urlFor(post.mainImage).url()}
        alt={post.title}
        width={1200}
        height={400}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-8">
        {post.publishedAt 
          ? new Date(post.publishedAt).toLocaleDateString()
          : 'Date not available'
        }
      </div>
      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>

      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </motion.main>
  )
}
