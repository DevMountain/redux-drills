# Redux Drills
---
You are in charge of building an app that can manage the guest list of DevMountain's next big hackathon. Complete drills 1-4 to build the guest list app. 


### Drill-1 (Setup)

You will start by installing dependencies and creating a single reducer.

* `npm install`
* Install `redux` and `react-redux`.
* Create a `ducks` folder in `src`.
* Inside of the `ducks` folder, create a file called `guestList.js`.
  * Create a reducer. The reducer is just a function that takes in state and an action. For now, have the reducer immediately return state. Export the reducer.

    <details>
      <summary><code><b>Solution: src/ducks/guestList.js</b></code></summary>

      ```
      const initialState = {}

      export default function reducer(state = initialState, action) {
        return state;
      }
      ```
    </details>

Create your store.

* Create a `store.js` file in the `src` folder.
  * In `store.js` import `createStore` ( from redux ) and the reducer.
  * Export the invocation of `createStore` with the reducer as the only argument.
    <details>
      <summary><code><b>Solution: src/store.js</b></code></summary>

      ```
      import { createStore } from 'redux';
      import guestlist_reducer from './ducks/guestList';
      export default createStore(guestlist_reducer);
      ```
    </details>

In `index.js`:
  * Import `Provider` (from react-redux) and the store.
  * In the render method, wrap `<App />` with `Provider`.
  * Pass the store, as a prop, to `Provider`.

      <details>
      <summary>Solution: src/index.js</summary>

      ```
      import React from 'react';

      import ReactDOM from 'react-dom';
      import { Provider } from 'react-redux';
      import App from './App';
      import store from './store';
      import registerServiceWorker from './registerServiceWorker';
      import './index.css';

      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>, document.getElementById('root'));
      registerServiceWorker();
      ```
      </details>

### Drill-2 (Display guest list)

Building on the work you did in drill-1, you will now connect a component to the store so that you can display the guest list.

  * `npm install`
  * Install `redux` and `react-redux`.
  * In `guestList.js`:
    - Set `initialState` to
    ```
    const initialState = {
          guests: ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff']
      }
    ```
In `App.js`:
  * Import `connect` from 'react-redux';
  * Create your `mapStateToProps` function. Pull the list of guests off of state.
  * `mapStateToProps` needs to be the first argument when `connect` is invoked.
  * `map` over the guest list array that is now on props. The map should return some jsx with the guest's name and a remove button.
    ```
    <div key={i} className="list-item">
        <li>{guest}</li>
        <button type="" className="">Remove</button>
    </div>
    ```

<details><summary><code><b>Solution: App.js</b></code></summary>

```
import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button type="" className="">Remove</button>
              </div>
            )
          })}
        </ul>
        <div className="add-guest">
          Add guest: <input type="" className=""/>
          <button type="" className="">Add</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.guests
  };
}

export default connect(mapStateToProps)(App);
```
</details>

### Drill-3 (Add/Delete guests)

