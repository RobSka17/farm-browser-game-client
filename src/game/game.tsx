import { createContext, useContext, useEffect, useReducer, type ActionDispatch, type Context } from 'react'
import type { Building } from './buildings/buildings'
import { GameTopContainer } from './game-top-container'
import { GameMainContainer } from './game-main-container'
import { drawSprites } from './sprites/draw-sprites'
import { mockBuildingsResponse } from './buildings/mock-buildings-response'
import { getCattleBarnData } from './buildings/cattle-barn'
import { getChickenCoopData } from './buildings/chicken-coop'
import './game.css'

interface GameState {
    canvas: HTMLCanvasElement | undefined,
    buildings: Building[] | undefined
    cattleBarn: Building | undefined,
    chickenCoop: Building | undefined
}

interface GameContext {
    dispatch: ActionDispatch<[action: Action]>,
    cattleBarn: Building | undefined,
    chickenCoop: Building | undefined
}

const initialState : GameState = {
    canvas: undefined,
    buildings: [],
    cattleBarn: undefined,
    chickenCoop: undefined
}

const GameContext = createContext<GameContext | null>(null)
export const useGameContext = () => useContext(GameContext)

export const Game = () => {
    const [state, dispatch] = useReducer(rootReducer, initialState)

    // TODO: Update when API endpoint ready
    useEffect(() => { fetchBuildingData(dispatch) }, [])
    useEffect(() => { setUpCanvas(dispatch) }, [!state.canvas])
    useEffect(() => { getAllBuildingData(state.buildings as Building[], dispatch) }, [state.buildings])

    return (
        <>
            <GameContext.Provider value={{
                dispatch,
                cattleBarn: state.cattleBarn,
                chickenCoop: state.chickenCoop
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
    const response = await mockBuildingsResponse()
    dispatch({
        type: reducerKeys.OnFetchBuildingData,
        payload: { buildings: response }
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

function getAllBuildingData(buildings: Building[], dispatch: ActionDispatch<[action: Action]>) {
    if(buildings.length < 1) return
    const cattleBarn = getCattleBarnData(buildings)
    const chickenCoop = getChickenCoopData(buildings)
    dispatch({
        type: reducerKeys.OnGetAllBuildingData,
        payload: {
            cattleBarn,
            chickenCoop
        }
    })
}

const reducerKeys = {
    OnFetchBuildingData: 'ON_FETCH_BUILDING_DATA',
    OnLoadGame: 'ON_LOAD_GAME',
    OnGetAllBuildingData: 'ON_GET_ALL_BUILDING_DATA'
}

const reducerMap = new Map([
    [reducerKeys.OnFetchBuildingData, onFetchBuildingData],
    [reducerKeys.OnLoadGame, onLoadGame],
    [reducerKeys.OnGetAllBuildingData, onGetAllBuildingData]
])

interface Payload {
    buildings?: Building[],
    canvas?: HTMLCanvasElement,
    cattleBarn?: Building,
    chickenCoop?: Building
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
        buildings
    } = action.payload

    return {
        ...state,
        buildings
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

function onGetAllBuildingData(state: GameState, action : Action) {
    const {
        cattleBarn,
        chickenCoop
    } = action.payload

    return {
        ...state,
        cattleBarn,
        chickenCoop
    }
}