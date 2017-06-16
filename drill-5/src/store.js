import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import trivia from './ducks/trivia';

export default createStore(trivia, applyMiddleware(promiseMiddleware()));
