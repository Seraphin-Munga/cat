import ConnectionAPI from "./connection-api";
import { IfavouriteRetrieval } from "../models/favourite-retrieval.model";
import { IFavouriteCreationModel } from "../models/favourite-creation.model";

export default class FavouriteResourceService {
    public static async get(): Promise<Array<IfavouriteRetrieval>> {
        try {
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'x-api-key"': "DEMO-API-KEY",
                },
            };
            const response = await fetch(
                `${ConnectionAPI.API_URL}favourites`,
                requestOptions
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

    public static async favourite(model: IFavouriteCreationModel): Promise<void> {

        debugger
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'x-api-key"': "DEMO-API-KEY",
                },
                body: JSON.stringify(model),
            };
            const response = await fetch(
                `${ConnectionAPI.API_URL}favourites`,
                requestOptions
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
