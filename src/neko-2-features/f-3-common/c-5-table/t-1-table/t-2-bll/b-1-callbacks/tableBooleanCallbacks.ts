import {Dispatch} from "redux";
import {
    booleanClear,
    booleanError,
    booleanLoading,
    booleanSuccess
} from "../../../../c-1-boolean-reducer/booleanCallbacks";
import {TABLE_ACTION_NAMES} from "../b-2-redux/tableActions";
import {ITables} from "../b-2-redux/tableInitialState";

export const tableLoading = (dispatch: Dispatch, loading: boolean, table: ITables) => {
    booleanLoading(dispatch, TABLE_ACTION_NAMES(table), loading);
};
export const tableError = (dispatch: Dispatch, error: string, table: ITables) => {
    booleanError(dispatch, TABLE_ACTION_NAMES(table), error);
};
export const tableSuccess = (dispatch: Dispatch, success: boolean, table: ITables) => {
    booleanSuccess(dispatch, TABLE_ACTION_NAMES(table), success);
};
export const tableClear = (dispatch: Dispatch, table: ITables) => {
    booleanClear(dispatch, TABLE_ACTION_NAMES(table));
};
