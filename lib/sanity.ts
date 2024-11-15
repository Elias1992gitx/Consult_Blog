import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ipz2xjua'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'blogconsult'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-01',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
