
import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { enhancedStore } from '../init/middleware/core';
export const store = createStore(rootReducer, enhancedStore);
