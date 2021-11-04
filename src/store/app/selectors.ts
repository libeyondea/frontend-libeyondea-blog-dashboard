import { createSelector } from 'reselect';
import { RootState } from 'store';

export const selectAppInitialized = createSelector([(state: RootState) => state], (state) => state.appState.initialized);

export const selectAppSidebar = createSelector([(state: RootState) => state], (state) => state.appState.sidebar);
