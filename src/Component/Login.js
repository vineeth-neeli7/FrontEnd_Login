import React, { Component } from 'react';
import axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            emailId:'',
            userType:'',
            password:''
        }
    }

    handlechange=(e)=>{
        const {name,value}=e.target
        this.setState({[name]:value})
    }
    submitHandler= e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8081/Login",this.state)
        .then(response =>{
            console.log(response)
            console.log(response.data) 
        })
        .catch(error =>{
            console.log(error)
            alert(error.response.data)
        })
    }
    render(){
        const{emailId,userType,password}=this.state;
        return(
            <div class="main"> <br /><br /> 
                        <form class="form" onSubmit={this.submitHandler}>
                        
                            <label class="label1" htmlFor="emailId">EmailId</label>
                            <input class="input" type="text" name="emailId" value={this.state.emailId} placeholder="chirsevans7@gmail.com" onChange={this.handlechange}/>
                            
                            <label> User Type </label> <br />
                            <select class="input" name="userType" value={userType} onChange={this.handlechange}> 
                         <option value="Doctor"> Doctor </option>
                         <option value="Patient"> Patient </option>
                         <option value="Librarian"> Librarian </option>
                         <option value="LibraryStudent"> LibraryStudent </option>
                         <option value="Admin"> Admin </option>
                     </select> <br />
                            <label class="label1" htmlFor="password">Password</label>
                            <input class="input" type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handlechange}/>
                       
                                 <button class="submit" type="submit"> 
                                    Login
                                  </button>
                              
                        </form> <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        );
    }
}

export default Login;