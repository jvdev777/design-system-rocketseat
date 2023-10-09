import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@jv-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a Tooltip'

  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}