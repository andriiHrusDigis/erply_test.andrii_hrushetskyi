export type Articles = {
  status: string;
  totalResults: number;
  articles: Array<{
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
      id: string;
      name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
  }>;
};

export const getArticles = async (searchQuery: string, token: string) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${token}&pageSize=50`,
  );
  const result: Articles = await response.json();

  return result.articles;
};
