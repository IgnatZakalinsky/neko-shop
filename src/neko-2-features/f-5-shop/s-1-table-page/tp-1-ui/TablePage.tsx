import React from 'react';
import ShopTableContainer from "./ShopTableContainer";
import Search from "../../../f-3-common/c-5-table/t-5-search/Search";
import ShopPagination from "./u-1-buttons/ShopPagination";

const TablePage: React.FC = () => {
    return (
        <>
            <Search/>
            <ShopTableContainer/>
            <ShopPagination/>
        </>
    );
};

export default TablePage;
