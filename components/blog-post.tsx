import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { Post } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface BlogPostProps {
  post: Post
  isPreview?: boolean
}

export default function BlogPost({ post, isPreview = false }: BlogPostProps) {
  if (!post) return null

  const content = (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-[300px] w-full">
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <div className="text-gray-600 mb-4">
          {new Date(post.publishedAt).toLocaleDateString()}
        </div>
        {isPreview ? (
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
        ) : (
          <div className="prose max-w-none">
            <PortableText value={post.body} />
          </div>
        )}
      </div>
    </motion.article>
  )

  if (isPreview) {
    return (
      <Link href={`/blog/${post.slug.current}`}>
        {content}
      </Link>
    )
  }

  return content
}
