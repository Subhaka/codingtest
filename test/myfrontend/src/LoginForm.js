
import './App.css';
import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStorage from './stores/UserStorage';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username :'',
      email:'',
      password:'',
      buttonDisabled:false
    }
  }
  setInputValue(property,val){
    val=val.trim();
    if(val.length>12){
      return;
    }
    this.setState({
      [property]:val
    })
  }

  resetForm(){
    this.setState({
      username:'',
      email:'',
      password:'',
      buttonDisabled:false
    })
  }


  async doLogin(){
    if(!this.state.username){
      return;
    }
    if(!this.state.email){
      return;
    }
    if(!this.state.password){
      return
    }
    this.setState({
      buttonDisabled:true
    })

    try{
      let res= await fetch('/login',{
        method:'post',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          username:this.state.username,
          email:this.state.email,
          password:this.state.password
        })
      });

      let result= await res.json();
      if(result && result.success){
        UserStorage.isLoggedIn=true;
        UserStorage.username=result.username;
        UserStorage.email=result.email;
      } 

      else if(result && result.success===false){
        this.resetForm();
        alert(result.msg);
      }
    }catch(e){
      console.log(e);
      this.resetForm();
    }
  }
  render(){
  return (
    <div className="loginForm">
    Login
    <InputField
    type='text'
    placeholder='UserName'
    value={this.state.username ? this.state.username:''}
    onChange={(val)=>this.setInputValue('username',val )}
    />

<InputField
    type='email'
    placeholder='Email'
    value={this.state.email ? this.state.email:''}
    onChange={(val)=>this.setInputValue('email',val )}
    />

<InputField
    type='password'
    placeholder='Password'
    value={this.state.password ? this.state.password:''}
    onChange={(val)=>this.setInputValue('password',val )}
    />

    <SubmitButton
    text='Login'
    disabled={this.state.buttonDisabled}
    onClick={()=>this.doLogin()}
/>
    </div>
  );
}
}


export default LoginForm;
