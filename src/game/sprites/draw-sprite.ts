interface DrawSpriteParams {
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

    const ctx = canvas.getContext('2d')
    if(ctx === null) {
        console.error(`Failed to draw sprite ${name}.${format}. Canvas was null.`)
        return
    }
    const sprite = new Image()
    sprite.src = `/sprites/${name}.${format}`
    ctx.drawImage(sprite, x, y)
}