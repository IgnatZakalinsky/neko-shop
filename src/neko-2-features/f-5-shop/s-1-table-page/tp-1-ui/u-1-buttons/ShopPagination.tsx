import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../../neko-1-main/m-2-bll/store";
import Pagination from "../../../../f-3-common/c-5-table/t-4-pagination/Pagination";
import {getProducts} from "../../tp-2-bll/getProductsThunks";

const ShopPagination: React.FC = () => {

    const {shop} = useSelector((store: IAppStore) => store.tables);
    const {page, pageCount, productTotalCount} = shop.settings;
    const dispatch = useDispatch();

    const getPage = (newPage: number, newPageCount: number) => {
        dispatch(getProducts(newPage, newPageCount))
    };

    return <Pagination page={page} pageCount={pageCount} productTotalCount={productTotalCount} getPage={getPage}/>;
};

export default ShopPagination;
