import { SpeedEdit } from "./SpeedEdit"
export default {
  title: "SpeedEdit",
  component: SpeedEdit,
}
export const Basic = () => (
  <SpeedEdit step={1} onValueChange={() => {}} startValue={1} />
)
