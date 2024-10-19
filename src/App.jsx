import React, { useContext } from 'react'
import {Route, Routes,Navigate} from 'react-router-dom'
import Chat from './page/Chat'
import Login from './page/Login'
import Register from './page/Register'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from 'react-bootstrap'
import NavBar from './components/NavBar'
import { AuthContext } from './context/AuthContext'
import { ChatContextProvider } from './context/ChatContext'


function App() {
  const {user} = useContext(AuthContext)
 return (
    <ChatContextProvider user={user}>
  <NavBar/>
 <Container className='text secondary'>
 <Routes>
 <Route path="/" element={user? <Chat/> : <Login/>}/>
 <Route path="/login" element={user ? <Chat/> :<Login/>}/>
 <Route path="/register" element={user ? <Chat/> : <Register/>}/>
 <Route path="*" element={<Navigate to="/"/>}/>
 </Routes>
 </Container>
 </ChatContextProvider>
 );
}

export default App
