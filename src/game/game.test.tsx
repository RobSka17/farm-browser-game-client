import { render, screen } from '@testing-library/react'
import { GameTopContainer } from './game-top-container'
import { GameMainContainer } from './game-main-container'
import '@testing-library/jest-dom'

describe('Renders game components', () => {
    it('Renders top container', async () => {
        render(<GameTopContainer />)
        await screen.findByTestId('game-top-container')
        expect(screen.getByTestId('game-top-container')).toBeInTheDocument()
        expect(screen.getByTestId('game-top-container')).toHaveTextContent('Top content to be here')
    })

    it('Renders main container', async () => {
        render(<GameMainContainer />)
        await screen.findByTestId('game-main-container')
        expect(screen.getByTestId('game-main-container')).toBeInTheDocument()
        expect(screen.getByTestId('game-main-container')).toHaveTextContent('Farm Overview')
    })
})