import { NavLink } from 'react-router-dom';
import Container from '../../Shard/Container'
import './Css/Nav.css'

  

const Navbar = () => {
    const navLink = <>
        <NavLink to='/'><a>Home</a></NavLink>
        <NavLink to="/about"><a>About</a></NavLink>
        <NavLink to="/contact"><a>Contact Me</a></NavLink>
        <NavLink to="/skile"><a>Skile</a></NavLink>
        <NavLink to="/projects"><a>projects</a></NavLink>
    </>
    return (
        <Container>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start w-0">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl">Billal Hossain</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl'>ContaCt me<span className='border-l-2 border-green-600 ml-3'>01859734969</span></h1>
                   
                </div>
            </div>
        </Container>
    );
};

export default Navbar;