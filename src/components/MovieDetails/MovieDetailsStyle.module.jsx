import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const ImgPoster = styled.img`
width: 400px;
`
export const Container = styled.div`
display: flex;
margin: 10px;
`
export const ContainerInfo = styled.div`
padding:10px;
max-width: 600px;
`
export const BoxOutlet = styled.div`
padding:30px;
`
export const BackLink = styled(Link)`
    display: flex;
    width: 60px;
    font-weight: bold;
    color: #000000;
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
    background-color: #e4e4e4;
    box-shadow: 6px 2px 0px 1px rgb(0 10 0 / 12%);
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #d3d3d3;
         box-shadow: none;
    }
    `
export const CastLink = styled(Link)`
    display: flex;
    width: 60px;
    font-weight: bold;
    color: #000000;
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
    background-color: #e4e4e4;
    box-shadow: 6px 2px 0px 1px rgb(0 10 0 / 12%);
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #d3d3d3;
         box-shadow: none;
    }

`
export const ReviewsLink = styled(Link)`
    display: flex;
    width: 60px;
    font-weight: bold;
    color: #000000;
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
    background-color: #e4e4e4;
    box-shadow: 6px 2px 0px 1px rgb(0 10 0 / 12%);
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #d3d3d3;
         box-shadow: none;
    }

`