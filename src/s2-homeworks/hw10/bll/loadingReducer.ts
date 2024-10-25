

export type initStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false,
}

export const loadingReducer = (state: initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING":{
            return { isLoading: action.isLoading }
        }
        // пишет студент  // need to fix

        default:
            return state
    }
}



export const loadingAC = (isLoading: boolean) => ({type: 'CHANGE_LOADING', isLoading,})

export type LoadingActionType = ReturnType<typeof loadingAC>


type ActionType = LoadingActionType