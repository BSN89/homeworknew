




type InitialStateType = {
    themeId: number
}


const initState: InitialStateType = {
    themeId: 1,
}

export const themeReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":{
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}
export type ChangeThemeIdType = ReturnType<typeof changeThemeId>
type ActionType = ChangeThemeIdType
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
