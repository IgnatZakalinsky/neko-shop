import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import TableContainer from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/TableContainer";
import {ITableModel} from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/Table";
import { basketTableModel } from './basketTableModel';
import {deleteItem} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableActions";

const BasketTableContainer: React.FC = () => {
    const {shopBasket} = useSelector((store: IAppStore) => store.tables);
    const dispatch = useDispatch();

    const deleteP = (id: string) => dispatch(deleteItem("shopBasket", id));

    const model: ITableModel[] = basketTableModel(deleteP);

    return <TableContainer title={'shopBasket'} table={'shopBasket'} model={model} data={shopBasket.items}/>;
};

export default BasketTableContainer;
