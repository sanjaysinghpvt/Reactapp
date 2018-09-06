import axios from 'axios';

function isLocal() {
    let hostname = window.location.hostname;
    if (hostname.includes('127.0.0.1')) {
        return true;
    }
    return false;
}

function getBaseURL() {
    if (isLocal()) {
        return 'http://localhost:8000/api/';
				
    }
    return 'http://custom-env-2.uzvpv7bkxz.us-east-1.elasticbeanstalk.com/api/';
}



function userdata(){
    return "sdfsdfsf";
}


export default {
    userdata 
}