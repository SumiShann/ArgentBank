import { createSlice } from '@reduxjs/toolkit';
import { selectToken, selectProfile} from '../utils/selectors';

const profileState = {
    status: 'void',
    data: [],
    error: null
};

export function getProfile(){
    return async (dispatch, getState) => {
        const token = selectToken(getState())
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
            const res = await response.json()
            const data = res.body
            dispatch(actions.resolved(data))
        } catch (error) {
            dispatch(actions.rejected(error))
        }
    }
}

export const { actions, reducer } = createSlice({
    name: 'profile',
    initialState: profileState,
    reducers: {
        fetching:  (draft) => {
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
                    draft.data = []
                    draft.status = 'rejected'
                    return
                }
                return
            }
        },
        reset: (draft) => {
            return profileState;
        },
        update: {
            prepare: (username) => ({
                payload: { username },
            }),
            reducer: (draft, action) => {
                draft.data.userName = action.payload.username
                return
            }
        }
    }
})

export const { reset, fetching, resolved, rejected, update } = actions

export default reducer;