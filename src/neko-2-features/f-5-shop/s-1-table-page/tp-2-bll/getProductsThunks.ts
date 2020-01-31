import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ShopAPI} from "../tp-3-dal/ShopAPI";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {ITableActions, setTable} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-2-redux/tableActions";
import {
    tableLoading, tableError, tableSuccess
} from "../../../f-3-common/c-5-table/t-1-table/t-2-bll/b-1-callbacks/tableBooleanCallbacks";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getProducts =
    (newPage?: number, newPageCount?: number): ThunkAction<Return, IAppStore, ExtraArgument, ITableActions> =>
        async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ITableActions>, getStore: IGetStore) => {
            const {min, max, searchName, page, pageCount} = getStore().tables.shop.settings;

            tableLoading(dispatch, true, 'shop');

            try {
                const data = await ShopAPI
                    .getProducts(min, max, searchName, newPage || page, newPageCount || pageCount);
                if (data.error) {
                    tableError(dispatch, data.error, 'shop');

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
                    tableSuccess(dispatch, true, 'shop');

                    console.log('Neko Get Products Success!', data)
                }
            } catch (e) {
                tableError(dispatch, e.response ? e.response.data.error : e.message, 'shop');

                console.log('Neko Get Products Error!', {...e})
            }
        };
