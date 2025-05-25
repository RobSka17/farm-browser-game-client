import { drawSprite, type DrawSpriteParams } from "./draw-sprite"

describe('Creates sprite', () => {
    it('Barn sprite created with good params', () => {
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

        const params: DrawSpriteParams = {
            canvas: mockCanvas as HTMLCanvasElement,
            name: 'barn',
            format: 'png',
            x: 100,
            y: 100
        }
        const result = drawSprite(params)
        expect(result.src).toBe(`http://localhost/sprites/${params.name}.${params.format}`)
    })

    it('Throws error if canvas ctxt null', () => {
        interface MockHTMLCanvasElement extends Partial<HTMLCanvasElement> {
            getContext: jest.Mock
        }

        const mockCanvas: MockHTMLCanvasElement = {
            getContext: jest.fn().mockReturnValue(null)
        }

        const params: DrawSpriteParams = {
            canvas: mockCanvas as HTMLCanvasElement,
            name: 'barn',
            format: 'png',
            x: 100,
            y: 100
        }

        expect(() => drawSprite(params)).toThrow(`Failed to draw sprite ${params.name}.${params.format}.`)
    })
})