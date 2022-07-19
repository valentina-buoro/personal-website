import styled from "styled-components";

export const DarkButton = styled.button`

 font-size: 1rem;
 text-transform: uppercase;
 background-image: linear-gradient( #efcc00, #ffd300);
 color: #222;
 cursor: pointer;
 margin: 1rem 0.2rem;
 padding: 7px 20px;
 border: 0.2px solid #efcc00;
 border-radius: 50px;



 &:hover{
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    transition: 0.3s;
 }
`

export const LightButton = styled(DarkButton)`
 
 background: transparent;

`