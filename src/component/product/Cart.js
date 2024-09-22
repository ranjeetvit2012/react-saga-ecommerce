import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeCart } from "../../redux/action/cartAction"
import { Button } from 'flowbite-react';
const Cart = () => {
    const [quantity, setQuantity] = useState(1)
    const cartData = useSelector((state) => state?.cart?.cart);
    const dispatch = useDispatch();

    const handleRemovCart = (id) => {
        dispatch(removeCart(id))
    }
    const handleInput = (event) => {
        setQuantity(event.target.value)

    }
    return (
        <div>
            <div class="container">
                <div class="divTable div-hover">

                    <div class="rowTable bg-primary text-white pb-2">
                        <div class="divTableCol">Product</div>

                        <div class="divTableCol">Quantity</div>
                        <div class="divTableCol">Price</div>
                        <div class="divTableCol">Total</div>
                        <div class="divTableCol">Actions</div>
                    </div>
                    <br></br>
                    <br></br>
                    {cartData && cartData?.map(data => (


                        <div class="rowTable">

                            <div class="divTableCol">
                                <div class="media">
                                    <a class="thumbnail pull-left mr-2">
                                        <img class="media-object"
                                            src={data.image}
                                            style={{ width: 72, height: 72 }} />
                                    </a>
                                    <div class="media-body">
                                        <h4 class="media-heading">{data?.productName}</h4>
                                        <h5 class="media-heading"></h5>

                                    </div>
                                </div>
                            </div>

                            <div class="divTableCol">
                                <input type="number" class="form-control"
                                    onChange={(event) => handleInput(event)}
                                    value={quantity} />
                            </div>
                            <div class="divTableCol"><strong> {data?.price}</strong></div>
                            <div class="divTableCol"><strong>{parseInt(data?.price) * parseInt(quantity) ? parseInt(data?.price) * parseInt(quantity) : parseInt(data?.price)}</strong></div>
                            <div class="divTableCol">
                            <Button color="failure"
                            onClick={() =>
                                handleRemovCart(data?._id)}
                                > Remove</Button>
                                
                            </div>
                        </div>
                    ))}

                    {/* <div class="rowTable">
                        <div class="divTableCol"></div>
                        <div class="divTableCol"></div>
                        <div class="divTableCol"></div>
                        <div class="divTableCol"><h5>Subtotal</h5></div>
                        <div class="divTableCol">
                            <h5><strong>{totalPrice}</strong></h5>
                        </div>
                    </div>
                    <div class="rowTable">
                        <div class="divTableCol"></div>
                        <div class="divTableCol"></div>
                        <div class="divTableCol"></div>
                        <div class="divTableCol"><h5>totale Price</h5></div>
                        <div class="divTableCol">
                            <h5><strong>{totalPrice}</strong></h5>
                        </div>
                    </div>
                    <div class="rowTable">
                        <div class="divTableCol"></div>
                        <div class="divTableCol"></div>
                        <div class="divTableCol"></div>
                        <div class="divTableCol"><h3>Total</h3></div>
                        <div class="divTableCol">
                            <h3><strong>{totalPrice}</strong></h3>
                        </div>
                    </div> */}
                    <div class="rowTable">
                        <div class="divTableCol"></div>
                        <div class="divTableCol"></div>
                        <div class="divTableCol"></div>
                        <div class="divTableCol">
                            <button type="button" class="btn btn-default col-6">  </button>
                        </div>
                        <div class="divTableCol">
                        <Button color="success" > checkout</Button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )

}
export default Cart