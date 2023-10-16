import React, { ComponentProps, ReactNode } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { RadixTooltipArrow, RadixTooltipContent } from './styles';

export type TooltipProps = ComponentProps<typeof RadixTooltip.Root> & {
    content: string | ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
    return (
        <RadixTooltip.Provider>
            <RadixTooltip.Root {...props}>
                <RadixTooltip.Trigger>
                    {children}
                </RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltipContent>
                        <RadixTooltipArrow />
                        {content}
                    </RadixTooltipContent>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    )
}