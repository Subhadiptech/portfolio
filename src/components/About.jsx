import React, { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';

const Card = ({ image, color }) => {
  // To move the card as the user drags the cursor
  const motionValue = useMotionValue(0);  
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
  const opacityValue = useTransform(
    motionValue,
    [-200, -150, 0, 150, 200],
    [0, 1, 1, 1, 0]
  );  
  // Framer animation hook
  const animControls = useAnimation();  
  const style = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundColor: color,
    boxShadow: '5px 10px 18px #888888',
    borderRadius: 10,
    height: 300
  };
  return (
    <motion.div className='App'>
      <motion.div
        center
        // Card can be drag only on x-axis
        drag='x'
        x={motionValue}
        rotate={rotateValue}
        opacity={opacityValue}
        dragConstraints={{ left: -1000, right: 1000 }}
        style={style}
        onDragEnd={(event, info) => {
          
          if (Math.abs(info.point.x) <= 150) {
            animControls.start({ x: 0 });
          } else {
            animControls.start({ x: info.point.x < 0 ? -200 : 200 });
          }
        }}
      ></motion.div>
    </motion.div>
  );
};
export default function About() {
  const cards = [
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#55ccff'
    },
    
  ];
  
  return (
    <div className='App'>
      
      {/* Traversing through cards arrray using map function
      and populating card with different image and color */}
        
      {cards.map((card) => (
        <Card image={card.image} color={card.color} />
      ))}
    </div>
  )
}