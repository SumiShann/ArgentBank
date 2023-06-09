import { createSlice } from '@reduxjs/toolkit';
import { selectAuth } from '../utils/selectors';

const tokenState = {
    status: 'void',
    token: null,
    error: null,
};

export function login(username, password){
    return async (dispatch, getState) => {
        const user = {
            email: "" + username,
            password: "" + password
        }
        const status = selectAuth(getState()).status
        if (status === 'pending' || status === 'updating') {
            return
        }
        dispatch(actions.fetching(username, password))
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            if (response.ok){
                const data = await response.json()
                const token = data.body.token
                dispatch(actions.resolved(token))
            } else if (response.status === 400){
                window.alert("Invalid fields")
            }
        } catch (error) {
            dispatch(actions.rejected(error))
        }
    }
}

export const { actions, reducer } = createSlice({
    name: 'token',
    initialState: tokenState,
    reducers: {
        fetching: {
            prepare: (username, password) => ({
                payload: { username, password },
            }),
            reducer:  (draft) => {
                if (draft.status === 'void') {
                    draft.status = 'pending'
                    return
                }
                if (draft.status === 'rejected') {
                    draft.error = null
                    draft.status = 'pending'
                    return
                }
                if (draft.status === 'resolved') {
                    draft.status = 'updating'
                    return
                }
                return
            }
        },
        resolved: {
            prepare: (token) => ({
                payload: { token },
            }),
            reducer: (draft, action) => {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.token = action.payload.token
                    draft.status = 'resolved'
                    return
                }
                return
            }
        },
        rejected: {
            prepare: (error) => ({
                payload: { error },
            }),
            reducer: (draft, action) => {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.error = action.payload.error
                    draft.token = null
                    draft.status = 'rejected'
                    return
                }
                return
            }
        },
        reset: (draft) => {
            return tokenState;
        }
    }
})

export const { reset, fetching, resolved, rejected } = actions

export default reducer;