import { getRandomInt } from "../../utils/getRandomInt";
import { ArrayElement, Articles } from "../../utils";

export interface ArticlesState {
  searchQuery: string;
  articles: Articles["articles"];
  isLoading: boolean;
  activeArticle: null | ArrayElement<Articles["articles"]>;
}

const words = [
  "USA",
  "fashion",
  "war",
  "Ukraine",
  "Moscow",
  "Tank",
  "Iraq",
  "Tesla",
  "Science",
  "California",
  "Apple",
  "Google",
  "Meta",
  "Facebook",
  "sanctions",
  "children",
  "pets",
  "food",
  "desert",
  "Africa",
  "Estonia",
  "Snow",
  "Weather",
  "Rain",
  "Clouds",
  "Hot",
  "Water",
  "E-commerce",
  "Earth",
  "Mars",
  "Lion",
  "Monkey",
  "Tiger",
  "Cow",
  "Ecology",
  "Green Energy",
  "Roof",
  "Cycle",
  "Car",
  "BMW",
  "Mercedes",
  "Tavria",
  "Poland",
  "Germany",
  "Zelenskyi",
  "Biden",
  "Sholtz",
  "crawen",
  "Las Vegas",
  "weed",
];

export const initialState: ArticlesState = {
  searchQuery: words[getRandomInt(49)],
  articles: [],
  isLoading: false,
  activeArticle: null,
};
