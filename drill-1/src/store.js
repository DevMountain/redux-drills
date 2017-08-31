import { createStore } from 'redux';
import guestlist_reducer from './ducks/guestList';

export default createStore(guestlist_reducer);