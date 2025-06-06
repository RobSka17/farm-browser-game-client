import { Resources } from '../resources/resources'
import { Buildings, type Building } from './buildings'

const mockBuildings: Building[] = [
    {
        level: 1,
        name: Buildings.WheatFarm,
        resource: Resources.Wheat,
        outputRate: 20
    },
    {
        level: 1,
        name: Buildings.CattleBarn,
        resource: Resources.Milk,
        outputRate: 20
    },
    {
        level: 1,
        name: Buildings.ChickenCoop,
        resource: Resources.Eggs,
        outputRate: 10
    },
    {
        level: 1,
        name: Buildings.Mill,
        resource: Resources.Flour,
        outputRate: 10,
        inputRate: 20
    },
    {
        level: 1,
        name: Buildings.Dairy,
        resource: Resources.Cheese,
        outputRate: 10,
        inputRate: 20
    },
    {
        level: 1,
        name: Buildings.Market
    }
]

const mockBuildingsNoCattleBarn: Building[] = [
    {
        level: 1,
        name: Buildings.WheatFarm,
        resource: Resources.Wheat,
        outputRate: 20
    },
    {
        level: 1,
        name: Buildings.ChickenCoop,
        resource: Resources.Eggs,
        outputRate: 10
    },
    {
        level: 1,
        name: Buildings.Mill,
        resource: Resources.Flour,
        outputRate: 10,
        inputRate: 20
    },
    {
        level: 1,
        name: Buildings.Dairy,
        resource: Resources.Cheese,
        outputRate: 10,
        inputRate: 20
    },
    {
        level: 1,
        name: Buildings.Market
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