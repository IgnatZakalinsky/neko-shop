import React, {useState} from 'react';
import ModalInput, {IModalInput} from "../../c-2-modals/modals-1-ui/input/ModalInput";

interface IAddUpdateItemModalProps {
    add: (productName: string, price: number) => void
}

const AddUpdateItemModal: React.FC<IAddUpdateItemModalProps & IModalInput> = (
    {
        add,
        ...modalProps
    }
) => {
    const [show, setShow] = useState(false);
    const [value1, setValue1] = useState('test product name');
    const [value2, setValue2] = useState('1000');

    const setValue2end = (newValue2: string) => {
        setValue1('test product name');
        setValue2('1000');
        add(value1, Number(newValue2));
    };

    return (
        <>
            <button onClick={() => setShow(true)}>add</button>
            <ModalInput
                show={show} close={() => setShow(false)}

                inputData={[[value1, setValue1], [value2, setValue2end]]}

                enableBackground={true}
                backgroundOnClick={() => setShow(false)}

                width={300} height={200}
                {...modalProps}
            >
                add new product:
            </ModalInput>
        </>
    );
};

export default AddUpdateItemModal;
