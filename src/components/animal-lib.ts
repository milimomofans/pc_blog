import { keyframes } from '@emotion/react';

export const wobbleBottom = keyframes({
    '0%,40%,100%':{
        transform:'translateX(0%)',
        "transform-origin":"50% 50%"
    },
    "50%":{
        transform:"rotate(-30deg)"
    },
    "60%":{
        transform: "rotate(30deg)"
    },
    "70%":{
        transform: "rotate(-30deg)"
    },
    "80%":{
        transform: "rotate(30deg)"
    },
    "90%":{
        transform: "rotate(-30deg)"
    }
})

export const bounceTop = keyframes({
    "0,40%,100%":{
        transform: "translateY(0%)",
        "transform-origin": "50% 50%"
    },
    "50%":{
        transform:"translateY(-3px)"
    },
    "60%":{
        transform:"translateY(-4px)"
    },
    "70%":{
        transform:"translateY(-5px)"
    },
    "80%":{
        transform:"translateY(-4px)"
    },
    "90%":{
        transform:"translateY(-3px)"
    }
})

export const jelloHorizontal = keyframes({
    "0,40%,100%":{
        transform: "scale3d(1, 1, 1)"
    },
    "50%":{
        transform: "scale3d(1.25, 0.75, 1)"
    },
    "60%":{
        transform: "scale3d(0.75, 1.25, 1)"
    },
    "70%":{
        transform:"scale3d(1.15, 0.85, 1)"
    },
    "80%":{
        transform:"scale3d(0.95, 1.05, 1)"
    },
    "90%":{
        transform:"scale3d(1.05, 0.95, 1)"
    }
})

export const blink = keyframes({
    "0,40%,100%":{
        opacity:1
    },
    "25%,75%":{
        opacity:0
    }
})

export const glitchLoop1 = keyframes({
      "0%":{
        clip: "rect(36px, 9999px, 9px, 0)"
      },
    
      "25%":{
        clip:"rect(25px, 9999px, 99px, 0)"
      },
    
      "50%":{
        clip:"rect(50px, 9999px, 102px, 0)"
      },
    
      "75%":{
        clip:"rect(30px, 9999px, 92px, 0)"
      },
    
      "100%":{
        clip:"rect(91px, 9999px, 98px, 0)"
      }
})

export const glitchLoop2 = keyframes({
    "0%":{
      top:"-1px",
      left:"1px",
      clip: "rect(65px, 9999px, 119px, 0)"
    },
  
    "25%":{
      top:"-6px",
      left:"4px",
      clip:"rect(79px, 9999px, 19px, 0)"
    },
  
    "50%":{
      top:"-3px",
      left:"2px",
      clip:"rect(68px, 9999px, 11px, 0)"
    },
  
    "75%":{
      top:"0px",
      left:"-4px",
      clip:"rect(95px, 9999px, 53px, 0)"
    },
  
    "100%":{
      top:"-1px",
      left:"-1px",
      clip:"rect(31px, 9999px, 149px, 0)"
    }
})