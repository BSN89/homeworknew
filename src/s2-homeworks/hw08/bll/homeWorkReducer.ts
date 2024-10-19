import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up'){
                const copyState = state.map(el => el)
                return copyState.sort((a,b) => b.age - a.age)
            }if (action.payload === 'down'){
                const copyState = state.map(el => el)
                return copyState.sort((a,b) => a.age - b.age)
            }
                return state
        }
        case 'check': {

            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}
