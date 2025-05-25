import { Resource } from '../resources/resource'
import { getBarnData, type GetBarnDataParams } from './barn'

describe('Gets barn data', () => {
    it('Barn data loaded from provided params', () => {
        const params: GetBarnDataParams = {
            level: 1,
            resource: Resource.Wheat,
            productionRate: 10
        }

        const result  = getBarnData(params)
        expect(result.level).toBe(params.level)
        expect(result.name).toBe('Barn')
        expect(result.resource).toBe(params.resource)
        expect(result.productionRate).toBe(params.productionRate)
    })
})