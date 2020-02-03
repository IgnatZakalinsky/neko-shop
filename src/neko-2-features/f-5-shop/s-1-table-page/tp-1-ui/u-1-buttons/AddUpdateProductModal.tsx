import React, {useEffect, useState} from 'react';
import AddUpdateItemModal from "../../../../f-3-common/c-5-table/t-2-add-update-item-modal/AddUpdateItemModal";
import {useBooleanSelector} from "../../../../f-3-common/c-1-boolean-reducer/useBooleanSelectors";
import {TABLE_ACTION_NAMES} from "../../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableActions";

interface IAddUpdateProductModalProps {
    add?: (productName: string, price: number) => void;
    update?: (productName: string, price: number) => void;

    productName?: string; price?: number;
}

const AddUpdateProductModal: React.FC<IAddUpdateProductModalProps> = (
    {
        add, update,
        productName, price,
    }
) => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [sendRequest, setSendRequest] = useState(false);
    const [loading, error, success] = useBooleanSelector(TABLE_ACTION_NAMES('shop'));

    const setValue2end = (newValue2: string) => {
        setValue2(newValue2);
        setSendRequest(true);
    };
    const addRequest = () => {
        add && add(value1, Number(value2));
        update && update(value1, Number(value2));
        setValue1('test product name');
        setValue2('1000');
    };

    useEffect(() => {
        setValue1(productName || 'test product name');
        setValue2(price ? String(price) : '1000');
    }, [productName, price]);
    useEffect(() => {
        if (sendRequest) {
            setSendRequest(false);
            addRequest();
        }
    }, [sendRequest]);

    return (
        <AddUpdateItemModal
            inputData={[[value1, setValue1], [value2, setValue2end]]}
            buttonShow={update && 'update'}
            buttonDisable={loading.value}
        >
            {add && 'add new product:'}
            {update && 'update product:'}
        </AddUpdateItemModal>
    );
};

export default AddUpdateProductModal;
