export interface DrawSpriteParams {
    canvas: HTMLCanvasElement,
    name: string,
    format: string,
    x: number,
    y: number
}

export function drawSprite(params: DrawSpriteParams) {
    const {
        canvas,
        name,
        format,
        x,
        y
    } = params

    const sprite = new Image()
    try {
        const ctx = canvas.getContext('2d')
        sprite.src = `/sprites/${name}.${format}`
        if(ctx === null) throw new Error(`Failed to draw sprite ${name}.${format}.`)
        ctx.drawImage(sprite, x, y)
    }
    catch(e) {
        throw new Error(`Failed to draw sprite ${name}.${format}.`)
    }

    return sprite
}