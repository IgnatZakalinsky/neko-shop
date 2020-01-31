import React, {useEffect, useState} from 'react';
import AddUpdateItemModal from "../../../../f-3-common/c-5-table/t-2-add-update-item-modal/AddUpdateItemModal";

interface IAddUpdateProductModalProps {
    add: (productName: string, price: number) => void
}

const AddUpdateProductModal: React.FC<IAddUpdateProductModalProps> = (
    {
        add,
        ...modalProps
    }
) => {
    const [value1, setValue1] = useState('test product name');
    const [value2, setValue2] = useState('1000');
    const [sendRequest, setSendRequest] = useState(false);

    const setValue2end = (newValue2: string) => {
        setValue2(newValue2);
        setSendRequest(true);
    };
    const addRequest = () => {
        add(value1, Number(value2));
        setValue1('test product name');
        setValue2('1000');
    };
    useEffect(() => {
        if (sendRequest) {
            setSendRequest(false);
            addRequest();
        }
    }, [sendRequest]);

    return (
        <AddUpdateItemModal inputData={[[value1, setValue1], [value2, setValue2end]]}>
            add new product:
        </AddUpdateItemModal>
    );
};

export default AddUpdateProductModal;
