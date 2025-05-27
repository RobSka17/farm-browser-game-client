import { Resources } from '../resources/resources'
import { Buildings, type Building } from './buildings'

const mockBuildings: Building[] = [
    {
        level: 1,
        name: Buildings.CattleBarn,
        resource: Resources.Milk,
        productionRate: 20
    },
    {
        level: 1,
        name: Buildings.ChickenCoop,
        resource: Resources.Eggs,
        productionRate: 10
    }
]

const mockBuildingsNoCattleBarn: Building[] = [
    {
        level: 1,
        name: Buildings.ChickenCoop,
        resource: Resources.Eggs,
        productionRate: 10
    }
]

export const mockBuildingsResponse = async (): Promise<Building[]> => {
    return new Promise((resolve) => {
        resolve(mockBuildings)
    })
}

export const mockBuildingsResponseNoCattleBarn = async (): Promise<Building[]> => {
    return new Promise((resolve) => {
        resolve(mockBuildingsNoCattleBarn)
    })
}