import { createReducer, on } from '@ngrx/store';
import { login } from '../actions/auth.actions';

export interface State {
  users: { login: string; password: string }[];
}

export const initialState: State = {
  users: [],
};

export const authReducer = createReducer(
  initialState,
  on(login, (state, payload) => ({
    users: [...state.users, payload],
  }))
);
