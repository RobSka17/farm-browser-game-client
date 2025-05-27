import type { Building } from './building'

export function getBarnData(buildingData: Building[]): Building {
    try{
        const barn = buildingData.find(b => b.name === 'Barn')
        return barn as Building
    }
    catch(e) {
        throw new Error('Failed to get barn from building data.')
    }
}