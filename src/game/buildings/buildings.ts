export interface Building {
    level: number,
    name: string
    resource: string
    productionRate: number
}

export const Buildings = {
    CattleBarn: 'Cattle Barn',
    ChickenCoop: 'Chicken Coop'
}