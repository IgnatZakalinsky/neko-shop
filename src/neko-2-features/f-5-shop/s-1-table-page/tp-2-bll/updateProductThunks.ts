import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ShopAPI} from "../tp-3-dal/ShopAPI";
import {getProducts} from "./getProductsThunks";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {ITableActions} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableActions";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const updateProduct = (id: string): ThunkAction<Return, IAppStore, ExtraArgument, ITableActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ITableActions>, getStore: IGetStore) => {

        // nekoLoading(dispatch, true);

        try {
            const data = await ShopAPI.updateProduct(id);
            if (data.error) {
                // nekoError(dispatch, data.error);

                console.log('Shop Update Product Error!', data.error);
            } else {

                // dispatch(setTable('shop', data.products));
                // nekoSuccess(dispatch, true);

                console.log('Neko Update Product Success!', data);
                dispatch(getProducts());
            }
        } catch (e) {
            // nekoError(dispatch, e.message);

            console.log('Neko Update Product Error!', e)
        }
    };
