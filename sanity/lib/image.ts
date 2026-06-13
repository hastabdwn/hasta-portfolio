import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = createImageUrlBuilder(client)

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source)
}


// import createImageUrlBuilder from '@sanity/image-url'
// import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
// import { client } from './client'

// const builder = createImageUrlBuilder(client)

// export function urlFor(source: SanityImageSource) {
//   return builder.image(source)
// }
