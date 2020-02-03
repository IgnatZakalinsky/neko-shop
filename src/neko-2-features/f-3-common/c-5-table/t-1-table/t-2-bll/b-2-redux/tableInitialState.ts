export interface IShopTable {
    id: string;
    productName: string;
    price: number;
}

export interface IShopSettings {
    minPrice: number;
    maxPrice: number;
    min: number;
    max: number;

    searchName: string;

    sortProducts: string;

    productTotalCount: number;
    page: number;
    pageCount: number;
}

export interface ITableState {
    shop: {
        items: IShopTable[];
        settings: IShopSettings;
    };
    shopBasket: {
        items: IShopTable[];
        settings: IShopSettings;
    };

}

export type ITables = 'shop';

export const tableInitialState: ITableState = {
    shop: {
        items: [],
        settings: {
            minPrice: 1000,
            maxPrice: 9000,
            min: 1000,
            max: 9000,

            searchName: '',

            sortProducts: '',

            productTotalCount: 7,
            page: 1,
            pageCount: 10,
        }
    },
    shopBasket: {
        items: [],
        settings: {
            minPrice: 1000,
            maxPrice: 9000,
            min: 1000,
            max: 9000,

            searchName: '',

            sortProducts: '',

            productTotalCount: 7,
            page: 1,
            pageCount: 10,
        }
    },

};
