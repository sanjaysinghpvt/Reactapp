import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fieldValueStore,formSubmit} from '../Actions/index.js'
import * as constants from '../Constants'

class LoginView extends Component {

 constructor(props) {
    super(props);
    this.state={
        email:'',  
        password:'',
        email_error_msg:'',
        password_error_msg:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
   
}

renderInputField(label_name,field_type,name,value,error_msg) {
    return (
        <div>
          <label htmlFor={label_name}>
            {label_name}
          </label>
          <input
            name={name}
            placeholder={label_name}
            className="form-control"
            type={field_type}
            value= {value}
            onChange={this.handleChange}
          />
          <span>{error_msg}</span>
        </div>
        
    );
  }
	
handleSubmit(event) {
    event.preventDefault();
    var flag = "";
    this.setState({email_error_msg : ""})
    this.setState({password_error_msg : ""})
    if(this.state.email == ""){
        this.setState({email_error_msg : "please fill email id"})
        flag = "false";
    }else if(this.state.password == ""){
        this.setState({password_error_msg : "please fill email id"})
        flag = "false";
    }
    if(flag != "false"){
        var updateDtata = {
            type: "password",
            params: this.state.password
        }
             this.props.dispatch(formSubmit(constants.UPDATE_FORM_VALUE, updateDtata))
        }
}



handleChange(event) {
    var key= event.target.name
    var val = event.target.value
    switch (key) {
        case "email":
            this.setState({email : val})
            break;
        case "password":
            this.setState({password : val})
            break;
    }
   
}
	
render() {
    return (
    <div className="sufee-login d-flex align-content-center flex-wrap">
        <div className="container">
            <div className="login-content">
						    <div className="login-logo">
                    <a href="index.html">
                        <img className="align-content" src="./images/logo.png" alt=""></img>
                    </a>
                </div>
								<div className="login-form">
                    <form id="login_form" onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            {this.renderInputField("Email address", "email","email",this.state.email,this.state.email_error_msg)}
                        </div>
                        <div className="form-group">
                            {this.renderInputField("Password", "password","password",this.state.password,this.state.password_error_msg)}
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"></input> Remember Me
                            </label>
                            <label className="pull-right">
                                <a href="#">Forgotten Password?</a>
                            </label>

                        </div>
                        <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                        <div className="register-link m-t-15 text-center">
                            <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
                        </div>
                    </form>
                </div>
						</div>
				</div>
    </div>	
    );
  }
}
const mapStateToProps = (state) => ({ 
	login: state.login 
})
export default connect(mapStateToProps)(LoginView)
//export default LoginView;