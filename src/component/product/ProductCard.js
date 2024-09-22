import { Card, Button, Col } from 'react-bootstrap';
import ProductDetails from './ProductDetails';
import { useState } from "react"

const ProductCard = (props) => {

    const [show, setShow] = useState(false);

    const handleAddToCart = (id) => {
        console.log(" handleAddToCart =========== ", id)
    }



    const handleRemovCart = (id) => {
        console.log(" handleRemovCart ", id)
    }
    const handleModel = () => {
        setShow(true);
    }

    const hideModal = () => {
        console.log(" handleRemovCart ")
        setShow(false);
    }
    return (
        <>
            <div onClick={handleModel}>

                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                        src={props.pic}

                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{props.productName}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{props.price}</p>
                <p> <details>

                    <p>{props.productDescription}</p>
                </details></p>


                <Button variant="success" onClick={() => handleAddToCart(props.id)}  >Add To Cart</Button>
                &nbsp;
                <Button variant="danger" onClick={() => handleRemovCart(props.id)}  >Remove Cart</Button>

            </div>



            {/* <Col>
                <Card style={{ width: '18rem', marginLeft: 12 }} >
                    <Card.Img style={{ width: 270, height: 231, marginTop: 20 }} variant="top" src={props.pic} />
                    <Card.Body>
                        <Card.Title >{props.productName}</Card.Title>
                        <Card.Title>{props.price}</Card.Title>
                        <Card.Text>
                            <details>

                                <p>{props.productDescription}</p>
                            </details>

                        </Card.Text>
                        <Button variant="success" onClick={() => handleAddToCart(props.id)}  >Add To Cart</Button>
                        &nbsp;
                        <Button variant="danger" onClick={() => handleRemovCart(props.id)}  >Remove Cart</Button>
                    </Card.Body>
                </Card>
                <br></br>
            </Col > */}

            <ProductDetails show={show} pic={props.pic} description={props.productDescription} name={props.productName} price={props.price} handleClose={hideModal} />

        </>
    )
}


export default ProductCard;