import { createContext, useEffect, useReducer, type Context } from 'react'
import { drawSprite } from './sprites/draw-sprite'
import type { Building } from './buildings/building'
import { getBarnData } from './buildings/barn'
import { Resource } from './resources/resource'
import './game.css'
import { GameTopContainer } from './game-top-container'
import { GameMainContainer } from './game-main-container'

interface GameState {
    test: boolean,
    canvas: HTMLCanvasElement | null
}

interface GameContext {
    barn: Building
}

const initialState : GameState = {
    test: true,
    canvas: null
}

export const Game = () => {
    const [state, dispatch] = useReducer(rootReducer, initialState)
    const GameContext: Context<GameContext> = createContext({
        barn: getBarnData({
            level: 1,
            resource: Resource.Wheat,
            productionRate: 20
        })
    })

    useEffect(() => {
        const canvas = document.getElementById('game-canvas') as HTMLCanvasElement
        if(canvas === null) return
        dispatch({
            type: reducerKeys.OnLoadGame,
            payload: { canvas }
        })
        drawSprite({
            canvas,
            name: 'barn',
            format: 'png',
            x: 100,
            y: 40
        })
    }, [!state.canvas])

    return (
        <>
            <div className={'Game'}>
                <GameTopContainer />
                <GameMainContainer />
            </div>
        </>
    )
}

const reducerKeys = {
    OnLoadGame: 'ON_LOAD_GAME'
}

const reducerMap = new Map([
    [reducerKeys.OnLoadGame, onLoadGame]
])

interface Payload {
    canvas: HTMLCanvasElement
}

interface Action {
    type: string,
    payload: Payload
}

function rootReducer(state : GameState, action : Action) {
    const reducer = reducerMap.get(action.type)
    if(!reducer) return state
    return reducer(state, action)
}

function onLoadGame(state : GameState, action : Action) {
    const {
        canvas
    } = action.payload

    return {
        ...state,
        canvas
    }
}