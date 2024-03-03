import {createSlice} from '@reduxjs/toolkit'

 interface SideMenuState{
    collapse: boolean
}

const initialState:SideMenuState={
    collapse:false
}

export const sideMenuToggleSlice=createSlice({
    name:"sideMenu",
    initialState,
    reducers:{ 
        toggle:state => { state.collapse = !state.collapse},

}
})

export const {toggle}= sideMenuToggleSlice.actions
// export const useSideMenuSelect=(state:RootState)=> state.sideMenu.collapse;
export default sideMenuToggleSlice.reducer