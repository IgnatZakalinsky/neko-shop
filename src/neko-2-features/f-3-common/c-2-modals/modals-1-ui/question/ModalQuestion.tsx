import React, {CSSProperties, ReactNode} from 'react';
import Modal from "../Modal";
import {FlexAlignCenterSpaceAround} from "../../../../../neko-3-styles/flex-containers";

interface IModalQuestion {
    show: boolean;

    setTrue: () => void;
    setFalse: () => void;
    buttonStyles?: CSSProperties;
    trueStyles?: CSSProperties;
    falseStyles?: CSSProperties;
    buttonTrue?: ReactNode;
    buttonFalse?: ReactNode;

    enableBackground?: boolean;
    backgroundStyle?: CSSProperties;
    backgroundOnClick?: () => void;

    width: number;
    height: number;
    modalStyle?: CSSProperties;
    modalOnClick?: () => void;
}

const ModalQuestion: React.FC<IModalQuestion> = (
    {
        setTrue,
        setFalse,
        buttonStyles,
        trueStyles,
        falseStyles,
        buttonTrue = 'Yes',
        buttonFalse = 'No',

        enableBackground,
        backgroundStyle,
        backgroundOnClick = () => {},

        width,
        height,
        modalStyle,
        modalOnClick = () => {},

        show,
        children,
    }
) => {

    console.log('render ModalQuestion');
    return (
        <Modal
            enableBackground={enableBackground}
            backgroundOnClick={backgroundOnClick}
            backgroundStyle={backgroundStyle}

            width={width}
            height={height}
            modalOnClick={modalOnClick}
            modalStyle={modalStyle}

            show={show}
        >
            {children ? children : 'question Modal'}
            <div
                style={{
                    width: '100%',
                    ...FlexAlignCenterSpaceAround,
                    ...buttonStyles,
                }}
            >
                <button onClick={setTrue} style={{...trueStyles}}>{buttonTrue}</button>
                <button onClick={setFalse} style={{...falseStyles}}>{buttonFalse}</button>
            </div>
        </Modal>
    );
};

export default ModalQuestion;
