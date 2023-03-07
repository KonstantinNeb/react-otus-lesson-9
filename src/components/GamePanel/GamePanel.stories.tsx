import { GamePanel } from "./GamePanel"
import appStore from "../Store/store"
import { ProviderWrapper } from "../ProviderWrapper/ProviderWrapper"
export default {
  title: "GamePanel",
  component: GamePanel,
}
export const Basic = () => (
  <ProviderWrapper store={appStore}>
    <GamePanel />
  </ProviderWrapper>
)
