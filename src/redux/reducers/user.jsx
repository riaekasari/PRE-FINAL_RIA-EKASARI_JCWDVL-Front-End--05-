const init_state= {
    username: "",
    fullName: "",
    email: "",
    role: "",
    id: 0,
    errMsg: "",
}

export default (state = init_state, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return { ...state, ...action.payload}
        case "USER_ERROR":
            return { ...state, errMsg: action.payload}
        case "USER_LOGOUT":
            return init_state;
        default:
            return state;
    }
}