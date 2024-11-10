export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainImage: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
  publishedAt: string
  excerpt?: string
  body: any
}
