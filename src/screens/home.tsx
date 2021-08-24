import styled from '@emotion/styled/macro'
import {KeyboardArrowLeft,KeyboardArrowRight} from '@material-ui/icons';
import { useDebounce } from 'utils'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {USER_CONFIG} from 'config/index'
import {FontStyle,FlexBox} from 'components/lib'
import {glitchLoop1,glitchLoop2} from 'components/animal-lib'
import {Typed} from 'components/Typed/index'
import backgournd from 'assets/download.png'

import banner1 from 'assets/preview.jpg'
import banner2 from 'assets/test1.jpg'
import banner3 from 'assets/test2.jpg'

import qqIcon from 'assets/qq.png'
import steamIcon from 'assets/steam.jpg'
import githubIcon from 'assets/github.png'
import bilibiliIcon from 'assets/bilibili.png'

export const BlogHome = () => {

    const [banner] = useState([
        banner1,
        banner2,
        banner3
    ])

    const [bannerIndex,setBannerIndex] = useState(0)

    return <Main>
        <Swiper>
            <img alt="" src={banner[bannerIndex]}/>
        </Swiper>
        <HomeSlogon >
            <SayHello />
            <SlogonContainer />
            <SlogonMenu bannerIndex={bannerIndex} setBanner={setBannerIndex} max={banner.length}></SlogonMenu>
        </HomeSlogon>
    </Main>
}

const SayHello = () => {
    return <SayHelloTitle data-value={'HI,'+ USER_CONFIG.blogName + '!'}>
        HI,{USER_CONFIG.blogName}!
    </SayHelloTitle>
}

const SlogonContainer = () => {
    return <FlexBox
        alignItems={'center'}
        justContent={'center'}
        margin={'5rem auto auto auto'}
        style={{
            width:'50rem',
            borderRadius:'10rem',
            padding:'1.5rem',
            background:'rgba(255,255,255,.9)',
        }}
    >
        <ZenDotFont fontSize={3} fontWeight={'bold'} color={'#ff8000'}>"</ZenDotFont>
        <SLogonText />
        <ZenDotFont fontSize={3} fontWeight={'bold'} color={'#ff8000'}>"</ZenDotFont>
    </FlexBox>
}

const SLogonText = () => {
    const InitText = ['给时光以生命,给岁月以文明','当你在凝视网页,网页也在凝视你']


    return <ZcooLFont style={{margin:"auto 1rem"}} fontSize={2.5} fontWeight={'600'} color={'#ff8000'}>
        <Typed 
            strings={InitText}
        ></Typed>
    </ZcooLFont>
}

const SlogonMenu = ({bannerIndex,setBanner,max}:{
    bannerIndex:number
    setBanner:Dispatch<SetStateAction<number>>
    max:number
}) => {
    const [Menu] = useState([
        {
            icon:githubIcon,
            href:'https://github.com/milimomofans',
            alt:'github'
        },
        {
            icon:qqIcon,
            href:'tencent://message/?uin=815310779',
            alt:'qq'
        },
        {
            icon:bilibiliIcon,
            href:'https://space.bilibili.com/8142722',
            alt:'bilibili'
        },
        {
            icon:steamIcon,
            href:'https://steamcommunity.com/id/miojiang/',
            alt:'steam'
        }
    ])
    const [Index,setIndex] = useState(bannerIndex)
    const doubounceIndex = useDebounce(Index)
    useEffect(()=>{
        if (doubounceIndex === bannerIndex) {
            return
        } 
        setBanner(doubounceIndex)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[doubounceIndex])

    return <FlexBox
        alignItems={'center'}
        justContent={'space-around'}
        margin={'5rem auto'}
        style={{
            height:'3.2rem',
            width:'20%'
        }}
    >
        <SLogonMenuItem
            onClick={()=>{
                setIndex(Index - 1 < 0 ? 0 : Index - 1)
            }}
        >
            <KeyboardArrowLeft style={{
                width:'2.5rem',
                height:'2.5rem'
            }}
            />
        </SLogonMenuItem>
        {
            Menu.map((Menu,MenuIndex)=>{
                return <a 
                    href={Menu.href} 
                    key={MenuIndex}
                    target={Menu.alt === 'qq' ? '_Self' : '_Blank'}
                    rel="noreferrer"
                >
                    <SLogonMenuItem >
                        <MenuItemImg src={Menu.icon} alt={Menu.alt} />
                    </SLogonMenuItem>
                </a>
            })
        }
        <SLogonMenuItem
            onClick={()=>{
                setIndex(Index + 1 < max ? Index + 1 : (max - 1))
            }}
        >
            <KeyboardArrowRight style={{
                width:'2.5rem',
                height:'2.5rem'
            }} />
        </SLogonMenuItem>
    </FlexBox>
}

const Main = styled.div`
    width:100vw;
    min-height:100vh;
    background:url(${backgournd});
`

const Swiper = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
    img{
        width:100%;
        height:100%;
    }
`
const HomeSlogon = styled.div`
    position:absolute;
    top:20rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:auto;
    left:0;
    right:0;
`
const SayHelloTitle = styled.h1`
    position:relative;
    max-width:80rem;
    padding:0 1rem;
    text-align:center;
    font-size:6rem;
    margin:auto;
    z-index:99;
    transition:.4s ease all;
    font-family: 'Zen Dots', cursive;
    color:white;
    user-select:none;
    &:before{
        left:-1px;
        text-shadow:1px 0 #ff3f1a;
        content: attr(data-value);
        position: absolute;
        top: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0);
        clip: rect(0, 0, 0, 0);
    }
    &:after {
      left: 1px;
      text-shadow: -1px 0 #00a7e0;
      content: attr(data-value);
      position: absolute;
      top: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0);
      clip: rect(0, 0, 0, 0);
    }
    &:hover{
        &:before {
            text-shadow: 4px 0 #ff3f1a;
            animation: ${glitchLoop1} 0.8s infinite ease-in-out alternate-reverse;
        }
        &:after{
            text-shadow: -5px 0 #00a7e0;
            animation: ${glitchLoop2} 0.8s infinite ease-in-out alternate-reverse;
        }
    }

`

const ZenDotFont = styled.text`
    font-family: 'Zen Dots', cursive;
    ${FontStyle};
    user-select:none;
`

const ZcooLFont = styled.text`
    font-family: 'ZCOOL KuaiLe', cursive;
    ${FontStyle};
    user-select:none;
`

const SLogonMenuItem = styled.div`
    width:4rem;
    height:4rem;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    background:rgba(255,255,255,.8);
`

const MenuItemImg = styled.img`
    width:2.5rem;
    height:2.5rem;
    border-radius:30px;
`