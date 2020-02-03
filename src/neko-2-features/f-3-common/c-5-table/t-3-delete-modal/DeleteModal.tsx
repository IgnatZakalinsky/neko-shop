import React, {ReactNode, useState} from 'react';
import ModalQuestion from "../../c-2-modals/modals-1-ui/question/ModalQuestion";

interface IDeleteModal {
    id: string; deleteItem: (id: string) => void;
    buttonDisable: boolean;

    deleteButton?: ReactNode; question?: ReactNode;
    // styles
}

const DeleteModal: React.FC<IDeleteModal> = (
    {
        id, deleteItem, buttonDisable,
        deleteButton = 'delete', question = 'delete item?'
    }
) => {
    const [show, setShow] = useState(false);

    const setTrue = () => {
        deleteItem(id);
        setShow(false);
    };
    const setFalse = () => {
        setShow(false);
    };

    return (
        <>
            <button onClick={() => setShow(true)} disabled={buttonDisable}>{deleteButton}</button>

            <ModalQuestion
                show={show}

                setTrue={setTrue} setFalse={setFalse}

                enableBackground={true} backgroundOnClick={() => setShow(false)}

                width={300} height={130}
            >
                {question}
            </ModalQuestion>
        </>
    );
};

export default DeleteModal;
