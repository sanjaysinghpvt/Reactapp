import axios from "axios";

function isLocal() {
  let hostname = window.location.hostname;
  if (hostname.includes("127.0.0.1")) {
    return true;
  }
  return false;
}


function getBaseURL() {
  return "http://127.0.0.1:8000/";
  if (isLocal()) {
    return "http://127.0.0.1:8000/api/";
  }
  //return 'http://custom-env-2.uzvpv7bkxz.us-east-1.elasticbeanstalk.com/api/';
}

 function userdata(data) {
  let url = getBaseURL() + 'oauth/token';
  return (
    axios({
        method: 'POST',
        url: url,  
        data:{
            client_id:2,
            client_secret:'uhVQr5AssPTdHNb0jLGOQhdY6rPILyWPHFXW6Htn',
            grant_type:'password',
            username:data.email,
            password:data.password
        },
      })
      .then(function (response) {
        //console.log('response are ',response.data);
        return({type: 'response',
                params: response})        
      })
      .catch(function (error) {
        return({type: 'error',
               params: error});
      })
    );

    
}


export default {
  userdata
};
