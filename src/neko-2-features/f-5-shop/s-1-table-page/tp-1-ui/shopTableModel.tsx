import React from 'react';
import {ITableModel} from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/Table";
import SortButton from "../../../f-3-common/c-5-table/table-4-sort-button/SortButton";
import AddUpdateItemModal from "../../../f-3-common/c-5-table/table-5-add-update-item-modal/AddUpdateItemModal";
import DeleteModal from "../../../f-3-common/c-5-table/table-6-delete-modal/DeleteModal";
import {IShopTable} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableInitialState";

export const shopTableModel = (
    update: (id: string) => void,
    deleteP: (id: string) => void,
    add?: () => void,
): ITableModel[] => {
    return [
        {
            title: (i: number) => (<div key={i} style={{width: '60%'}}>product</div>),
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
                    {/*<button onClick={add}>add</button>*/}
                    <AddUpdateItemModal/>
                </div>
            ),
            render: (d: IShopTable, i: number) => (
                <div key={i} style={{width: '15%'}}>
                    <DeleteModal id={d.id}/>
                    {/*<button onClick={() => deleteP(d.id)}>delete</button>*/}
                    <button onClick={() => update(d.id)}>update</button>
                </div>
            )
        },

    ];
};
