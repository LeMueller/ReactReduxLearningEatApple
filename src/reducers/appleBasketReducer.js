import { fromJS } from 'immutable';  //TODO: learn immutable

//2 missions of reducer: 1. init state 2. handle action


const initialState = {
    isPicking: false,
    newAppleId: 3,
    apples: [
        {
            id: 0,
            weight: 233,
            isEaten: false
        },
        {
            id: 1,
            weight: 235,
            isEaten: true
        },
        {
            id: 2,
            weight: 256,
            isEaten: false
        }
    ]
};


export default (state = initialState, action) => {

    let newState ;

    switch (action.type) {

        case 'apple/BEGIN_PICK_APPLE':

            /** set isPicking as true */
            return fromJS(state).set('isPicking', true).toJS();

        case 'apple/DONE_PICK_APPLE':

            let newApple =  {
                id: state.newAppleId,
                weight: action.payload,
                isEaten: false
            };

            /** add newApple in Array: apples， set newAppleId plus 1， set isPicking as false */
            return fromJS(state).update('apples', list => list.push(newApple))
                                .set('newAppleId', state.newAppleId + 1)
                                .set('isPicking', false)
                                .toJS();

        case 'apple/FAIL_PICK_APPLE':

            /** set isPicking as false */
            return fromJS(state).set('isPicking', false).toJS();

        case 'apple/EAT_APPLE':

            /** set the apple in apples with given id isEaten as true*/
            return fromJS(state).setIn(['apples', action.payload, 'isEaten'], true).toJS();

        default:
            return state;
    }

};