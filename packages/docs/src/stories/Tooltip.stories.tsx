import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip } from '@jv-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a Tooltip'

  },
} as Meta

export const Primary: StoryObj = {}