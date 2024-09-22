import {
  useLoaderData,
} from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { flush } from "redux-saga/effects";

const ProductDetails = (props) => {
 // console.log(": proos-----------",props?.data)
  const [show, setShow] = useState(false);
  //console.log(": proos-----------",props?.data[0]?.productName)
  //const [,image] = props.data[0];
  //   console.log(": proos-----------",props.data)
  // const handleClose = () => {
  //   return false
  // };
  //const handleShow = () => setShow(true);
  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src={props?.data?.image}

              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{props?.data?.productName}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">{props?.data?.price}</p>
          <p>  <details>

            <p>{props?.data?.productDescription}</p>
          </details></p>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="secondary" onHide={props.handleClose}>
            Close
          </Button> */}

        </Modal.Footer>
      </Modal>
    </div>
  )
}

// export const fetchProject = async () => {
//   // console.log("--------------- loader ")
//   const response = await fetch(`https://jsonplaceholder.org/posts`);

//   if (response.status === 404) {
//     throw new Response("Not Found", { status: 404 });
//   }

//   // the fetch failed
//   if (!response.ok) {
//     throw new Error("Could not fetch project");
//   }
//   return response;
// }

export default ProductDetails;