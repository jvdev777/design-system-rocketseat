import * as RadixTooltip from '@radix-ui/react-tooltip';
import { styled } from '@stitches/react';

export const RadixTooltipContent = styled(RadixTooltip.Content, {
    background: '$gray900',
    color: '$gray100',
    fontFamily: '$default',
    padding: '$4',
    borderRadius: '$md',
    display: 'flex',
    justifyContent: 'center'
})

export const RadixTooltipArrow = styled(RadixTooltip.Arrow, {})