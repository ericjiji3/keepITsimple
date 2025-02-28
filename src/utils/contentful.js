import { createClient } from 'contentful';

export const createContentClient = () => {
  console.log('createClient:', createClient);
  console.log('Space ID:', process.env.CONTENTFUL_SPACE_ID);
  console.log('Access Token:', process.env.CONTENTFUL_ACCESS_TOKEN);

  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
}
const client = createContentClient()

export const getEntriesByType = async (type) => {
  const response = await client.getEntries({
    content_type: type,
  })

  return response.items
}

export const getHome = async () => {
  const results = await client.getEntry('5Q7PQMBmlsVS6lUsfC4PMH')
  return results
}

export const getTestimonial1 = async () => {
  const results = await client.getEntry('2QDcDnXdVFtPN2VbOr8Mse')
  return results
}

export const getChatbotCardsSection = async () => {
    const results = await client.getEntry('35FKukk1E1yDMwO0Uf4vVm')
    return results
}

export const getMicrosoftBIHomeSection = async () => {
  const results = await client.getEntry('2JLr8bbwXEKM9LXpOZjWdd')
  return results
}

export const getAccordianSection = async () => {
  const results = await client.getEntry('1yQTfm3mdpXnLhfMRZTYJ4')
  return results
}

export const getVideoSection = async () => {
    const results = await client.getEntry('5cdew85kmcZ0jRzesiFREU')
    return results
}
  
export const getContactSection = async () => {
    const results = await client.getEntry('19eHdSKKAIxTqmxUVASXsB')
    return results
}

// export const getEntryBySlug = async (slug, type) => {
//   const queryOptions = {
//     content_type: type,
//     'fields.slug[match]': slug,
//   }
//   const queryResult = await client.getEntries(queryOptions)
//   return queryResult.items[0]
// }