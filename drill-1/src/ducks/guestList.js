const ADD_GUEST = 'ADD_GUEST';
const REMOVE_GUEST = 'REMOVE_GUEST';


const initialState = {
  guests: ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff']
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case ADD_GUEST:
      return Object.assign({}, state, {guests: [...state.guests, action.payload]});
    case REMOVE_GUEST:
      return Object.assign({}, state, {guests: state.guests.filter((guest, i) => i !== action.payload)});
   default: 
    return state;
  } 
}

export function addGuest(guest){
  return {
    type: ADD_GUEST,
    payload: guest
  }
}

export function removeGuest(i){
  return {
    type: REMOVE_GUEST,
    payload: i
  }
}