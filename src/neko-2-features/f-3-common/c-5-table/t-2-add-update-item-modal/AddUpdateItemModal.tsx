import React, {CSSProperties, ReactNode, useState} from 'react';
import ModalInput, {IModalInput} from "../../c-2-modals/modals-1-ui/input/ModalInput";
import {IInputData} from "../../c-2-modals/modals-1-ui/input/InputMap";

interface IAddUpdateItemModalProps {
    inputData?: IInputData[];

    buttonShow?: ReactNode; buttonShowStyle?: CSSProperties;
    buttonDisable: boolean;
}

const AddUpdateItemModal: React.FC<IAddUpdateItemModalProps & IModalInput> = (
    {
        inputData, children,

        buttonShow= 'add', buttonShowStyle,
        buttonDisable,

        ...modalProps
    }
) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(true)} style={buttonShowStyle} disabled={buttonDisable}>
                {buttonShow}
            </button>

            <ModalInput
                show={show} close={() => setShow(false)}

                inputData={inputData}

                enableBackground={true}
                backgroundOnClick={() => setShow(false)}

                width={300} height={200}
                {...modalProps}
            >
                {children}
            </ModalInput>
        </>
    );
};

export default AddUpdateItemModal;
