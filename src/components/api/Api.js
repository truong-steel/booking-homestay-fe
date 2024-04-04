import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export async function addNewRoom ( image , roomType , roomPrice ) {
    const formData = new FormData()
    formData.append('image' , image)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const res = await api.post("/api/rooms/addNewRoom", formData)
    if (res.status === 201 || res.status === 200) {
        return true
    } else {
        return false
    }
}

export async function getRoomType() {
    try {
        const res = await api.get("/api/rooms/roomTypes")
        return res.data
    } catch (error) {
        throw new Error("Error Fetching Room Types")
    }
}

export async function signIn(login) {
    try {
        const response = await api.post('/auth/login', login)
        if (response.status >= 200 && response.status < 300) {
            return response.data
        } else {
            return null
        }
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function signUp(dataReq) {
    try {
        const response = await api.post('/auth/register-user', dataReq)
        return response.data
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data)
        } else {
            throw new Error(`Error ${error.message}`)
        }
    }
}
