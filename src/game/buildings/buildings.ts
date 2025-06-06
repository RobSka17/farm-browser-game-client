export interface Building {
    level: number,
    name: string,
    resource?: string,
    inputRate?: number,
    outputRate?: number
}

export const Buildings = {
    WheatFarm: 'Wheat Farm',
    CattleBarn: 'Cattle Barn',
    ChickenCoop: 'Chicken Coop',
    Mill: 'Mill',
    Dairy: 'Dairy',
    Market: 'Market'
}