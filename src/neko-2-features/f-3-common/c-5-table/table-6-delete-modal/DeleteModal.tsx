import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import ModalQuestion from "../../c-2-modals/modals-1-ui/question/ModalQuestion";

interface IDeleteModal {
    id: string;
}

const DeleteModal: React.FC<IDeleteModal> = ({id}) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const setTrue = () => {
        // dispatch(deleteProduct(id));
        setShow(false);
    };
    const setFalse = () => {
        setShow(false);
    };

    return (
        <>
            <button onClick={() => setShow(true)}>delete</button>

            <ModalQuestion
                show={show}

                setTrue={setTrue}
                setFalse={setFalse}

                enableBackground={true}
                backgroundOnClick={() => setShow(false)}

                width={300}
                height={130}
            >
                delete product?
            </ModalQuestion>
        </>
    );
};

export default DeleteModal;
