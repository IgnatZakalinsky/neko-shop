import {Dispatch} from "redux";
import {
    booleanClear,
    booleanError,
    booleanLoading,
    booleanSuccess
} from "../../../../f-3-common/c-1-boolean-reducer/booleanCallbacks";
import {FORGOT_ACTION_NAMES} from "../b-2-redux/forgotActions";

export const forgotLoading = (dispatch: Dispatch, loading: boolean) => {
    booleanLoading(dispatch, FORGOT_ACTION_NAMES, loading);
};
export const forgotError = (dispatch: Dispatch, error: string) => {
    booleanError(dispatch, FORGOT_ACTION_NAMES, error);
};
export const forgotSuccess = (dispatch: Dispatch, success: boolean) => {
    booleanSuccess(dispatch, FORGOT_ACTION_NAMES, success);
};
export const forgotClear = (dispatch: Dispatch) => {
    booleanClear(dispatch, FORGOT_ACTION_NAMES);
};
