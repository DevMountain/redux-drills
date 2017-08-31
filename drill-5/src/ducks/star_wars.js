const initialState = {
    people: [{name: 'Harry Potter'}, {name: 'Gandolf'}],
    planets: [{name: 'Xandar'}, {name: 'Hala'}],
    starships: [{name: 'USS Enterprise'}, {name: 'Klingon Bird-of-Prey'}]
}

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}