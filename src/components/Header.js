import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
            <h1>Header</h1>
            <Link to='/'>Home</Link>
            <br />
            <Link to='contact'>Contact</Link>
            <br />
            <Link to='products'>Product</Link>
        </>
    )
}

export default Header;
