import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { Card, Icon } from 'semantic-ui-react'

function AllUsers() {
  const initialState = {
    loading: true,
    error: "",
    users: {},
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        console.log(action.payload);
        return {
          loading: false,
          error: "",
          users: action.payload,
        }
      case "FETCH_ERROR":
        return {
          loading: false,
          error: "Something went wrong",
          users: {},
        }   
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allusers/")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ERROR",
          payload: error,
        });
      });
  });
  return (
    // <div> 
    <React.Fragment>

      {state.loading
        ? "Loading ....."
        : state.users.data.map((user, index) => {
            return (
    //           <div key={index}>
    //             username={user.username}
    //             <br/>
    //             email={user.email}
    //             <br/>
    //             age={user.age}
    //             <br/> 
    //             telephone={user.tel}
    //             <hr/>
    //           </div>
    //         );
    //       })}
    // </div>
    <Card>
    <Card.Content header={user.username}/>
    <Card.Content description={user.email} />
    <Card.Content extra>
      <Icon name='user' />{user.admin ? "L'utilisateur est admin" : "L'utilisateur n'est pas admin"}
    </Card.Content>
  </Card>
        );
    })
}
    </React.Fragment>
  )

}

export default AllUsers;