Your guest list needs to be able to add and remove guests.

  * `npm install`
  * Install `redux` and `react-redux`.
  * Add functionality of adding guest to list. In `guestList.js`:
    * Export a function called `addGuest`. This function is an action creator. It should return an object with a `type` and `payload`.
    * The `addGuest` function should have one parameter, which will be a guest name.
    * Set up a switch statement in the reducer function. When adding a guest, we should return a new piece of state that includes the new guest we are adding.
  * In `App.js`:
    * Import the `addGuest` function from guestList.js.
    * As the second argument for the connect method, pass in an object with the key and value being `addGuest`.
    ```
    export default connect(mapStateToProps, { addGuest })(App);
    ```
    * Add the `constructor` and set up the initial state for the component. You will need to keep track of what is typed into the input box. (Hint: you will need to use the `onChange` event handler and `this.setState()`)
    * When the `add` button is clicked, you need to call the `addGuest` function (on props) and pass in a guest name (the value of the input, which is on App's component state)
  * You should be able to add guests to the list now. Following a similar process as you did add a guest, add the functionality of removing a guest when the `Remove` button is clicked.

    <details><summary><code><b>Solution: App.js</b></code></summary>

    ```
    import React, { Component } from 'react';
    import { addGuest, removeGuest } from './ducks/guestList';
    import { connect } from 'react-redux';
    import './App.css';

    class App extends Component {
      constructor() {
        super();
        this.state = {
          text: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleInputChange(e) {
        this.setState({
          text: e.target.value
        })
      }
      handleSubmit(e) {
        e.preventDefault();
        this.props.addGuest(this.state.text);
        this.setState({
          text: ''
        })
      }

      render() {
        return (
          <div className="App">
            <h1>DevMountain Hackathon</h1>
            <h3>Guest List:</h3>
            <ul>
              {this.props.list.map( (guest, i) => {
                return (
                  <div key={i} className="list-item">
                    <li>{guest}</li>
                    <button onClick={()=> this.props.removeGuest(i)}>Remove</button>
                  </div>
                )
              })}
            </ul>
            <form
              onSubmit={this.handleSubmit}
              className="add-guest">
              Add guest: <input
              value={this.state.text}
              onChange={this.handleInputChange}
              />
              <button>Add</button>
            </form>
          </div>
        );
      }
    }

    function mapStateToProps(state) {
      return {
        list: state.guests
      }
    }

    export default connect(mapStateToProps,{ addGuest, removeGuest })(App);
    ```
    </details>
    <details><summary><code><b>Solution: guestList.js</b></code></summary>

    ```
    const ADD_GUEST = 'ADD_GUEST';
    const REMOVE_GUEST = 'REMOVE_GUEST';

    const initialState = {
      guests: ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff']
    };

    export function addGuest(guest) {
      return {
        type: ADD_GUEST,
        payload: guest
      }
    }

    export function removeGuest(i) {
      return {
        type: REMOVE_GUEST,
        payload: i
      }
    }

    export default function reducer(state = initialState, action) {
      switch (action.type) {
        case ADD_GUEST:
          return Object.assign({}, state, {guests: [...state, action.payload]});
        case REMOVE_GUEST:
          return Object.assign({}, state, {guests: state.guests.filter((guest, i) => i !== action.payload)});
        default:
          return state;
        }
    }
    ```
    </details>

### Drill-4 (Update guest names)

For drill-4, you will have limited help. You have seen the process of building a store and a reducer, connecting a component to the store, dispatching actions, and displaying data from the store. Use this knowledge to complete drill-4. Try to think through what needs to be done and how to do it.

* `npm install`
* Install `redux` and `react-redux`.
* A child component to `App.js` called `EditGuest` (a modal) has been created for you.
* Import the `EditGuest` component in `App.js`. Put an instance of the EditGuest component under the form tags, in the ternary operator.
* Notice in the component state for `App.js` that you are keeping track of the guest that you want to edit, and the index of that guest in the guest array. You can see how this information is being set by inspecting the `editName` function.
  * The `EditGuest` component needs some information from the `App` component: the guest to edit, the guest to edit's index, and the `hide` function.

    <details><summary><code><b>EditGuest</b></code></summary>

    ```
    {
      this.state.edit ?
            <EditGuest
              guest={this.state.guestToEdit}
              index={this.state.guestIndex}
              hide={this.hideModal} />
            : null
    }
    ```
    </details>

  * In `EditGuest.js`:
    * Add a `value` attribute to the input box and set the value to `this.state.text`
    * At this point, when you click on the edit button, the modal should appear and you should see the name you are editing in the input box.
    * Set up the component so that it is keeping track of any changes to the input box.
  * By now, you are hopefully getting the hang of creating an action creator, importing the action creator and passing it in to the `connect` method, and then referencing it on `props`.
    * Add functionality to the `update` button in `EditGuest.js` so that when it is clicked, it updates the guests name, and closes the modal.
