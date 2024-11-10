import { Post } from '@/types/index'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface RelatedPostsProps {
  posts: Post[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  // Filter out posts without slugs
  const validPosts = posts.filter((post): post is Post & { slug: { current: string } } => 
    post?.slug?.current !== undefined
  )

  if (validPosts.length === 0) return null

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {validPosts.map((post, index) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug.current}`}>
              <div className="group cursor-pointer">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
