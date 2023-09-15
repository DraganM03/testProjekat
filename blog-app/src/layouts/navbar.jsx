import {Outlet, NavLink} from 'react-router-dom'
import './styles/navbar.css'

export const NavbarLayout = () =>{
    return <>
    
    <header>
        <nav>
            <div className='links'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/page1">Page1</NavLink>
            </div>

            <div className='profile'>
                <NavLink to="/">
                    <img src="https://placehold.co/75x75" alt="profile_pic" />
                </NavLink>
            </div>
            
        </nav>
    </header>
    <Outlet/>

    </>
}