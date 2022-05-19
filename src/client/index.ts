import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const {
  REACT_APP_PROJECT_ID,
  REACT_APP_DATASET,
  REACT_APP_API_VERSION,
  REACT_APP_USE_CDN,
  REACT_APP_TOKEN
} = process.env;

console.log(
  REACT_APP_PROJECT_ID,
  REACT_APP_DATASET,
  REACT_APP_API_VERSION,
  REACT_APP_USE_CDN,
  REACT_APP_TOKEN
);

const client = sanityClient({
  projectId: REACT_APP_PROJECT_ID,
  dataset: REACT_APP_DATASET,
  apiVersion: REACT_APP_API_VERSION,
  useCdn: REACT_APP_USE_CDN,
  token: REACT_APP_TOKEN
});

const builder = imageUrlBuilder(client);

const urlFor = (source: SanityImageSource) => builder.image(source);

export { client, urlFor };
