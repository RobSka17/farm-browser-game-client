import { Resource } from '../resources/resource'
import type { Building } from './building'

const mockBuildingData: Building[] = [
    {
        level: 1,
        name: 'Barn',
        resource: Resource.Wheat,
        productionRate: 20
    }
]

export const mockBuildingDataResponse = async (): Promise<Building[]> => {
    return new Promise((resolve) => {
        resolve(mockBuildingData)
    })
}