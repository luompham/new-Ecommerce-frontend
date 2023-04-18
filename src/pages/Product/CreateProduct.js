import { useState } from 'react';

const CreateProduct = () => {
    const [inputValue, setInputValue] = useState({
        title: '',
        price: '',
        color: '',
        quantity: '',
        category: '',
    });
    // const inputs = ['title', 'price', 'color', 'quantity', 'category'];
    const values = Object.keys(inputValue)
    function handleSubmit(e) {
        e.preventDefault();
        const headers = {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2FjMGYwNzcwZWE5ZjllNjQ2NDdkNCIsImlhdCI6MTY4MTgyNjYwMCwiZXhwIjoxNjgxOTEzMDAwfQ.TB3xpehclU5-SNn8BfUdFd7iL31YnyF923ZNtDnX3bE',
            'Content-Type': 'application/json'
        };
        fetch('http://localhost:5000/api/product/create', {
            method: "POST",
            headers,
            body: JSON.stringify(inputValue)
        })

            .then(response => {
                if (response.status === 200) {
                    alert('success')
                }
                console.log(response)
            })
            .catch(err => console.error(err));
    }

    function handleChangeInput(e) {
        const value = e.target.value;
        console.log('inputname:', e.target.name);
        setInputValue({
            ...inputValue,
            [e.target.name]: value,
        })
    }
    return (
        <>
            <h1>Create new product</h1>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="">{item}</label>
                <input onChange={(e) => handleChangeInput(e.target.value)} name={item} value={value} type="text" /> */}

                {values.map(item => {
                    return (
                        <div key={item}>
                            <label htmlFor="">{item}</label>
                            <input onChange={(e) => handleChangeInput(e)} name={item} value={inputValue.item} type="text" />
                        </div>
                    )
                })}

                <button type="submit" >Submit</button>
            </form>
        </>
    )
}

export default CreateProduct;
