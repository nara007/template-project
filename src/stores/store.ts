import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {},
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type AppStore = typeof store;

export { store };
export type { AppDispatch, AppStore, RootState };
