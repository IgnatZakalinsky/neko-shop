import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../tp-2-bll/getProductsThunks";
import {shopTableModel} from "./shopTableModel";
import {addProduct} from "../tp-2-bll/addProductThunks";
import {updateProduct} from "../tp-2-bll/updateProductThunks";
import {deleteProduct} from "../tp-2-bll/deleteProductThunks";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import TableContainer from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/TableContainer";
import {FlexColumnCenterCenter} from "../../../../neko-3-styles/flex-containers";

const ShopTableContainer: React.FC = () => {
    const {shop} = useSelector((store: IAppStore) => store.tables);
    const dispatch = useDispatch();

    const model = shopTableModel(
        (id: string) => dispatch(updateProduct(id)),
        (id: string) => dispatch(deleteProduct(id)),
        (productName: string, price: number) => dispatch(addProduct(productName, price)),
    );

    useEffect(() => {
        dispatch(getProducts())
    }, []);

    // // redirect logic
    // if (redirect) {
    //     return <Redirect to={SIGN_IN_PATH}/>;
    // }
    // if (!show) return (
    //     <div style={{height: '80vh', ...FlexColumnCenterCenter, color: 'orange'}}>
    //         Loading...
    //     </div>
    // );

    return (
        <TableContainer
            table={'shop'} model={model} data={shop.items}
        />
    );
};

export default ShopTableContainer;
