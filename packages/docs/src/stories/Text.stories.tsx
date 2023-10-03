import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@jv-ignite-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        size: 'md',
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti praesentium eius vitae, iusto modi autem atque aperiam sint eos optio corporis sapiente, temporibus quis impedit maxime itaque eum esse explicabo?'
    },
    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: { type: 'inline-radio' }
          },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {

    args: {
        children: 'Strong text',
        as: 'strong'
    }
}