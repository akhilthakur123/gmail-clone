import {createSlice} from "@reduxjs/toolkit"
const appSlice = createSlice({
    name:"app",
    initialState:{
        open:false,
        user:null,
        emails:[],
        sentEmails: [],
        selectedEmail: null,
        searchText:"",
        selectedNavItem: "Inbox"
    },
    reducers:{
        setOpen:(state,action)=>{
            state.open = action.payload
        },
        setAuthUser: (state, action) => {
            state.user = action.payload;
        },
        setEmails: (state, action) => {
            state.emails = action.payload;
        },
        setSentEmails: (state, action) => {
            state.sentEmails = action.payload;
        },
        setSelectedEmail: (state, action) => {
            state.selectedEmail = action.payload;
        },
        setSearchText:(state,action) => {
            state.searchText = action.payload;
        },
        setNavItem: (state, action) => {
            state.selectedNavItem = action.payload;
        },
        resetState: (state) => {
            state = {
                open: false,
                user: null,
                emails: [],
                sentEmails: [],
                selectedEmail: null,
                searchText: "",
                selectedNavItem: "Inbox"
            };
            return state;
        }
    }
});
export const { setOpen, setAuthUser, setEmails, setSelectedEmail, setSearchText, setNavItem, setSentEmails, resetState } = appSlice.actions;
export default appSlice.reducer;