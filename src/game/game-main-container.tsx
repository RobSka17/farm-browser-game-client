import { useGameContext } from './game'
import { GameSideMenu } from './game-side-menu'

export const GameMainContainer = () => {
    const gameContext = useGameContext()
    console.log(gameContext)

    return (
        <>
            <div className={'GameMainContainer'}>
                <canvas id={'game-canvas'} width={'600'} height={'400'}></canvas>
                <GameSideMenu props={{
                    title: 'Farm Overview'
                }}/>
            </div>
        </>
    )
}