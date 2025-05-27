import type { Building } from './buildings'

interface GetBuildingDataParams {
    buildings: Building[],
    name: string
}

export const getBuildingData = (params: GetBuildingDataParams): Building => {
    const {
        buildings,
        name
    } = params

    const errorMessage: string = `Failed to get ${name} from buildings data.`

    try {
        const building = buildings.find(b => b.name === name)
        if(!building) throw new Error(errorMessage)
        return building as Building
    }
    catch(e) {
        throw new Error(errorMessage)
    }
}