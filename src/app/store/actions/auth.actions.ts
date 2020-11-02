import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth page] Login',
  props<{ login: string; password: string }>()
);
