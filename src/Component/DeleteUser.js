import React, { Component } from 'react';
import axios from 'axios';
import history from './history';


class DeleteUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId : '',
            userType : 'Doctor'
         }
       
       this.changeHandler = this.changeHandler.bind(this)
       this.deleteHandler = this.deleteHandler.bind(this)
    }

    changeHandler(event)
    {
        this.setState({
            [event.target.name] : event.target.value
        })
    } 

     deleteHandler(event)
     {
           event.preventDefault()
           axios.delete(`http://localhost:8081/admin/deleteById/${this.state.emailId}/${this.state.userType}`)
           .then()
           .catch(error=>{
               alert(error.response.data)
           })
     } 


    render() { 
        const {
            emailId ,
            userType
         } = this.state
        return (  
            <div class="main">
            <div><br /><br />
                   <form class="form" onSubmit={this.deleteHandler}>
                      
                   <label class="label1"> Email </label> <br />
                     <input class="input" type="text" name="emailId" value={emailId} placeholder='chirsevans7@gmail.com' onChange={this.changeHandler}/> <br />
                    
                     <label> User Type </label> <br />
                    
                     <select class="input" name="userType" value={userType} onChange={this.changeHandler}> 
                         <option value="Doctor"> Doctor </option>
                         <option value="Patient"> Patient </option>
                         <option value="Librarian"> Librarian </option>
                         <option value="LibraryStudent"> LibraryStudent </option>
                         <option value="Admin"> Admin </option>
                     </select><br />

                     <button class="submit" type="submit"> Delete </button>

                   </form>
            </div>
            
            <div>
            <form class="form"> 
            <button class="submit" onClick={() => history.push('/AdminHomePage')}>Back</button>
            </form><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            </div>
         );
    }
}
 
export default DeleteUser;