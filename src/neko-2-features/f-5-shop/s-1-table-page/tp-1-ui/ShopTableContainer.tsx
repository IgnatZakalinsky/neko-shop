import React, {useEffect} from 'react';
// import TableContainer from "../../../features-3-common/common-5-table/table-1-ui/TableContainer";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../tp-2-bll/getProductsThunks";
import {shopTableModel} from "./shopTableModel";
import {addProduct} from "../tp-2-bll/addProductThunks";
import {updateProduct} from "../tp-2-bll/updateProductThunks";
import {deleteProduct} from "../tp-2-bll/deleteProductThunks";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import Table from "../../../f-3-common/c-5-table/t-1-table/t-1-ui/Table";


const ShopTableContainer: React.FC = () => {
    // const {
    //     loading, error, success, dispatch,
    //     name,
    //
    //     show,
    //     setShow,
    //
    //     redirect,
    //     setRedirect,
    //
    //     logout,
    // } = useNekoContainerLogic();

    const {shop} = useSelector((store: IAppStore) => store.tables);
    const dispatch = useDispatch();

    const model = shopTableModel(
        (id: string) => dispatch(updateProduct(id)),
        (id: string) => dispatch(deleteProduct(id)),
        // () => dispatch(addProduct()),
    );

    useEffect(() => {
        dispatch(getProducts())
    }, []);

    // // redirect logic
    // if (redirect) {
    //     return <Redirect to={SIGN_IN_PATH}/>;
    // }
    // if (!show) return (
    //     <div
    //         style={{
    //             height: '80vh',
    //             display: 'flex',
    //             flexFlow: 'column',
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //             color: 'orange',
    //         }}
    //     >
    //         Loading...
    //     </div>
    // );

    return (
        <Table
            model={model}
            data={shop.items}
        />
    );
};

export default ShopTableContainer;
