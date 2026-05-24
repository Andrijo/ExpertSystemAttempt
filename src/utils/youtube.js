export const getYoutubeSearchUrl = (query) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
