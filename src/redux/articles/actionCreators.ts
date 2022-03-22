import { Dispatch } from "react";
import { RootState } from "..";
import { getArticles } from "../../utils/getArticles";
import { ActionTypes } from "./actionTypes";
import { ArticlesState } from "./declarations";

// set query action
interface SetQueryAction {
  type: ActionTypes.SET_QUERY;
  payload: ArticlesState["searchQuery"];
}

export const setQuery = (
  newQuery: SetQueryAction["payload"],
): SetQueryAction => {
  return {
    type: ActionTypes.SET_QUERY,
    payload: newQuery,
  };
};

// set articles
interface SetArticlesAction {
  type: ActionTypes.SET_ARTICLES;
  payload: ArticlesState["articles"];
}

export const setArticles = (
  articles: SetArticlesAction["payload"],
): SetArticlesAction => {
  return {
    type: ActionTypes.SET_ARTICLES,
    payload: articles,
  };
};

// set is loading
interface SetIsLoadingAction {
  type: ActionTypes.SET_IS_LOADING;
  payload: ArticlesState["isLoading"];
}

export const setIsLoading = (
  isLoading: SetIsLoadingAction["payload"],
): SetIsLoadingAction => {
  return {
    type: ActionTypes.SET_IS_LOADING,
    payload: isLoading,
  };
};

// update articles
export const updateArticles =
  () =>
  async (
    dispatch: Dispatch<SetArticlesAction | SetIsLoadingAction>,
    getState: () => RootState,
  ) => {
    dispatch(setIsLoading(true));

    const state = getState();
    const query = state.articles.searchQuery;
    const token = state.user.token;

    const articles = await getArticles(query, token as string);

    dispatch(setArticles(articles));
    dispatch(setIsLoading(false));
  };

// set active article
interface SetActiveArticleAction {
  type: ActionTypes.SET_ACTIVE_ARTICLE;
  payload: ArticlesState["activeArticle"];
}

export const setActiveArticle = (
  activeArticle: SetActiveArticleAction["payload"],
): SetActiveArticleAction => {
  return {
    type: ActionTypes.SET_ACTIVE_ARTICLE,
    payload: activeArticle,
  };
};

export type ArticleAction =
  | SetQueryAction
  | SetArticlesAction
  | SetIsLoadingAction
  | SetActiveArticleAction;
