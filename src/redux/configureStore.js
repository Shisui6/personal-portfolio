import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projects/projects';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export default store;
