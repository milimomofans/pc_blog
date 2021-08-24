import {useState} from 'react'
import {USER_CONFIG} from 'config/index'
import styled from '@emotion/styled/macro'
import {FlexBox} from 'components/lib'
import {HomeSharp,MovieCreationSharp,ImportContactsSharp,InfoSharp} from '@material-ui/icons';
import { keyframes } from '@emotion/react';
import {wobbleBottom,bounceTop,jelloHorizontal, blink} from 'components/animal-lib'

export const Header = () => {
    const [Menu] = useState([
        {
            name:'主页',
            route:'',
            icon:()=>{
                return <WobbleBottom>
                    <HomeSharp style={{width:'2.5rem',height:'2.5rem',marginRight:'.3rem'}} />
                </WobbleBottom> 
            },
            animal:''
        },
        {
            name:'番组',
            route:'',
            icon:()=>{
                return <BounceTop>
                    <MovieCreationSharp style={{width:'2.5rem',height:'2.5rem',marginRight:'.3rem'}} />
                </BounceTop>
            },
            animal:''
        },
        {
            name:'技术',
            route:'',
            icon:()=>{
                return <JelloHorizontal>
                    <ImportContactsSharp style={{width:'2.5rem',height:'2.5rem',marginRight:'.3rem'}} />
                </JelloHorizontal>
            },
            animal:''
        },
        {
            name:'关于',
            route:'',
            icon:()=>{
                return <Blink>
                    <InfoSharp style={{width:'2.5rem',height:'2.5rem',marginRight:'.3rem'}}/>
                </Blink>
            },
            animal:''
        }
    ])
    return (
        <HeadContainer 
            alignItems={'center'}
            justContent={'space-between'}
        >
            <HeadLeft>
                <h1>{USER_CONFIG.blogName}</h1>
                <h1>の</h1>
                <h1>Blog</h1>
            </HeadLeft>
            <HeadRight>
                {
                    Menu.map((menuItem,menuIndex)=>{
                        return <MenuItem key={menuIndex} alignItems={'center'}>
                            {menuItem.icon()}
                            {menuItem.name}
                        </MenuItem>
                    })
                }

            </HeadRight>
        </HeadContainer>
    )
}

const HeadContainer = styled(FlexBox)`
    width:calc(100vw - 16rem);
    height:8rem;
    margin:auto;
    position:fixed;
    left:0;
    right:0;
    z-index:999;
    top:2rem;
    padding:2rem;
    box-sizing:border-box;
    border-radius:2rem;
    transition:all .5s linear;
    &:hover{
        box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.1);
        background-color:rgba(255, 255, 255, 0.9);
    }
`

const HeadLeft = styled(FlexBox)``

const HeadRight = styled(FlexBox)``

const MenuItemKeyframes = keyframes({
    'from': {
      left: '0',
      width:'0'
    },
    'to': {
      left:'50%',
      width:'100%'
    }
})

const WobbleBottom = styled.div``
const BounceTop = styled.div``
const JelloHorizontal = styled.div``
const Blink = styled.div``

const MenuItem = styled(FlexBox)`
    margin-right:1rem;
    color:#ff8000;
    transition:all .5s;
    position:relative;
    &:hover{
        color:#d33 !important;
        &:after{
            background-color:#d33;      
            position:absolute;
            content:'';
            width:100%;
            height:.5rem;
            z-index:10;
            transform:translateX(-50%);
            bottom:-1rem;
            left:50%;
            animation:${MenuItemKeyframes} .3s ease-in-out;
        }
        
    };
    &:hover ${WobbleBottom}{
        animation:${wobbleBottom} 1s linear infinite reverse both;
    }
    &:hover ${BounceTop} {
        animation:${bounceTop} 1s linear infinite reverse both;
    }
    &:hover ${JelloHorizontal}{
        animation:${jelloHorizontal} 1s infinite both;
    }
    &:hover ${Blink}{
        animation:${blink} 1s infinite both;
    }
`

