

export const type = {
    SWITCH_MENU: ''
}

export const switchMenu = (menuName) =>{
    return{
        type:type.SWITCH_MENU,
        menuName
    }
}