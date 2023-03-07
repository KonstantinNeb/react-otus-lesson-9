import { PlayProp } from "./PlayProp"
import { ComponentStory } from "@storybook/react"

const Template: ComponentStory<typeof PlayProp> = (args: any) => (
  <PlayProp {...args} />
)

export const PlayPropDefault = Template.bind({})
PlayPropDefault.args = {}
