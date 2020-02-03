import React from 'react';
import {ITableModel} from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/Table";
import SortButton from "../../../f-3-common/c-5-table/t-6-sort-button/SortButton";
import {IShopTable} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableInitialState";

export const basketTableModel = (
    deleteP: (id: string) => void
): ITableModel[] => {
    return [
        {
            title: (i: number) => (<div key={i} style={{width: '60%'}}>product name</div>),
            render: (d: IShopTable, i: number) => (<div key={i} style={{width: '60%'}}>{d.productName}</div>)
        },
        {
            title: (i: number) => (
                <div key={i} style={{width: '25%', display: 'flex', alignItems: 'center'}}>
                    price .<SortButton/>
                </div>
            ),
            render: (d: IShopTable, i: number) => (<div key={i} style={{width: '25%'}}>{d.price}</div>)
        },
        {
            title: (i: number) => (
                <div key={i} style={{width: '15%'}}>
                    ...
                </div>
            ),
            render: (d: IShopTable, i: number) => (
                <div key={i} style={{width: '15%'}}>
                    <button onClick={() => deleteP(d.id)}>delete</button>
                </div>
            )
        },

    ];
};
