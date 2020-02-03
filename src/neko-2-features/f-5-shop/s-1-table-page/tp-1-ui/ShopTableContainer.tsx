import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../tp-2-bll/getProductsThunks";
import {shopTableModel} from "./shopTableModel";
import {addProduct} from "../tp-2-bll/addProductThunks";
import {updateProduct} from "../tp-2-bll/updateProductThunks";
import {deleteProduct} from "../tp-2-bll/deleteProductThunks";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import TableContainer from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/TableContainer";
import {IShopTable} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableInitialState";
import { addItem } from '../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableActions';

const ShopTableContainer: React.FC = () => {
    const {shop} = useSelector((store: IAppStore) => store.tables);
    const dispatch = useDispatch();

    const model = shopTableModel(
        (productName: string, price: number, id: string) => dispatch(updateProduct(productName, price, id)),
        (id: string) => dispatch(deleteProduct(id)),
        (productName: string, price: number) => dispatch(addProduct(productName, price)),
        (product: IShopTable) => dispatch(addItem("shopBasket", product))
    );

    useEffect(() => {
        dispatch(getProducts())
    }, []);

    return <TableContainer table={'shop'} model={model} data={shop.items}/>;
};

export default ShopTableContainer;
