import React, { Component } from 'react'

class Registrer extends Component {
 render() {

     return(
    
        <div >
            <form action = "http://localhost:5000/api/signup" method = "POST">
                <label>Name :</label>
                <input type="text" name="username"/>
                <label>email :</label>
                <input type="email" name="email"/>
                <label>mot de passe :</label>
                <input type="password" name="password"/>
                <label>age:</label>
                <input type="number" name="age"/>
                <label>telephone :</label>
                <input type="text" name="tel"/>
    
                <input type="submit" name="inscription"/>
            </form>
        </div>
     )
 }
}

export default Registrer