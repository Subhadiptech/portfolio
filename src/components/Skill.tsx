import React,{useState} from 'react'
import { Cloud, renderSimpleIcon, ICloud } from "react-icon-cloud";
import { SiJava, SiJavascript, SiKotlin } from 'react-icons/si';
import { AiFillAndroid } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'

const icons = []
const light = "#fff";
const dark = "#000";
const invertBg = (color: string) => (color === light ? dark : light);

const makeProps = (
  backgroundColor: string
): Partial<ICloud> & { root: React.CSSProperties } => ({
  root: {
    backgroundColor,
    top: 0,
    left: 0,
    right: 0,
    height: "200vh",
    position: "absolute"
  },
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40
    }
  },
 
  options: {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false
  }
});

const makeIcons = (bg: string) =>
  icons.map((icon) =>
    renderSimpleIcon({
      icon,
      minContrastRatio: bg === light ? 1.2 : 2,
      bgHex: bg,
      size: 42,
      fallbackHex: invertBg(bg),
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: any) => e.preventDefault()
      }
    })
  );


export default function Skill() {

    const [bg, setBg] = React.useState(light);
   const props = makeProps(bg);
   const cloudIcons = makeIcons(bg);

    return (
        <main className='bg-black'>
        <Cloud containerProps={props.containerProps} options={props.options}>
        
        {cloudIcons}
       </Cloud>

        
        </main>
    )
}
