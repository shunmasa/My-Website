import React,{useState,useEffect,useRef} from 'react';
import { motion, useTransform  } from "framer-motion";
import TextLoop from "react-text-loop";
import $ from 'jquery';



const HeadLine= () => {

  const [color,setColor] = useState(['red','blue','#00ff00']);
  const [randomColor,setRandomColor] = useState("");

  useEffect(() => {
    getColor()
  },[]);

const getColor = () => {
  const colorItem = color[Math.floor(Math.random()*color.length)]
 setRandomColor(colorItem);
}

const shuffle = (a:string[])=> {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const words = [
  "親身に",
  "いつでも",
  "きめ細やかに",

];
//   const constraintsRef = useRef(null);
// const config = {
//   type: "spring",
//   damping: 100,
//   stiffness: 100
// };
  return (
    <>
        <h1>
        
          <span>エクセルニュージーランド</span>
          <br />
          <div className="reveals-main">
           あなたの大切な留学を<div style={{color:randomColor}}>  
          <TextLoop interval={4000} children={shuffle(words)} /></div>
           サポートいたします。
     
        </div>
        </h1>
    </>
  )
}

export default HeadLine
