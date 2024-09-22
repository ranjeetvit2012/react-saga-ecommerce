import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productList } from "../../redux/action/productAcion";
import { LoderSpinner } from "../../utils/Utils";

export const ProductList = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.data);
    const loader = useSelector((state) => state.product.loader);
    console.log(" ----- loader ", loader);
    console.log(" ---------- ", product);
    useEffect(() => {
        dispatch(productList());
    }, []);

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Product list</h3>
            {loader ? LoderSpinner : product && product.map((el) => {
                return <ProductCard
                    id={el._id}
                    pic={el.image}
                    productName={el.productName}
                    productDescription={el.productDescription}
                    price={el.price} />;
            })
                // <ProductCard />
            }
        </div>
    );
};
