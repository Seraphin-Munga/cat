import ConnectionAPI from "./connection-api";
import { ICategoriesRetrievalModel } from "../models/categories-retrieval,model";
import { IBreedCategoryRetrievalModel } from "../models/breed-category-retrieval.model";

export default class CategoriesResourceService {
    public static async get(): Promise<Array<ICategoriesRetrievalModel>> {
        try {
            const response = await fetch(`${ConnectionAPI.API_URL}categories`);
            return response.json();
        } catch (error: any) {
            if (error && error.error instanceof ProgressEvent) {
                throw new Error(
                    "A connection could not be established. Please contact an administrator."
                );
            }
            throw Error(error.error);
        }
    }

    public static async search(
        categoryId: string
    ): Promise<Array<IBreedCategoryRetrievalModel>> {
        try {
            const response = await fetch(
                `${ConnectionAPI.API_URL}images/search?limit=10&mime_types=&order=Random&size=small&page=0&category_ids=${categoryId}&sub_id=demo-d4fcd2`
            );
            return response.json();
        } catch (error: any) {
            if (error && error.error instanceof ProgressEvent) {
                throw new Error(
                    "A connection could not be established. Please contact an administrator."
                );
            }
            throw Error(error.error);
        }
    }
}
