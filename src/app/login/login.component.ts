import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email:'',
    password:''
  }
  loginObj: any = {
    email:'',
    password:''
  }
  constructor() { }
  ngOnInit(): void{
   const localData = localStorage.getItem('signupUsers');
   if(localData != null){
    this.signupUsers = JSON.parse(localData);
   }
  }

  onSignUp(){
   this.signupUsers.push(this.signupObj);
   localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
   this.signupObj={
    userName: '',
    email:'',
    password:''
  };
  }
  onLogin(){
   const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert("User loged in successfully");
    }
    else{
      alert('Wrong credentials');
    }
  }

}
