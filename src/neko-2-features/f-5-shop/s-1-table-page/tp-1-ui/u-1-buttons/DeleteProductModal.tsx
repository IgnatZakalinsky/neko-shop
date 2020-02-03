import React from 'react';
import DeleteModal from "../../../../f-3-common/c-5-table/t-3-delete-modal/DeleteModal";
import {useBooleanSelector} from "../../../../f-3-common/c-1-boolean-reducer/useBooleanSelectors";
import {TABLE_ACTION_NAMES} from "../../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableActions";

interface IDeleteProductModal {
    id: string;
    deleteItem: (id: string) => void;
    // styles
}

const DeleteProductModal: React.FC<IDeleteProductModal> = ({id, deleteItem,}) => {
    const [loading, error, success] = useBooleanSelector(TABLE_ACTION_NAMES('shop'));

    return (
        <DeleteModal id={id} deleteItem={deleteItem} buttonDisable={loading.value}/>
    )
};

export default DeleteProductModal;