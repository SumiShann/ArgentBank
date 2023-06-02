import { createSlice } from '@reduxjs/toolkit';
import { selectToken, selectUsername} from '../utils/selectors';
import * as profileActions from "./profileReducer";

const usernameState = {
    status: 'void',
    data: null,
    error: null
};

export function updateUsername(username){
    return async (dispatch, getState) => {
        const token = selectToken(getState())
        const status = selectUsername(getState()).status
        const update = {
            userName: "" + username
        }
        if (status === 'pending' || status === 'updating') {
            return
        }
        dispatch(actions.fetching(username))
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: "put",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(update)
            })
            const res = await response.json()
            const data = res.body
            dispatch(actions.resolved(data))
            dispatch(profileActions.update(username))
        } catch (error) {
            dispatch(actions.rejected(error))
        }
    }
}

export const { actions, reducer } = createSlice({
    name: 'user',
    initialState: usernameState,
    reducers: {
        fetching: {
            prepare: (username) => ({
                payload: { username },
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
            prepare: (data) => ({
                payload: { data },
            }),
            reducer: (draft, action) => {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.data = action.payload.data
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
                    draft.error = action.payload
                    draft.data = null
                    draft.status = 'rejected'
                    return
                }
                return
            }
        },
        reset: (draft) => {
            return usernameState;
        }
    }
})

export const { reset, fetching, resolved, rejected } = actions

export default reducer;