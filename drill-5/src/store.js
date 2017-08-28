import { createStore } from 'redux';
import reducer from './ducks/star_wars';

export default createStore(reducer);