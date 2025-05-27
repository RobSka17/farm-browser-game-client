import { Buildings, type Building } from './buildings'
import { getBuildingData } from './get-building-data'

export const getCattleBarnData = (buildings: Building[]): Building => getBuildingData({
    buildings,
    name: Buildings.CattleBarn
})