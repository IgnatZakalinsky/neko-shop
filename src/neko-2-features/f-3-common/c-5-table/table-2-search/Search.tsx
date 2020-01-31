import React from 'react';
import PriceRange from "./PriceRange";
import {useDispatch, useSelector} from "react-redux";
import {setSearchName} from "../t-1-table/t-2-bll/b-2-redux/tableActions";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {FlexCenterCenter} from "../../../../neko-3-styles/flex-containers";
import {getProducts} from "../../../f-5-shop/s-1-table-page/tp-2-bll/getProductsThunks";

const Search: React.FC = () => {
    const {shop} = useSelector((store: IAppStore) => store.tables);
    const {searchName} = shop.settings;
    const dispatch = useDispatch();

    // const search = () => {};
    const search = () => dispatch(getProducts());
    const setName = (newSearchName: string) => dispatch(setSearchName('shop', newSearchName));

    return (
        <div style={{margin: '0 10px', minHeight: '100px', ...FlexCenterCenter,}}>
            Search

            <input value={searchName} onChange={e => setName(e.currentTarget.value)} placeholder={'product name'}/>
            {/*<input type={'range'} min={3000} max={9000} list={'il'} step={1000} multiple={true}/>*/}
            {/*<datalist id={'il'}>*/}
                {/*<option value={'0'} label={'3000'}/>*/}
                {/*<option value={'50'} label={'6000'}/>*/}
                {/*<option value={'100'} label={'9000'}/>*/}
            {/*</datalist>*/}

            {/*<PriceRange/>*/}

            <button onClick={search}>Search</button>
        </div>
    );
};

export default Search;
