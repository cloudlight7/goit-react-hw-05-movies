import styled from 'styled-components'

export const Elem = styled.li`
    margin: 17px;
`

export const Book = styled.div`
 position: relative;
 border-radius: 10px;
  
  width: 220px;
  height: 300px;
  background-color: whitesmoke;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  -webkit-transform: preserve-3d;
  -ms-transform: preserve-3d;
  transform: preserve-3d;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #000;
 



`
export const Cover = styled.div`

  top:  -4px;
  position: absolute;
  background-color: lightgray;
  border-radius: 10px;
  cursor: pointer;
  background-size:cover ;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform-origin: 0;
  -ms-transform-origin: 0;
  transform-origin: 0;
  box-shadow: 1px 1px 12px #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
    &:hover {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  transform: rotatey(-80deg);
}
`
export const Text = styled.p`
  font-size: 15px;
  font-weight: bolder;
    padding: 15px 5px 5px 40px;
    margin: 0;
    font-size: 14px;
    font-weight: 600;
      overflow-y: scroll;
  scroll-behavior: smooth;
  border-radius: 10px;
  &::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}
&::-webkit-scrollbar
{
	width: 7px;
	background-color: #F5F5F5;
}

    &::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
`
export const Img = styled.img`
border-radius: 10px;
   width: 230px;
  height: 310px;
`