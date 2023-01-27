import React, { Component } from "react";
import { Form } from 'semantic-ui-react'
export class AddVoiture extends Component {
  render() {
    return (
      <div>
        <Form action="http://localhost:5000/api/voiture" method="POST">
          <Form.Group widths="equal">
            <Form.Input fluid label="Marque" placeholder="Marque"  name="marque"/>
            <Form.Input fluid label="Modele" placeholder="Modele"  name="modele"/>
            <Form.Input fluid label="Année" placeholder="Année"  name="annee" type="number"/>
            <Form.Input fluid label="Immatriculation" placeholder="Immatriculation" name="immatriculation" />
          
          </Form.Group>
         
          <Form.TextArea
            label="Description"
            placeholder="Tell us more about you..." name="description"
          />
          <Form.Input fluid label="Année mise en service" placeholder="Date" name="mise_en_service" type="date" />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default AddVoiture;
