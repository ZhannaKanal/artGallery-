const API_KEY = '49799451-f8b780f05e0b58b32de9ec4e3'

export async function fetchImages(page = 1 , query = 'jet') {
  const response = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&page=${page}&per_page=30`,
  )

  const data = await response.json()
  return data.hits
}