import { Navigate ,NavLink } from "react-router-dom";
// import { useEffect } from "react";
import {Card,Container,Row,Col,Form} from 'react-bootstrap';
import { Button } from 'flowbite-react';

import { useFormik } from "formik";
import * as Yup from "yup";
// import { apiCall } from "../../utils/Utils";
import { toast, ToastContainer } from "react-toastify";
import {  useSelector,useDispatch } from 'react-redux'
import {userRegisterRequest,userClearState} from "../../redux/action/userAction"
import {LoderSpinner} from "../../utils/Utils"



const Register =() =>{
  
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user);
  const loader = useSelector((state) => state.user.loader);
  if(userData?.status==201){
    toast.success(userData?.message);
    dispatch(userClearState());
    <Navigate to="/" />
    
  }
 
   
  const validationSchema = Yup.object({
     name:Yup.string("Enter name").required("Name is required"),
     email:Yup.string("Enter email").email("plz enter valid email").required("Email is required"),
     password:Yup.string("Enter password").required("Password is required"),
     mobile:Yup.number("Enter Mobile number only number").required("Mobile is required")
  })

  const formik = useFormik({
    validationSchema:validationSchema,
    initialValues:{
      name:"",
      email:"",
      password:"",
      mobile:""
    },
    onSubmit(values){
      console.log(" values -------submit--- ",values)
       
      dispatch(userRegisterRequest(values))
    }
  })

    return(
        <div>
          {/* <LoderSpinner/> */}
          
            <Container>
            {userData?.loader ?  <LoderSpinner/> :
    <Row>
    <Col xs={6} md={2}></Col>
<Col xs={6} md={8}  style={{marginTop: 123}}>
<Card >
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>Register</Card.Title>
       
        <Card.Text>
        <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name </Form.Label>
        <Form.Control type="text" name="name"
         value={formik.values.name}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         placeholder="Enter Name" />
         <p>
         {formik.touched.name && formik.errors.name && (<span>{formik.errors.name}</span>)}
         </p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         placeholder="Enter Email" />
         <p>
         {formik.touched.email && formik.errors.email && (<span>{formik.errors.email}</span>)}
         </p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password </Form.Label>
        <Form.Control type="password" name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         placeholder="Enter Password" />
         <p>
          {formik.touched.password && formik.errors.password && (<span>{formik.errors.password}</span>)}
         </p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mobile Number </Form.Label>
        <Form.Control type="text" name="mobile"
        value={formik.values.mobile}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         placeholder="Enter Mobile Number" />
         <p>
          {formik.touched.mobile && formik.errors.mobile && (<span>{formik.errors.mobile}</span>)}
         </p>
      </Form.Group>
      <div style={{textAlign:"center"}}>
      <Button type="submit" 
                      isProcessing = {loader} 
                      size="md">Save</Button>
      
      </div>
    </Form>
        </Card.Text>
        <div style={{textAlign:"center"}}>
        <NavLink to="/">Login</NavLink>
        </div>
       
      </Card.Body>
    </Card>     
</Col>
<Col xs={6} md={2}></Col>
      </Row>
      }
    </Container>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        </div>
    )
}


export default Register;