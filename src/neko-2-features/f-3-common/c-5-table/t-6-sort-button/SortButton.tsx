import React, {useState} from 'react';
import {FlexColumnCenterCenter} from "../../../../neko-3-styles/flex-containers";
import {useDispatch} from "react-redux";
import {SetSortProducts} from "../t-1-table/t-2-bll/b-2-redux/tableActions";
import {getProducts} from "../../../f-5-shop/s-1-table-page/tp-2-bll/getProductsThunks";

const SortButton: React.FC = () => {
    const [sort, setSort] = useState(-1);
    const dispatch = useDispatch();

    const sortPrice = (x: number) => {
        setSort(x);
        dispatch(SetSortProducts('shop', x + 'price'));
        dispatch(getProducts());
    };

    return (
        <div style={{...FlexColumnCenterCenter}}>
            <button style={{background: sort === 1 ? 'lime' : undefined}} onClick={() => sortPrice(1)}>/\</button>
            <button style={{background: sort === 0 ? 'lime' : undefined}} onClick={() => sortPrice(0)}>\/</button>
        </div>
    );
};

export default SortButton;
