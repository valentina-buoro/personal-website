import styled from "styled-components";

export const DarkButton = styled.button`

 font-size: 1rem;
 text-transform: uppercase;
 background: rgb(255, 199, 95);
 color: #222;
 cursor: pointer;
 margin: 1rem 0.2rem;
 padding: 1.7rem 3.2rem;
 border: 0.2rem solid rgb(255, 199, 95);
 font-weight: 700;



 &:hover{
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    transition: 0.3s;
 }
`

export const LightButton = styled(DarkButton)`
 
 background: transparent;

`