import Axios from 'axios';
import {API_URL} from '../../constants/api';


export const registerUser = ({fullName, username, email, password}) => {
    return (dispatch) => {
        Axios.post(`${API_URL}/users`,{
            fullName,
            username,
            email,
            password,
        })
        
        .then((result) => {
            delete result.data.password
            
            dispatch({
                type: "USER_LOGIN",
                payload: result.data
            })
            alert("Register Succeed!")
        })
        .catch(() => {
            alert("Failed to register!")
        })
    }
}


export const loginUser = ({username, password}) => {
    return (dispatch) => {
        Axios.get(`${API_URL}/users`, {
            params: {
                username,
                // password,
            }
        })
        .then((result) => {
            if (result.data.length) {
                // delete result.data[0].password
                if (password === result.data[0].password) {
                    dispatch({
                        type: "USER_LOGIN",
                        payload: result.data[0]
                    })
                } else {
                    // handle error wrong password
                    dispatch({
                        type: "USER_ERROR",
                        payload: "wrong password!",
                    })
                }
            }  else {
                // handle error username not found
                dispatch({
                    type: "USER_ERROR",
                    payload: "user not found",
                })
            }
        })
        .catch(() => {
            alert("Something error!")
        })
    }
}

export const logoutUser = () => {
    return {
        type: "USER_LOGOUT"
    }
}