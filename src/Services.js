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
        return 'http://127.0.0.1/api/';
				
    }
    //return 'http://custom-env-2.uzvpv7bkxz.us-east-1.elasticbeanstalk.com/api/';
}



function userdata(data){
    console.log(data);
    let url = getBaseURL() + 'login.php'
    console.log(url)
    return (
      /*  axios.post(url, {
            email: data.email,
            password: data.password
        }).then(response => (
            response.data
        )).catch(error => {
            throw 'Ajax module: ' + error;
        })*/

        axios({
            method: 'POST',
            url: url,  
            data:{
                firstName: 'Fred',
                lastName: 'Flintstone'
            },
            headers: {
                'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: true
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          }));
}






export default {
    userdata 
}