export const ADD_FEATURES = 'ADD_FEATURES'; 
export const REMOVE_FEATURES = 'REMOVE_FEATURES';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';

export const addFeatures = newFeatures => {
    return {
        type: ADD_FEATURES,
        payload: newFeatures
    }
};

export const removeFeature = removeFeature => {
    return {
        type: REMOVE_FEATURES,
        payload: removeFeature
    }
}

export const updateTotal = totalPrice => {
    return {
        type: UPDATE_TOTAL,
        payload: totalPrice
    }
}
