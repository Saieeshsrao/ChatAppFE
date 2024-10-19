import { Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Notification from "./chat/Notification";
const NavBar = () => {
    const {user,logoutUser}=useContext(AuthContext)
    return (
    <Navbar bg="dark" className="mb-4" style={{height:"3.75rem"}}>
    <Container>
        <h2>
        <Link to='/' className="link-light text-decoration-none">ChatApp</Link>
        </h2>
        {user && (<span className="text-warning">Logged in as {user?.name}</span>)}
        <Nav>
            <Stack direction="Horizontal" gap={3}>
                {
                    user && (<><Notification/><Link onClick={()=>logoutUser()} to='/login' className="link-light text-decoration-none">Logout</Link></>)
                }
                {
                    !user &&(<>
                    <Link to='/login' className="link-light text-decoration-none">Login</Link>
                <Link to='/register' className="link-light text-decoration-none">Register</Link>
                </>
                    )
                }
                
            </Stack>
        </Nav>
    </Container>
    </Navbar>);
};

export default NavBar