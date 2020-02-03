import React from 'react';
import ShopTableContainer from "./ShopTableContainer";
import Search from "../../../f-3-common/c-5-table/t-5-search/Search";
import ShopPagination from "./u-1-buttons/ShopPagination";
import Modal from "../../../f-3-common/c-2-modals/modals-1-ui/Modal";
import {NavLink} from "react-router-dom";
import {SHOP_BASKET_PATH} from "../../../../neko-1-main/m-1-ui/Routes";

const TablePage: React.FC = () => {
    return (
        <>
            <Search/>
            <ShopTableContainer/>
            <ShopPagination/>
            <Modal width={70} height={30} show={true} enableBackground={false} modalStyle={{left: '50px'}}>
                <NavLink to={SHOP_BASKET_PATH}>basket</NavLink>
            </Modal>
        </>
    );
};

export default TablePage;
