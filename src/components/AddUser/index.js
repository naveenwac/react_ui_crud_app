import React, {useEffect, useState} from "react";
import { Form, Button } from "react-bootstrap";

const AddUser = () => {
  const [userData,setUserData] = useState({
    fistName: '',
    lastName: '',
    userName: ''
  })

  const [validate,SetValidate] = useState({
    fistName: true,
    lastName: true,
    userName: true
  })
  const changeHandler = (e) =>{
    const {name, value} = e.target;
    setUserData({...userData, [name]:value })
    SetValidate({...validate, [name]:value.length !=0 ? true : false})
    console.log(validate, 'Daata Validation');
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if(userData.fistName === '') {
      console.log('Enter Name');
    }
    console.log(userData, 'Data Submitted');
  }
  /* useEffect(()=>{
    console.log(validate, 'Daata Validation');
  },validate) */
  return (
    <div className="container my-3">
      <Form>
        <Form.Group className="mb-3" controlId="fisrtName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="fistName" value={userData.fistName} placeholder="First Name" onChange={changeHandler} onBlur={changeHandler} />
          {validate.fistName == true ? '' : <Form.Text className="text-danger">Please Enter Your First Name</Form.Text>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value={userData.lastName} placeholder="Last Name"  onChange={changeHandler} onBlur={changeHandler}/>
          {validate.lastName == true ? '' : <Form.Text className="text-danger">Please Enter Your Last Name</Form.Text>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" name="userName" value={userData.userName} placeholder="User Name"  onChange={changeHandler} onBlur={changeHandler} />
          {validate.userName == true ? '' : <Form.Text className="text-danger">Please Enter Your User Name</Form.Text>}
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddUser;
