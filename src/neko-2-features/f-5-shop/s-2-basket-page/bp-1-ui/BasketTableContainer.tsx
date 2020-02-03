import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import TableContainer from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/TableContainer";
import {ITableModel} from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/Table";
import {IShopTable} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableInitialState";

const BasketTableContainer: React.FC = () => {
    const {shopBasket} = useSelector((store: IAppStore) => store.tables);
    // const dispatch = useDispatch();

    const model: ITableModel[] = [
        {
            title: (i: number) => (<div key={i} style={{width: '60%'}}>product name</div>),
            render: (d: IShopTable, i: number) => (<div key={i} style={{width: '60%'}}>{d.productName}</div>)
        },
    ];

    return <TableContainer table={'shopBasket'} model={model} data={shopBasket.items}/>;
};

export default BasketTableContainer;
