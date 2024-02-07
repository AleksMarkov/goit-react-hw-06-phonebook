import { legacy_createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import reducer from './reducer';

const enchancer = devToolsEnhancer();

const store = legacy_createStore(reducer, enchancer);

export default store;
