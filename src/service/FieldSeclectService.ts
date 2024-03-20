import axios from "./axios";

export interface LanguageModel {
  language: string;
  languageId: number;
}
export interface CategoryModel {
  category: string;
  categoryId: number;
}

export const GetAllCategories = async () => {
  try {
    return axios.get<CategoryModel[]>("/categories");
  } catch (err) {
    console.log(err);
  }
};

export const GetAllLanguage = async () => {
  try {
    return axios.get<LanguageModel[]>("/language");
  } catch (err) {
    console.log(err);
  }
};
