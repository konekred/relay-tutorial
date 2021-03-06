import React, { Component } from 'react'
import { QueryRenderer } from 'react-relay'

import UsersQuery from '../../queries/user/UsersQuery'
import environment from '../../config/environment'

import UserList from '../user/UserList'

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <QueryRenderer
          environment={environment}
          query={UsersQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <UserList viewer={props.viewer} />
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }
}

export default TodoApp
