import { ActionReducer, ActionReducerMap, State } from '@ngrx/store';

import { storeLogger } from 'ngrx-store-logger';
import { createSelector } from 'reselect';

import { environment } from '../../environments/environment';

/*
  Import createSelector from reselect to make selection of different parts of the state fast efficient
 */
/*
  Import the store logger to log all the actions to the console
 */
/*
 Import the layout state
 */
export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {};

export function logger(reducer: ActionReducer<AppState>): any {
    // default, no options
    return storeLogger()(reducer);
}

export const metaReducers = !environment.production ? [logger] : [];
