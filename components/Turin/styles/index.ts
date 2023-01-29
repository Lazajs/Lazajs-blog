import css from 'styled-jsx/css'
import { colors } from 'constants/default'

export default css`
   @keyframes talk {
      from {
         width: 15rem;
      } to {
         min-width: 35rem;
         width: 30vw;
      }
   }
 
section {
   display: block;
   margin:auto;
   width: 15rem;
   border-bottom: 1px solid white;
   position: relative;
   transition: width .3s;
}

section.active {
   min-width: 35rem;
   width: 30vw;
}

section.active > .left-hand {
   display:inline-block;
}

section.active > .right-hand {
   display:inline-block;
}

 .head {
    width: 10rem;
    height: 10rem;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid ${colors.pseudos};
    position: relative;
    gap: 1rem;
    margin:auto;
    margin-bottom: -8rem;
    z-index: 2;
 }
 
 .head::before {
  content: '';
  position: absolute;
  top: -5rem;
  left: -1rem;
  width: 2rem;
  height: .2rem;
  background: ${colors.primary};
  border-radius: 1px;
  z-index: 1;
  animation-direction: forwards;
  animation-duration: .2s;
  animation-iteration-count: 2;
  animation-timing-function: steps(10,end);
 }

 .head.talking::before {
  animation-name: talk;
 }


 .head::after {
  content: '';
  position: absolute;
  top: -4.4rem;
  left: -1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border-bottom: 1px solid ${colors.primary};
  background: ${colors.pseudos};
 }

 .eyes {
  position: relative;
  top: -10rem;
  width: 10px;
  margin: 1rem;
  height: 10px;
  display: inline-block;
 }

 .first::before {
   content: '';
   position:absolute;
   top: -2.9rem;
   left: -3.3rem;
   width: 0;
   height: 0;
   border-left: 63px solid transparent;
   border-right: 63px solid transparent;
   border-top: 93px solid ${colors.subText};
   border-radius: 50%;
 }

 .eyes div {
  position: absolute;
  width: 1rem;
  height: 1rem;
  background-color: ${colors.primary};
  top: 1rem;
  border-radius: 50%;
 }

 .eyes:first-child {
  left:-4rem;
 }
 
 .eyes:nth-child(2) {
  right: 0rem;
  top: -13.6rem;
 }

 .body {
   width: 4rem;
   height: 8rem;
   background: ${colors.pseudos};
   position: relative;
   margin:auto;   
   z-index: 1;
 }

 .left-hand {
   position: absolute;
   bottom: 0;
   width: 10rem;
   height: 1rem;
   background: ${colors.pseudos};
   display:none;
 }

 .left-hand::before {
   content: '';
   position: absolute;
   left: 0;
   width: 1rem;
   height: 3rem;
   border-radius: 4px;
   background: ${colors.pseudos};
 }

 .right-hand {
   position: absolute;
   bottom: 0;
   right: 0;
   width: 100%;
   height: 1rem;
   background: ${colors.pseudos};
   display:none;
 }

 .right-hand::before {
   content: '';
   position: absolute;
   right: 0;
   width: 1rem;
   height: 3rem;
   border-radius: 4px;
   background: ${colors.pseudos};
 }
 ./
`
