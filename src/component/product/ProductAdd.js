
import { Card, Container, Row, Col, Form } from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import { LoderSpinner } from "../../utils/Utils";
import { toast, ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'flowbite-react';
import { addProductRequestAction } from "../../redux/action/productAcion"

const ProductAdd = () => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.product.loader);
  const product = useSelector((state) => state.product);
  const status = useSelector((state) => state.product.status);
  console.log("status product pages",product)
  const message = useSelector((state) => state.product.message);
  if (status == 201) {
    toast.success(message)
  }
  //  else {
  //   toast.error(message)
  // }

  const validationSchema = Yup.object({
    productName: Yup.string("Enter Product name").required("ProductName is required"),
    productDescription: Yup.string("Enter product Description ").required("productDescription is required"),
    image: Yup.string("Enter Product Images").required("Images is required"),
    price: Yup.number("Enter Product price").required("price is required"),

  })

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      productName: "",
      price: "",
      image: "",
      productDescription: ""
    },
    onSubmit(values) {
      console.log(" add product ", values)
      dispatch(addProductRequestAction(values))
    }
  })
  //  {
  //     body("productName","ProductName is required").notEmpty(),
  //     body("productDescription","ProductDescription is required").notEmpty(),
  //     body("image","Product Image required").notEmpty(),
  //     body("price","Product price required").notEmpty(),
  //  }
  return (
    <div class="max-w-sm w-full bg-white dark:bg-gray-800
    p-4 md:p-6" style={{ marginLeft:350,marginTop:-590,maxWidth:"800px"}}>
            {loader ? <LoderSpinner /> :
              <Card  >
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>Add Product</Card.Title>

                  <Card.Text>
                    <Form onSubmit={formik.handleSubmit}>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Product Name </Form.Label>
                        <Form.Control type="text" name="productName"
                          value={formik.values.productName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter product Name" />
                        <p>
                          {formik.touched.productName && formik.errors.productName && (<span>{formik.errors.productName}</span>)}
                        </p>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>product Description </Form.Label>
                        <Form.Control type="text" name="productDescription"
                          value={formik.values.productDescription}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter product Description" />
                        <p>
                          {formik.touched.productDescription && formik.errors.productDescription && (<span>{formik.errors.productDescription}</span>)}
                        </p>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>image </Form.Label>
                        <Form.Control type="text" name="image"
                          value={formik.values.image}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter image" />
                        <p>
                          {formik.touched.image && formik.errors.image && (<span>{formik.errors.image}</span>)}
                        </p>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>price </Form.Label>
                        <Form.Control type="text" name="price"
                          value={formik.values.price}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter product price " />
                        <p>
                          {formik.touched.price && formik.errors.price && (<span>{formik.errors.price}</span>)}
                        </p>
                      </Form.Group>
                      <div style={{ textAlign: "center" }}>
                      <Button type="submit" color="success">
                      Save </Button>
                        
                      </div>
                    </Form>
                  </Card.Text>


                </Card.Body>
              </Card>
            }
          
         
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


export default ProductAdd