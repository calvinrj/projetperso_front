import React from 'react'
import { useParams } from 'react-router-dom'
import{Button, Icon} from "semantic-ui-react"

function Profile() {
    const params = useParams ();
  return (
    <div>

    <h1>Hello,{params.name}</h1>
<Button animated>
  <Button.Content visible>Next</Button.Content>
  <Button.Content hidden>
    <Icon name='arrow right' />
  </Button.Content>
</Button>

</div>
  )
}

export default Profile