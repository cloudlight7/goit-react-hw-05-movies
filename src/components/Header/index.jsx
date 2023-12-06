import {  NavLink} from 'react-router-dom'
import {Nav,Container} from './HeaderStyle'
const Header=()=> {
  return (
         
        <Container>
          <Nav >
            <NavLink to="/">Home</NavLink> 
           <NavLink to="/movies">Movies</NavLink>
          </Nav>
        </Container>
  )
}

export default Header