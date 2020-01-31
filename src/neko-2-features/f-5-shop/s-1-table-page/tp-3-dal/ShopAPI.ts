import axios from 'axios';
import {baseURL} from "../../../../base-url";
import {IShopTable} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableInitialState";

const instance = axios.create({
    baseURL
});

export interface IGetProducts {
    products: IShopTable[];

    minPrice: number;
    maxPrice: number;
    productTotalCount: number;
    page: number;
    pageCount: number;

    error: string;
}

export const ShopAPI = {
    getProducts: async (
        min: number, max: number, searchName: string, page?: number, pageCount?: number, sortProducts?: string
    ) => {
        const response = await instance.get<IGetProducts>(
            `/shop?`
            + (max ? `min=${min}&max=${max}&` : '')
            + (searchName.length > 0 ? `productName=${searchName}&` : '')
            + (page ? `page=${page}&pageCount=${pageCount}&` : '')
            + (sortProducts ? `sortProducts=${sortProducts}&` : '')
        );
        return response.data;
    },
    addProduct: async (productName: string, price: number) => {
        const response = await instance.post('/shop', {product: {productName, price}});
        return response.data;
    },
    updateProduct: async (productName: string, price: number, id: string) => {
        const response = await instance.put('/shop', {product: {productName, price, id}});
        return response.data;
    },
    deleteProduct: async (id: string) => {
        const response = await instance.delete(`/shop?id=${id}`);
        return response.data;
    },

};
