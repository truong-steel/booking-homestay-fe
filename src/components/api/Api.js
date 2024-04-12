import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export const getHearder = () => {
    const token = localStorage.getItem("token")
    return {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
}
export async function addNewRoom ( image , roomType , roomPrice ) {
    // const homestayId = req.params.homestayId
    const formData = new FormData()
    formData.append('image' , image)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const res = await api.post("/rooms/addNewRoom", formData)
    if (res.status === 201 || res.status === 200) {
        return true
    } else {
        return false
    }
}

export async function getRoomType() {
    try {
        const res = await api.get("/rooms/roomTypes")
        return res.data
    } catch (error) {
        throw new Error("Error Fetching Room Types")
    }
}

export async function getAllRooms() {
    try {
        const res = await api.get("/rooms/allRooms")
        return res.data
    } catch (error) {
        throw new Error("Error fetching rooms")
    }
}

export async function getAllHomestays() {
    try {
        const res = await api.get("/homestays/all")
        return res.data
    } catch (error) {
        throw new Error("Error fetching homestays")
    }
}

export async function deleteRoom(roomId) {
    try {
        const result = await api.delete(`/rooms/delete/room/${roomId}`)
        return result.data
    } catch (error) {
        throw new Error(`Error deleting room ${error.message}`)
    }
}

export async function updateRoom(roomId, roomData) {
    const formData = new FormData()
    formData.append("roomType", roomData.roomType)
    formData.append("roomPrice", roomData.roomPrice)
    formData.append("image", roomData.image)

    const res = await api.put(`/rooms/update/${roomId}`, formData)
    return res
}

export async function updateHomestay(homestayId, homestayData) {
    const formData = new FormData()
    formData.append("homestayAddress", homestayData.homestayAddress)
    formData.append("homestayName", homestayData.homestayName)
    formData.append("image", homestayData.image)

    const res = await api.put(`/homestays/update/${homestayId}`, formData)
    return res
}

export async function getRoomById(roomId) {
    try {
        const result = await api.get(`/rooms/room/${roomId}`)
        return result.data
    } catch (error) {
        throw new Error(`Error fetching room ${error.message}`)
    }
}

export async function getHomestayById(homestayId) {
    try {
        const result = await api.get(`/homestays/homestay/${homestayId}`)
        return result.data
    } catch (error) {
        throw new Error(`Error fetching homestay ${error.message}`)
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

export async function managerSignUp(dataReq) {
    try {
        const response = await api.post('/auth/register-manager', dataReq)
        return response.data
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data)
        } else {
            throw new Error(`Error ${error.message}`)
        }
    }
}

export async function getUserProfile(userId, token) {
    try {
        const response = await api.get(`/users/profile/${userId}`, {
            headers: getHearder()
        })
        return response.data
    } catch (error) {
        throw error
    }
}

export async function getUser(userId, token) {
    try {
        const response = await api.get(`/users/${userId}`, {
            headers: getHearder()
        })
        return response.data
    } catch (error) {
        throw error
    }
}

export async function deleteUser(userId){
    try {
        const response = await api.delete(`/user/delete/${userId}`,{
            headers: getHearder()
        })
        return response.data
    } catch (error) {
        return error.message
    }
}

export async function getBookingsByUserId(userId, token) {
	try {
		const response = await api.get(`/bookings/user/${userId}/bookings`, {
			headers: getHearder()
		})
		return response.data
	} catch (error) {
		console.error("Error fetching bookings:", error.message)
		throw new Error("Failed to fetch bookings")
	}
}

