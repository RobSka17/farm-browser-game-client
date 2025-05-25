import { drawSprite, type DrawSpriteParams } from "./draw-sprite"

describe('Creates sprite', () => {
    it('Barn sprite created with good params', async () => {
        interface MockHTMLCanvasElement extends Partial<HTMLCanvasElement> {
            getContext: jest.Mock
        }

        interface MockCanvasRenderingContext2D extends Partial<CanvasRenderingContext2D> {
            drawImage: jest.Mock
        }

        const mockCanvasContext: MockCanvasRenderingContext2D = {
            drawImage: jest.fn()
        }

        const mockCanvas: MockHTMLCanvasElement = {
            getContext: jest.fn().mockReturnValue(mockCanvasContext)
        }

        const sprite = new Image()

        const params: DrawSpriteParams = {
            canvas: mockCanvas as HTMLCanvasElement,
            sprite,
            x: 100,
            y: 100
        }
        const result = await drawSprite(params)
        expect(result).toBe(sprite)
    })

    it('Throws error if canvas ctxt null', () => {
        interface MockHTMLCanvasElement extends Partial<HTMLCanvasElement> {
            getContext: jest.Mock
        }

        const mockCanvas: MockHTMLCanvasElement = {
            getContext: jest.fn().mockReturnValue(null)
        }

        const sprite = new Image()
        sprite.src = '/sprites/barn.png'

        const params: DrawSpriteParams = {
            canvas: mockCanvas as HTMLCanvasElement,
            sprite,
            x: 100,
            y: 100
        }

        expect(() => drawSprite(params)).toThrow('Failed to draw sprite http://localhost/sprites/barn.png')
    })
})