export interface Post {
  _id: string
  title: string
  slug?: {
    current: string
  }
  mainImage?: any
  publishedAt?: string
  excerpt?: string
  body?: any
}
