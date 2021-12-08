import ConnectionAPI from "./connection-api";
import { IBreedsRetreivalModel } from "../models/breeds-retrieval.model";

export default class BreedResourceService {
    public static async get(): Promise<Array<IBreedsRetreivalModel>> {
        try {
            const response = await fetch(`${ConnectionAPI.API_URL}breeds`);
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
        searchTerm: string
    ): Promise<Array<IBreedsRetreivalModel>> {
        try {
            const response = await fetch(
                `${ConnectionAPI.API_URL}breeds/search?name=${searchTerm}`
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
