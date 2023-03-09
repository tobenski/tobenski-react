'use client'
import styled, { css} from "styled-components"
import type { iRibbon } from "./ribbon"

const RibbonTopLeft = css`
    top: -10px;
    left: -10px;

    &::before,
    &::after {
        border-top-color: transparent;
        border-left-color: transparent;
    }
    &::before {
        top: 0;
        right: 0;
    }
    &::after {
        bottom: 0;
        left: 0;
    }
    span {
        right: -25px;
        top: 30px;
        transform: rotate(-45deg);
    }
`
const RibbonTopRight = css`
    top: -10px;
    right: -10px;

    &::before,
    &::after {
        border-top-color: transparent;
        border-right-color: transparent;
    }
    &::before {
        top: 0;
        left: 0;
    }
    &::after {
        bottom: 0;
        right: 0;
    }
    span {
        left: -25px;
        top: 30px;
        transform: rotate(45deg);
    }
`
const RibbonBottomLeft = css`
    bottom: -10px;
    left: -10px;

    &::before,
    &::after {
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    &::before {
        bottom: 0;
        right: 0;
    }
    &::after {
        top: 0;
        left: 0;
    }
    span {
        right: -25px;
        bottom: 30px;
        transform: rotate(225deg);
        p {
            transform: rotate(180deg);
        }
    }
`
const RibbonBottomRight = css`
    bottom: -10px;
    right: -10px;

    &::before,
    &::after {
        border-bottom-color: transparent;
        border-right-color: transparent;
    }
    &::before {
        bottom: 0;
        left: 0;
    }
    &::after {
        top: 0;
        right: 0;
    }
    span {
        left: -25px;
        bottom: 30px;
        transform: rotate(-225deg);
        p {
            transform: rotate(180deg);
        }
    }
`
const StyledRibbon = styled.div<iRibbon>`
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: absolute;
    z-index: 12;
    pointer-events: none;

    &::before,
    &::after {
        position: absolute;
        z-index: -1;
        content: '';
        display: block;
        border: 5px solid ${props => props.bgColor};
    }
    span {
        position: absolute;
        display: block;
        width: 225px;
        padding: 15px 0;
        background-color: ${props => props.bgColor};
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        color: ${props => props.textColor};
        font: 700 18px/1 'Lato, sans-serif';
        text-shadow: 0 1p 1px rgba(0,0,0,0.2);
        text-transform: uppercase;
        text-align: center;
    }
    display: ${props => props.show ? 'block':'none'};
    ${props => props.position === 'TopLeft' && RibbonTopLeft}
    ${props => props.position === 'TopRight' && RibbonTopRight}
    ${props => props.position === 'BottomLeft' && RibbonBottomLeft}
    ${props => props.position === 'BottomRight' && RibbonBottomRight}
`

export default StyledRibbon