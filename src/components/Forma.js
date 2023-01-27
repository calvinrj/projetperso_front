import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
export class Forma extends Component {
  render() {
    return (
      <Form action = "http://localhost:5000/api/note" method = "POST">
      <Form.Group widths='equal'>
        <Form.Field
          id='form-input-control-first-name'
          control={Input}
          label='Prénom'
          placeholder='Prénom'
          name="firstname"
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Nom'
          placeholder='Nom'
          name="lastname"
        />
       
      </Form.Group>
      <Form.Field
        id='form-textarea-control-opinion'
        control={TextArea}
        label='Avis artiste'
        placeholder='Avis artiste'
        name="avis"
      />
      <Form.Field
        id='form-input-control-error-email'
        control={Input}
        label='Email'
        placeholder='joe@schmoe.com'
        name="email"
      />
      <Form.Field
        id='form-button-control-public'
        control={Button}
        content='Envoyer'

      />
    </Form>
    )
  }
}

export default Forma