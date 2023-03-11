'use client'
import styled, { css} from "styled-components"
import type { iRibbon } from "."

const StyledRibbon = styled.div<iRibbon>`
    width: ${props => props.size * 30}px;
    height: ${props => props.size * 30}px;
    overflow: hidden;
    position: absolute;
    z-index: 12;
    pointer-events: none;

    // Top
    ${props => (props.position === 'TopLeft' || props.position === 'TopRight') && 'top:' + props.size * -2 + 'px;'}        
    // Bottom
    ${props => (props.position === 'BottomLeft' || props.position === 'BottomRight') && 'bottom: ' + props.size * -2 + 'px;'}
    // Left
    ${props => (props.position === 'TopLeft' || props.position === 'BottomLeft') && 'left: ' + props.size * -2 + 'px;'}        
    // Right
    ${props => (props.position === 'TopRight' || props.position === 'BottomRight') && 'right: ' + props.size * -2 + 'px;'}

    &::before,
    &::after {
        position: absolute;
        z-index: -1;
        content: '';
        display: block;
        border-width: ${props => props.size}px;
        border-style: solid;
        border-color: ${props => props.bgColor};
        // Top
        ${props => (props.position === 'TopLeft' || props.position === 'TopRight') && 'border-top-color: transparent;'}        
        // Bottom
        ${props => (props.position === 'BottomLeft' || props.position === 'BottomRight') && 'border-bottom-color: transparent;'}
        // Left
        ${props => (props.position === 'TopLeft' || props.position === 'BottomLeft') && 'border-left-color: transparent;'}        
        // Right
        ${props => (props.position === 'TopRight' || props.position === 'BottomRight') && 'border-right-color: transparent;'}
        
        
        
    }
    &::before {
        // Top
        ${props => (props.position === 'TopLeft' || props.position === 'TopRight') && 'top: 0;'}        
        // Bottom
        ${props => (props.position === 'BottomLeft' || props.position === 'BottomRight') && 'bottom: 0;'}
        // Left
        ${props => (props.position === 'TopLeft' || props.position === 'BottomLeft') && 'right: 0;'}        
        // Right
        ${props => (props.position === 'TopRight' || props.position === 'BottomRight') && 'left: 0;'}

    }
    &::after {
        // Top
        ${props => (props.position === 'TopLeft' || props.position === 'TopRight') && 'bottom: 0;'}        
        // Bottom
        ${props => (props.position === 'BottomLeft' || props.position === 'BottomRight') && 'top: 0;'}
        // Left
        ${props => (props.position === 'TopLeft' || props.position === 'BottomLeft') && 'left: 0;'}        
        // Right
        ${props => (props.position === 'TopRight' || props.position === 'BottomRight') && 'right: 0;'}
    }
    span {
        position: absolute;
        display: block;
        width: ${props => props.size * 45}px;
        height: ${props => props.size * 10}px;
        padding-top: ${props => props.size * 3}px;
        padding-bottom: ${props => props.size * 3}px;
        padding-left: 0;
        padding-right: 0;
        background-color: ${props => props.bgColor};
        box-shadow: 0 ${props => props.size}px ${props => props.size * 2.5}px rgba(0,0,0,0.1); // 0 * * farver
        color: ${props => props.textColor};
        font-weight: 700;
        font-size: ${props => props.size * 4}px;
        line-height: 1;
        font-family: 'Lato, sans-serif'; 
        text-shadow: 0 1px 1px rgba(0,0,0,0.2);
        text-transform: uppercase;
        text-align: center;
        // Top
        ${props => (props.position === 'TopLeft' || props.position === 'TopRight') && 'top: ' + props.size * 6 + 'px;'}        
        // Bottom
        ${props => (props.position === 'BottomLeft' || props.position === 'BottomRight') && 'bottom: ' + props.size * 6 + 'px;'}
        // Left
        ${props => (props.position === 'TopLeft' || props.position === 'BottomLeft') && 'right: ' + props.size * -5 + 'px;'}        
        // Right
        ${props => (props.position === 'TopRight' || props.position === 'BottomRight') && 'left: ' + props.size * -5 + 'px;'}
        // Top Left
        ${props => props.position === 'TopLeft' && 'transform: rotate(-45deg);'}
        // Top Right
        ${props => props.position === 'TopRight' && 'transform: rotate(45deg);'}
        // Bottom Left
        ${props => props.position === 'BottomLeft' && 'transform: rotate(225deg);'}
        // Bottom Right
        ${props => props.position === 'BottomRight' && 'transform: rotate(-225deg);'}
        
        p {
            // Bottom
            ${props => (props.position === 'BottomLeft' || props.position === 'BottomRight') && 'transform: rotate(180deg);'}
        }
    }
    display: ${props => props.show ? 'block':'none'};
`

export default StyledRibbon