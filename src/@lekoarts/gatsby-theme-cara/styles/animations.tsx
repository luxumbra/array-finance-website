import { keyframes, css } from "@emotion/core"
import styled from "@emotion/styled"
import {useState, useEffect} from "react"

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(150px);
  }
`

const upDownAnimation = css`
  ${upDown} 10s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 24s ease-in-out infinite alternate;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`

export const waveAnimation = (length: string) => css`
  animation: ${wave} ${length} linear infinite alternate;
`

// export const tracePath = ({ elID = "" }) => {
//   const [drawLine, setDrawLine] = useState(0)
//   function debounce(func, wait = 5, immediate = false) {
//     let timeout;
//     return function() {
//       const context = this;
//       const args = arguments;
//       const later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       const callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
//   }

//   useEffect(() => {
//     const el = document.querySelector(elID)
//     console.log(el);
    
//     // el.strokeDasharray = ength
//     // el.strokeDashoffset = length
//     const handleScroll = () => {
      
//       let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
//       let draw = length * scrollpercent
//       setDrawLine(draw)
//     }
//     window.addEventListener("scroll", debounce(handleScroll))

//     return () => window.removeEventListener("scroll", debounce(handleScroll))

//   }, [debounce])
//   return drawLine;
// }
