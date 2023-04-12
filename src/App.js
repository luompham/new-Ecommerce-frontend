import { useEffect, useState } from 'react';

function Product() {
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



function App() {

  return (
    <>
      <h1>Products </h1>
      <Product />
    </>
  );
}

export default App;
