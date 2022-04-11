import React from 'react';
import {Table, ButtonGroup, Button} from 'react-bootstrap'

import Style from './UserList.module.scss';

import {userData} from '../DummyData';

const UserList = () => {
  return (
    <div className="container my-5">
      <div className="text-end mb-3">
        <ButtonGroup>
          <Button>Add User</Button>
          <Button>Back</Button>
        </ButtonGroup>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data,key)=>{
            return(
            <tr>
              <td>{key+1}</td>
              <td>{data.firstname}</td>
              <td>{data.lastname}</td>
              <td>{data.username}</td>
            </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default UserList