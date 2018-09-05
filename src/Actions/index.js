// Start Function for set Field value in store
export function fieldValueStore(type, data) {
    return {
        type: type,
        params: data
    }
}

// Start Function for submit form data
export function formSubmit(type, data) {
    return {
        type: type,
        payload: data
    }
}

// Start Function for get data
export function getData(type, data=null) {
    return {
        type: type,
        payload:data
    }
}
