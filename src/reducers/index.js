import { ADD_FEATURES, REMOVE_FEATURES, UPDATE_TOTAL } from '../actions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const reducer = (state=initialState, action) => {
    console.log('action', action)
    switch (action.type) {
        case ADD_FEATURES:
            return setAddFeatures(state, action);
            // return {
            //     ...state, car:{...state.car}, features: state.car.features.includes(action.payload)
            //     ? [...state.car.features] : [...state.car.features, action.payload]
            // }    
        case REMOVE_FEATURES:
            return setRemovefeatures(state, action)
            // return {
            //     ...state, car:{...state.car}, features: state.car.features.filter(features => features.id !== action.payload.id) 
            // }
        case UPDATE_TOTAL:
            return setTotal(state, action)
            // return {
            //     ...state, additionalPrice:state.additionalPrice + action.payload
            // }
        default: return state;
    }
}

export const setAddFeatures = (state, action) => {
    return {
        ...state, car:{...state.car, features: state.car.features.includes(action.payload)
        ? [...state.car.features] : [...state.car.features, action.payload]
        }
    }
}
export const setRemovefeatures = (state, action) => {
    return {
        ...state, car:{...state.car, features: state.car.features.filter(features => features.id !== action.payload.id) 
        }
    }
}

export const setTotal = (state, action) => {
    return {
        ...state, additionalPrice:state.additionalPrice + action.payload
    }
}
