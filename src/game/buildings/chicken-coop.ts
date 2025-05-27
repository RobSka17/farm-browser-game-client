import { Buildings, type Building } from './buildings'
import { getBuildingData } from './get-building-data'

export const getChickenCoopData = (buildings: Building[]): Building => getBuildingData({
    buildings,
    name: Buildings.ChickenCoop
})