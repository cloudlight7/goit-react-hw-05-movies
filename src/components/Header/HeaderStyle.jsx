import styled from 'styled-components'

export const Container = styled.div`
background-color: #eeeeee;
box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
`
export const Nav = styled.nav`
display: flex;
margin: 0;
 a{
    padding: 15px;
 }
 a.active {
  color: #2200ff;
}
`
export const NavElem = styled.li`
display: flex;
`
export const NavLink = styled.a`
padding: 15px;

`