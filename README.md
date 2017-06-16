# Redux Drills
---
You are in charge of building an app that can manage the guest list of DevMountain's next big hackathon. Complete drills 1-4 to build the guest list app. Try your best to only reference the solution when you are really stuck.


### Drill-1

1. `npm install`
2. Install `redux` and `react-redux`.
3. Get your app set up with a redux store.
  1. Create a `ducks` folder where we will build a `guestList` reducer.
  2. Add `store.js`, and create a store using the `guestList` reducer.
  3. In `App.js`, make the needed changes to the render method.

### Drill-2

1. `npm install`
2. Install `redux` and `react-redux`.
3. Display the array of guests that was set on the initial state.
  1. Set up your app the same was you did in Drill-1.
  2. Set `initialState` to
  ```
  const initialState = ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff'];
  ```

### Drill-3
1. `npm install`
2. Install `redux` and `react-redux`.
3. Add all the functionality of Drill-2.
4. Add the functionality of adding and removing from the guest list.

### Drill-4
1. `npm install`
2. Install `redux` and `react-redux`.
3. Add all the functionality of Drill-3.
4. Add the functionality of editing any of the guest names.

### Drill-5
1. `npm install`
2. Install `redux`, `react-redux`, `axios`, and `redux-promise-middleware`.
3. You will need to use the DevMountain trivia api `https://practiceapi.devmountain.com/#api-Trivia`
4. Build out this app so that you can:
  1. See a list of questions and select answers.
  2. Create a new question and have it appear in the list of questions.
  3. Edit questions.
  4. Delete questions.
