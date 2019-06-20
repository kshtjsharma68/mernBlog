export const SIGN_IN            = "SIGN_IN";
export const SIGN_IN_SUCCESS    = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAIL       = "SIGN_IN_FAIL";

export function loginIn(payload) {
    return {
        type: SIGN_IN,
        payload
    };    
}