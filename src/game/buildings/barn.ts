import type { Building } from './building'

export interface GetBarnDataParams {
    level: number,
    resource: string,
    productionRate: number
}

export function getBarnData(params: GetBarnDataParams): Building {
    const {
        level,
        resource,
        productionRate
    } = params

    return {
        level,
        name: 'Barn',
        resource,
        productionRate
    }
}