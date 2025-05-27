import { Resource } from '../resources/resource'
import { getBarnData } from './barn'
import { mockBuildingDataResponse } from './mock-building-data-response'

describe('Gets building data', () => {    
    it('Gets barn data', async () => {
        const response = await mockBuildingDataResponse()
        const barnData  = getBarnData(response)
        expect(barnData.level).toBe(1)
        expect(barnData.name).toBe('Barn')
        expect(barnData.resource).toBe(Resource.Wheat)
        expect(barnData.productionRate).toBe(20)
    })
})