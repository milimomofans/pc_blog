import { useEffect, useState } from "react"
import { blink } from 'components/animal-lib'
import styled from "@emotion/styled"

export const Typed = ({strings,typeSpeed = 140,backSpeed = 50,showCursor = true}:{
    strings:string[]
    typeSpeed?:number
    backSpeed?:number
    showCursor?:boolean
}) => {
    const [content,setContent] = useState('')
    const [sub,setSub] = useState(0)
    const [done,setDone] = useState(true)
    const [Index,setIndex] = useState(0)

    const TypedStart = () => {
        if (strings[sub][Index]){
            setTimeout(() => {
                setContent(content + strings[sub][Index])
                setIndex(Index + 1)
            }, typeSpeed + ((sub+1) * 50));
        } else {
            setIndex(Index + 1)
        }
    }

    const TypedBack = () => {
        setTimeout(() => {
            setContent(content.substr(0,Index))
            setIndex(Index - 1)
        }, backSpeed + ((sub+1) * 50));
    }

    useEffect(()=>{
        if (done) {
            if (Index < strings[sub].length) {                
                return TypedStart()     
            }
            if ((sub + 1) < strings.length) {
                setTimeout(() => {
                    setDone(false)
                }, 1500);
            } 
        } else {
            if (content === '') {
                setDone(true)
                setSub(sub + 1)
            } else {
                TypedBack()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[Index,done])

    return <div>
        <span>{content}</span>
        {
            (sub + 1) === strings.length ?
            <BlinkSpan>|</BlinkSpan> :
            <span>|</span>
        }
    </div>
}

const BlinkSpan = styled.span`
    animation:${blink} 1.5s infinite;
`
