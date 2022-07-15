import styled from "styled-components";

export const StyledNav = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 1rem;
 position: fixed;
 width:100%;
 height: 90px;
 z-index:10;

`

export const Nav = styled.ul`
 .nav{
   display: flex;

 li{
   padding: 0 1rem;
 }
 a{
   padding: 0 1rem;
   font-size: 1.2rem;
   font-weight: 500;
 }

 @media(max-width: 1040px){

      
         flex-direction: column;
         justify-content: center;
         align-items: center;
         width: 100%;
         height: 100vh;
         background: rgba(0,0,0,0.9);
         position: absolute;
         top: 0;
         left:-100%;
         z-index: -3;
         transition: 0.3s;
         
         li{
             padding: 1rem 0;
             
         }  
      
      
   }
 }



 .nav-active{

   display: flex;

 li{
   padding: 0 1rem;
 }
 a{
   padding: 0 1rem;
   font-size: 1.2rem;
   font-weight: 500;
 }

   @media(max-width: 1040px){
     background-color:red;
     background-size: contain;
     background-position: right;
     object-fit: cover;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      top: 10%;

    

    li{
        padding:1rem 0;

        a{
            font-size:2rem;
        }
    }
   }

 }
 

  
`


export const Hamburger = styled.div`
 display: none;
 @media(max-width: 1040px){
    display: initial;
 }
`
