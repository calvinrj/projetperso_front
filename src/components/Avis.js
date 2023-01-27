import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { Card,  } from "semantic-ui-react";

function Avis() {
  const initialState = {
    loading: true,
    error: "",
    notes: {},
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        console.log(action.payload);
        return {
          loading: false,
          error: "",
          notes: action.payload,
        };
      case "FETCH_ERROR":
        return {
          loading: false,
          error: "Something went wrong",
          notes: {},
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allnotes")
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
    <React.Fragment>
       
      {state.loading
        ? "Loading ....."
        : state.notes.data.map((note, index) => {
            return (
              <Card>
                <Card.Content header={note.lastname} />
                <Card.Content header={note.firstname} />
                <Card.Content description={note.email} />
                <Card.Content description={note.avis} />
                
              </Card>
            );
          })}
    </React.Fragment>
  );
}

export default Avis;
