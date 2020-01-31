import React from 'react';
import {ITableModel} from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/Table";
import SortButton from "../../../f-3-common/c-5-table/table-4-sort-button/SortButton";
import DeleteModal from "../../../f-3-common/c-5-table/table-6-delete-modal/DeleteModal";
import {IShopTable} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableInitialState";
import AddUpdateProductModal from "./u-1-buttons/AddUpdateProductModal";

export const shopTableModel = (
    update: (productName: string, price: number, id: string) => void,
    deleteP: (id: string) => void,
    add: (productName: string, price: number) => void,
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
                    <AddUpdateProductModal add={add}/>
                </div>
            ),
            render: (d: IShopTable, i: number) => (
                <div key={i} style={{width: '15%'}}>
                    <DeleteModal id={d.id}/>
                    <AddUpdateProductModal
                        productName={d.productName} price={d.price}
                        update={(productName: string, price: number) => update(productName, price, d.id)}
                    />
                </div>
            )
        },

    ];
};
