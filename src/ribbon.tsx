import React from "react";
import StyledRibbon from './styles';

export type positionType =
    | "TopLeft"
    | "TopRight"
    | "BottomLeft"
    | "BottomRight";


export interface iRibbon {
    show?: boolean,
    position?: positionType,
    bgColor?: string,
    textColor?: string,
}

export interface ribbonType extends iRibbon {
    children: string,
}

export function Ribbon(
    {
        show = false,
        position = 'TopLeft',
        bgColor = 'yellow',
        textColor = '#000',
        children
    } : ribbonType
) {
    return (
        <StyledRibbon show={show} position={position} bgColor={bgColor} textColor={textColor}>
            <span><p>{children}</p></span>
        </StyledRibbon>
    )
}