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
    size: number,
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
        size = 5,
        children
    } : ribbonType
) {
    return (
        <StyledRibbon show={show} position={position} bgColor={bgColor} textColor={textColor} size={size}>
            <span><p>{children}</p></span>
        </StyledRibbon>
    )
}

export default Ribbon