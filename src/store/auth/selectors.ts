import { createSelector } from 'reselect';
import { RootState } from 'store';

export const selectAuth = createSelector([(state: RootState) => state], (state) => state.authState.current);
