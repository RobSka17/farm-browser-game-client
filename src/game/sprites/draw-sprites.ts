import { drawSprite } from "./draw-sprite";
import { SpriteData } from "./sprite-data";

export function drawSprites(canvas: HTMLCanvasElement) {
    SpriteData.map(s => {
        const sprite = new Image()
        sprite.src = s.src

        drawSprite({
            canvas,
            sprite,
            x: s.x,
            y: s.y
        })
    })
}