import { ArticleAction } from "./actionCreators";
import { ActionTypes } from "./actionTypes";
import { ArticlesState, initialState } from "./declarations";

export const articlesReducer = (
  state: ArticlesState = initialState,
  action: ArticleAction,
): ArticlesState => {
  switch (action.type) {
    case ActionTypes.SET_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case ActionTypes.SET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };

    case ActionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case ActionTypes.SET_ACTIVE_ARTICLE:
      return {
        ...state,
        activeArticle: action.payload,
      };

    default:
      return initialState;
  }
};
