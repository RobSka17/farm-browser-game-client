import { createContext, useContext, useEffect, useReducer, type ActionDispatch, type Context } from 'react'
import type { Building } from './buildings/building'
import { GameTopContainer } from './game-top-container'
import { GameMainContainer } from './game-main-container'
import { drawSprites } from './sprites/draw-sprites'
import { mockBuildingDataResponse } from './buildings/mock-building-data-response'
import { getBarnData } from './buildings/barn'
import './game.css'

interface GameState {
    canvas: HTMLCanvasElement | undefined,
    buildingData: Building[] | undefined
}

interface GameContext {
    dispatch: ActionDispatch<[action: Action]>,
    barn: Building | undefined
}

const initialState : GameState = {
    canvas: undefined,
    buildingData: []
}

const GameContext = createContext<GameContext | null>(null)
export const useGameContext = () => useContext(GameContext)

export const Game = () => {
    const [state, dispatch] = useReducer(rootReducer, initialState)

    // TODO: Update when API endpoint ready
    useEffect(() => { fetchBuildingData(dispatch) }, [])
    useEffect(() => { setUpCanvas(dispatch) }, [!state.canvas])
    useEffect(() => { console.log(state.buildingData) }, [state.buildingData])

    return (
        <>
            <GameContext.Provider value={{
                dispatch,
                barn: state.buildingData ? getBarnData(state.buildingData) : undefined
            }}>
                <div className={'Game'}>
                    <GameTopContainer />
                    <GameMainContainer />
                </div>
            </GameContext.Provider>
        </>
    )
}

async function fetchBuildingData(dispatch: ActionDispatch<[action: Action]>) {
    const response = await mockBuildingDataResponse()
    dispatch({
        type: reducerKeys.OnFetchBuildingData,
        payload: { buildingData: response }
    })
}

function setUpCanvas(dispatch: ActionDispatch<[action: Action]>) {
    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement
    if(!canvas) return
    dispatch({
        type: reducerKeys.OnLoadGame,
        payload: { canvas }
    })
    drawSprites(canvas)
}

const reducerKeys = {
    OnFetchBuildingData: 'ON_FETCH_BUILDING_DATA',
    OnLoadGame: 'ON_LOAD_GAME'
}

const reducerMap = new Map([
    [reducerKeys.OnFetchBuildingData, onFetchBuildingData],
    [reducerKeys.OnLoadGame, onLoadGame]
])

interface Payload {
    buildingData?: Building[],
    canvas?: HTMLCanvasElement,
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

function onFetchBuildingData(state : GameState, action : Action) {
    const {
        buildingData
    } = action.payload

    return {
        ...state,
        buildingData
    }
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