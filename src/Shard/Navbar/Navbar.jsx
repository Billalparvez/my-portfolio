import { NavLink } from 'react-router-dom';
import Container from '../../Shard/Container'
import './Css/Nav.css'
import { GiVineFlower } from "react-icons/gi";


const Navbar = () => {
    const navLink = <>
        <NavLink to='/'><a>Home</a></NavLink>
        <NavLink to="/about"><a>About</a></NavLink>
        <NavLink to="/contact"><a>Contact Me</a></NavLink>
        <NavLink to="/skile"><a>Skile</a></NavLink>
        <NavLink to="/projects"><a>projects</a></NavLink>
    </>
    return (
        <div className='bg-[#0a101e] w-full z-10 md:fixed lg:fixed py-3    '>
            <Container>
                <div className="navbar flex justify-between px-0 ">
                    <div className="navbar-start ">
                        <div className="dropdown text-black">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLink}
                            </ul>
                        </div>
                        <a className='text-3xl mr-3 text-orange-400 '><GiVineFlower /></a>
                        <a className="text-3xl"> Billal Hoss<span className='text-orange-400'>ain</span></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>
                    <div className='navbar-end '>
                        <h1 className='text-2xl hidden md:block lg:block'>Contact me<span className='border-l-2 border-orange-400 ml-3'> 01859734969</span></h1>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Navbar;