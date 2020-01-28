import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ShopAPI} from "../tp-3-dal/ShopAPI";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {ITableActions, setTable} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableActions";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getProducts = (p?: number, pc?: number): ThunkAction<Return, IAppStore, ExtraArgument, ITableActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ITableActions>, getStore: IGetStore) => {
        const {min, max, searchName} = getStore().tables.shop.settings;

        // nekoLoading(dispatch, true);

        try {
            const data = await ShopAPI.getProducts(min, max, searchName, p, pc);
            if (data.error) {
                // nekoError(dispatch, data.error);

                console.log('Shop Get Products Error!', data.error);
            } else {

                dispatch(setTable('shop', data.products, {
                    minPrice: data.minPrice,
                    maxPrice: data.maxPrice,
                    min: data.minPrice,
                    max: data.maxPrice,

                    searchName,

                    productTotalCount: data.productTotalCount,
                    page: data.page,
                    pageCount: data.pageCount,
                }));
                // nekoSuccess(dispatch, true);

                console.log('Neko Get Products Success!', data)
            }
        } catch (e) {
            // nekoError(dispatch, e.message);

            console.log('Neko Get Products Error!', e)
        }
    };
