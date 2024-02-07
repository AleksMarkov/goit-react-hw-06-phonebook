import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import reducer from './reducer';

const enchancer = devToolsEnhancer();

const store = createStore(reducer, enchancer);

export default store;
