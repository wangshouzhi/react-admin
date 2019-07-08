/**
 * Reducer 数据处理
 */
import { type } from './../action'
const initialState = {
    menuName: '' 
}

export default (state = initialState,action) => {
    switch(action) {
        case type.SWITCH_MENUL:
            return{
                ...state,
                menuName:action.menuName
            }
            break;
        default:
            break;   
    }
}