import React from 'react';
import Table, {ITableModel, ITableProps} from "./Table";
import {useSelector} from "react-redux";
import {IAppStore} from "../../../../../neko-1-main/m-2-bll/store";
import {IShopTable, ITables} from "../t-2-bll/b-2-redux/tableInitialState";
import {useBooleanSelector} from "../../../c-1-boolean-reducer/useBooleanSelectors";
import {TABLE_ACTION_NAMES} from "../t-2-bll/b-2-redux/tableActions";

const testModel: ITableModel[] = [
    {
        title: (i: number) => (<div key={i} style={{width: '70%'}}>product</div>),
        render: (d: IShopTable, i: number) => (<div key={i} style={{width: '70%'}}>{d.productName}</div>)
    },
    {
        title: (i: number) => (<div key={i} style={{width: '30%'}}>price</div>),
        render: (d: IShopTable, i: number) => (<div key={i} style={{width: '30%'}}>{d.price}</div>)
    },

];

interface ITableContainerProps {
    table?: ITables; data?: any[]; model?: ITableModel[];
}

const TableContainer: React.FC<ITableProps & ITableContainerProps> = (
    {
        table = 'shop', data, model,
        ...tableProps
    }
) => {
    const [loading, error, success] = useBooleanSelector(TABLE_ACTION_NAMES(table));

    const {shop} = useSelector((store: IAppStore) => store.tables);

    return (
        <Table
            loading={loading.value} error={error.data.message || ''}

            data={data || shop.items} model={model || testModel}

            {...tableProps}
        />
    );
};

export default TableContainer;
