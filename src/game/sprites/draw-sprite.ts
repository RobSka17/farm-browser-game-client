export interface DrawSpriteParams {
    canvas: HTMLCanvasElement,
    sprite: HTMLImageElement,
    x: number,
    y: number
}

export function drawSprite(params: DrawSpriteParams): Promise<HTMLImageElement> {
    const {
        canvas,
        sprite,
        x,
        y
    } = params

    const ctx = canvas.getContext('2d')
    if(ctx === null) throw new Error(`Failed to draw sprite ${sprite.src}`)

    if(sprite.complete) {
        ctx.drawImage(sprite, x, y)
        return Promise.resolve(sprite)
    }

    return new Promise<HTMLImageElement>((resolve) => {
        sprite.onload = () => {
            ctx.drawImage(sprite, x, y)
            resolve(sprite)
        }
    })
}