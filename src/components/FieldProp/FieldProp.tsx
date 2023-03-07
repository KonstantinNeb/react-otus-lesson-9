import { SettingsPanel } from "../GameSettingsPanel/Group"
import styles from "./FieldProp.module.css"
import {
  GAME_FIELDWIDTH,
  GAME_FIELDHEIGHT,
  GAME_CELLCOUNT,
  GAME_POPULATION,
} from "../Game/Game"

import { SpeedEdit } from "../SpeedEdit/SpeedEdit"

type FieldPropProps = {
  onWidthChange: (width: number) => void
  onHeightChange: (height: number) => void
  onCellCountChange: (cellCount: number) => void
  onPopulationChange: (percentage: number) => void
}

export const FieldProp = ({
  onWidthChange,
  onHeightChange,
  onCellCountChange,
  onPopulationChange,
}: FieldPropProps) => {
  return (
    <SettingsPanel title="Field settings">
      <div className={styles.fieldPropPanel}>
        <div className={styles.fieldPropGroup}>
          <div className={styles.fieldPropElement}>Width:</div>
          <SpeedEdit
            placeHolder="Width"
            startValue={GAME_FIELDWIDTH}
            onValueChange={onWidthChange}
          ></SpeedEdit>
        </div>
        <div className={styles.fieldPropGroup}>
          <div className={styles.fieldPropElement}>Height:</div>
          <SpeedEdit
            placeHolder="Height"
            startValue={GAME_FIELDHEIGHT}
            onValueChange={onHeightChange}
          ></SpeedEdit>
        </div>
        <div className={styles.fieldPropGroup}>
          <div className={styles.fieldPropElement}>Cell count:</div>
          <SpeedEdit
            placeHolder="Cell count"
            startValue={GAME_CELLCOUNT}
            onValueChange={onCellCountChange}
          ></SpeedEdit>
        </div>
        <div className={styles.fieldPropGroup}>
          <div className={styles.fieldPropElement}>Population:</div>
          <SpeedEdit
            placeHolder="Population"
            startValue={GAME_POPULATION}
            onValueChange={onPopulationChange}
          ></SpeedEdit>
        </div>
      </div>
    </SettingsPanel>
  )
}
