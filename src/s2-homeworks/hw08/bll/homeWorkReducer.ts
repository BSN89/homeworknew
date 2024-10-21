import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up'){
                return [...state].sort((a,b) => a.name.localeCompare(b.name))
                //return [...state].sort((a,b) => b.age - a.age)
            }if (action.payload === 'down'){
                return [...state].sort((a,b) => a.name.localeCompare(b.name)).reverse()
                //return [...state].sort((a,b) => a.age - b.age)
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
