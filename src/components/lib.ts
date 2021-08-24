import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const FlexBox = styled.div<{
    alignItems?:string
    margin?:string
    justContent?:string
}>`
    display:flex;
    align-items:${props => props.alignItems ? props.alignItems : 'initial' };
    justify-content:${props => props.justContent ? props.justContent : 'initial'};
    margin:${props => props.margin ? props.margin : ''};
`

export const FontStyle = (props:{
    color?:string
    fontSize?:number
    fontWeight?:string
}) => css`
    color:${props.color ? props.color : '#999'};
    font-size:${props.fontSize ? props.fontSize + 'rem' : '2rem'};
    font-weight:${props.fontWeight ? props.fontWeight : 500};
`