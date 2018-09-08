// Start Function for set Field value in store

import Services from '../Services';


export function fieldValueStore(type, data) {
    console.log("dasdadas")
    return {
        type: type,
        params: data
    }
}

// Start Function for submit form data
export function formSubmit(type, data) {
    Services.userdata(data)
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
