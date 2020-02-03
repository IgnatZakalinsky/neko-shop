import {ITableState, tableInitialState} from "./tableInitialState";
import {
    ITableActions,
    TABLE_SET_TABLE, TABLE_ADD_ITEM, TABLE_DELETE_ITEM,
    TABLE_SET_MIN_MAX_PRICE, TABLE_SET_SEARCH_NAME, TABLE_SET_SORT_PRODUCTS
} from "./tableActions";

export const tableReducer = (state = tableInitialState, action: ITableActions): ITableState => {
    switch (action.type) {
        case TABLE_SET_TABLE: {
            return {
                ...state,
                [action.table]: {
                    items: action.items,
                    settings: action.settings,
                },
            }
        }
        case TABLE_ADD_ITEM: {
            return {
                ...state,
                [action.table]: {
                    items: [...state[action.table].items, action.item],
                    settings: state[action.table].settings
                },
            }
        }
        case TABLE_DELETE_ITEM: {
            return {
                ...state,
                [action.table]: {
                    items: state[action.table].items.filter(item => item.id !== action.id),
                    settings: state[action.table].settings
                },
            }
        }
        // case TABLE_UPDATE_ITEM: {
        //     return {
        //         ...state,
        //         [action.table]: action.item,
        //     }
        // }
        case TABLE_SET_SORT_PRODUCTS: {
            return {
                ...state,
                [action.table]: {
                    ...state[action.table],
                    settings: {...state[action.table].settings, sortProducts: action.sortProducts}
                },
            }
        }
        case TABLE_SET_MIN_MAX_PRICE:{
            return {
                ...state,
                [action.table]: {
                    ...state[action.table],
                    settings: {...state[action.table].settings, min: action.min, max: action.max}
                }
            }
        }
        case TABLE_SET_SEARCH_NAME: {
            return {
                ...state,
                [action.table]: {
                    ...state[action.table],
                    settings: {...state[action.table].settings, searchName: action.searchName}
                }
            }
        }

        default: {
            return state;
        }
    }
};
