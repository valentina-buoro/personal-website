import styled from "styled-components"


export const StyledHero = styled.div`
 height: 100%;
 width: 100%;
 
 
`

export const Mask  =styled(StyledHero)`
 width: 100%;
 height:100vh;
 position: relative;

 &:after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.45;
 }

 img{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    object-fit: cover;

 }
 


`


export const Content = styled(StyledHero)`
 
 position: absolute;
 transform: translate(-50%, -50%)
 top: 50%;
 left:50%;
 text-align: center;
 line-spacing: 1.2rem;

 h1{
   font-size: 4rem;
   padding: 0.6rem 0 1.5rem;
 }

 p{
   font-size: 1.4rem;
   font-weight: 200;
   text-transform: uppercase;
 }

 @media screen and (max-width:640px){
   h1{
      font-size: 3rem;
    }
   
    p{
      font-size: 1.4rem;
      
    }
   
 }
`