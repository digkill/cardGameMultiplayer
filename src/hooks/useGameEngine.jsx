import React from "react";

const GameEngineContext = React.createContext()

const TIME_PHASE_CARDS = 10
const TIME_PHASE_PLAYER_CHOICE = 10
const TIME_PHASE_PLAYER_ACTION = 3

export const GameEngineProvider = ({children}) => {
    return (
        <GameEngineContext.Provider value={{}}>
            {children}
        </GameEngineContext.Provider>)
}

export const useGameEngine = () => {
    const context = React.useContext(GameEngineContext)
    if (context === undefined) {
        throw new Error('useGameEngine must be used within a GameEngineProvider')
    }
    return context
}