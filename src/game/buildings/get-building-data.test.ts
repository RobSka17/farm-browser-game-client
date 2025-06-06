import { Resources } from '../resources/resources'
import { Buildings } from './buildings'
import { getCattleBarnData } from './cattle-barn'
import { mockBuildingsResponse, mockBuildingsResponseNoCattleBarn } from './mock-buildings-response'

describe('Gets building data', () => {    
    it('Gets cattle barn data', async () => {
        const response = await mockBuildingsResponse()
        const barnData  = getCattleBarnData(response)
        expect(barnData.level).toBe(1)
        expect(barnData.name).toBe(Buildings.CattleBarn)
        expect(barnData.resource).toBe(Resources.Milk)
        expect(barnData.outputRate).toBe(20)
    })

    it('Fails to get barn data if response empty', () => {
        expect(() => getCattleBarnData([])).toThrow(`Failed to get ${Buildings.CattleBarn} from buildings data.`)
    })

    it('Fails to get barn data if missing from response', async () => {
        const response = await mockBuildingsResponseNoCattleBarn()
        expect(() => getCattleBarnData(response)).toThrow(`Failed to get ${Buildings.CattleBarn} from buildings data.`)
    })
})