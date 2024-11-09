import { client } from '@/lib/sanity'
import { Post } from '@/types'
import { useEffect, useState } from 'react'
import BlogPost from './blog-post'

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        excerpt,
        body
      }`

      const results = await client.fetch(query)
      setPosts(results)
    }

    fetchPosts()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPost key={post._id} post={post} isPreview={true} />
        ))}
      </div>
    </div>
  )
} 