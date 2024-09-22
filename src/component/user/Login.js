import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Card, Container, Row, Col, Form } from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userClearState, userLoginRequest } from "../../redux/action/userAction"
import { LoderSpinner } from "../../utils/Utils"
import { apiCall } from "../../utils/Utils";
import { UserAuth } from "../../auth/Auth";
import { compose } from "redux";
import { Button } from 'flowbite-react';
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState();
  const auth = UserAuth();
  const redirectPath = location?.state?.path || "/"
  if (auth.user) {
    navigate(redirectPath, { replace: true })
    // <navigate to="/dashboard", {} />
  }
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.user.loader);

  const insitalValuesSchema = Yup.object({
    email: Yup.string("Enter your email").email("Please enter valid Email").required("Email is required"),
    password: Yup.string("Enter your password").required("Password is required")
  })

  const formik = useFormik({
    validationSchema: insitalValuesSchema,
    initialValues: {
      password: "",
      email: ""
    },
    async onSubmit(values) {
      dispatch(userLoginRequest())
      const userRes = await apiCall("POST", '/user/login', values, false);
      
      if (userRes?.data?.status == 200) {
        toast.success(userRes?.data?.message);
        localStorage.setItem('getToken', JSON.stringify(userRes?.data?.token));
         const token = localStorage.getItem('getToken');
        auth.login(token);
        dispatch(userClearState())


      } else {
        toast.error(userRes?.data?.message)
        dispatch(userClearState())
      }


      //dispatch(userLoginRequest(values))
    }
  })
  return (
    <div>

      <Container>
       
          <Row>
            <Col xs={6} md={2}></Col>
            <Col xs={6} md={8} style={{ marginTop: 123 }}>
              <Card >
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>Login</Card.Title>

                  <Card.Text>
                    <Form onSubmit={formik.handleSubmit}>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter Email" />
                        <p>{formik.touched.email && formik.errors.email && (<span className='text-red-400' style={{ color: 'red' }}>{formik.errors.email}</span>)}

                        </p>
                      </Form.Group>


                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password </Form.Label>
                        <Form.Control type="password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter Password" />
                        <p> {formik.touched.password && formik.errors.password && (<span className="text-red-400" style={{ color: "red" }}>
                          {formik.errors.password} </span>)}</p>
                      </Form.Group>
                         
                      
                      <Button type="submit" 
                      isProcessing = {loader} 
                      size="md">Login</Button>
                        
                    
                    </Form>
                  </Card.Text>
                  <div style={{ textAlign: "center" }}>
                    <NavLink to="/register">Register</NavLink>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={2}></Col>
          </Row>
      
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
      </Container>
    </div>
  )
}

export default Login;