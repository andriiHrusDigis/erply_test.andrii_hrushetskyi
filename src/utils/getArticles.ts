export interface Articles {
  status: "ok";
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
}

interface Error {
  code: string;
  message: string;
  status: string;
}

export const getArticles = async (
  searchQuery: string,
  token: string,
): Promise<Articles["articles"]> => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${token}&pageSize=50`,
    );
    const result: Articles | Error = await response.json();

    if ((result as Articles).articles) {
      return (result as Articles).articles;
    } else {
      alert(
        `Error happened when loading stories:\n"${(result as Error).message}"`,
      );
      return [];
    }
  } catch {
    alert("error happend when loading posts");
    return [];
  }
};
