import { GameSideMenu } from './game-side-menu'

export const GameMainContainer = () => {
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