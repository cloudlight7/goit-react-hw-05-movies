import styled from 'styled-components'
import {  Field } from 'formik'
export const Container = styled.ul`
display: flex;
    flex-wrap: wrap;
justify-content: left;
  width: 100%;
  margin-left: 10px;
  padding: 10px;
`

export  const Input = styled(Field)`
  border-radius: 30px 0 0 30px;
`
export  const Button = styled.button`
      border-radius: 0 30px 30px 0;
`
export  const Error = styled.div`
      background-color:red;
`

