import {Dispatch} from "redux";
import {
    booleanClear,
    booleanError,
    booleanLoading,
    booleanSuccess
} from "../../../../f-3-common/c-1-boolean-reducer/booleanCallbacks";
import {SIGN_IN_ACTION_NAMES} from "../b-2-redux/signInActions";

export const signInLoading = (dispatch: Dispatch, loading: boolean) => {
    booleanLoading(dispatch, SIGN_IN_ACTION_NAMES, loading);
};
export const signInError = (dispatch: Dispatch, error: string) => {
    booleanError(dispatch, SIGN_IN_ACTION_NAMES, error);
};
export const signInSuccess = (dispatch: Dispatch, success: boolean) => {
    booleanSuccess(dispatch, SIGN_IN_ACTION_NAMES, success);
};
export const signInClear = (dispatch: Dispatch) => {
    booleanClear(dispatch, SIGN_IN_ACTION_NAMES);
};
