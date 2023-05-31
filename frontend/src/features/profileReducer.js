import { createSlice } from '@reduxjs/toolkit';
import { selectAuth, selectProfile} from '../utils/selectors';

const initialState = {
    status: 'void',
    data: null,
    error: null
};

export function getProfile(){
    return async (dispatch, getState) => {
        const token = selectAuth(getState()).token
        const status = selectProfile(getState()).status
        if (status === 'pending' || status === 'updating') {
            return
        }
        dispatch(actions.fetching())
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
            const data = await response.json()
            dispatch(actions.resolved(data))
        } catch (error) {
            dispatch(actions.rejected(error))
        }
    }
}

export const { actions, reducer } = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        fetching: {
            prepare: (token) => ({
                payload: { token },
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
                    draft.data = action.payload
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
                    draft.token = null
                    draft.status = 'rejected'
                    return
                }
                return
            }
        },
        reset: (draft) => {
            return initialState;
        }
    }
})

export const { reset, fetching, resolved, rejected } = actions

export default reducer;