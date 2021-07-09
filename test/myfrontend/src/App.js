import UserStorage from './stores/UserStorage';
import SubmitButton from './SubmitButton';
import './App.css';
import { observer } from 'mobx-react';
import React from 'react';
import LoginForm from './LoginForm';

class App extends React.Component {
  async componentDidMount(){
    try{
      let res= await fetch('/isLoggedIn',{
        method:'post',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        }
      });
      let result= await res.json();

      if(result && result.success){
        UserStorage.loading=false;
        UserStorage.isLoggedIn=true;
        UserStorage.username=result.username;
      }
      else{
        UserStorage.loading=false;
        UserStorage.isLoggedIn=false;
      }
    }catch(e){
      UserStorage.loading=false;
      UserStorage.isLoggedIn=false;

    }
  }

  async doLogOut(){
    try{
      let res= await fetch('/logout',{
        method:'post',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        }
      });
      let result= await res.json();

      if(result && result.success){
        UserStorage.isLoggedIn=false;
        UserStorage.username='';
      }
     
    }catch(e){
      console.log(e);
    }
  }
  render(){
    if(UserStorage.loading){
      return( 
      <div className="app">
        <div className='container'>
          Loading, Please Wait...
        </div>
      
      </div>);
      
    }
    else if(UserStorage.isLoggedIn){
      <div className="app">
        <div className='container'>
         Welcome {UserStorage.username}
         <SubmitButton
         text={'Logout'}
         disabled={false}
         onClick={()=>this.doLogOut()}
         />
        </div>
      
    </div>

    }
  return (
    <div className="app">
      <div className='container'>
      <LoginForm/>
      </div>
    </div>
  );
}
}

export default observer(App);
