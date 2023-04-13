import { useEffect, useState } from 'react';

function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/product/')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <h1>Product Lists</h1>
            {products.map(item => {
                return (
                    <div key={item._id}>
                        <h1>{item.title}</h1>
                        <p>{item.price}</p>
                        <p>{item.color}</p>
                        <p>{item.quantity}</p>
                        <p>{item.category}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ProductPage;
