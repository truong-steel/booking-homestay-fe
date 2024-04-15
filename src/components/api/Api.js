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

export const getHearder2 = () => {
    const token = localStorage.getItem("token")
    return {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
    }
}
// export async function deleteUser(userId){
//     try {
//         const response = await api.delete(`/user/delete/${userId}`,{
//             headers: getHearder()
//         })
//         return response.data
//     } catch (error) {
//         return error.message
//     }
// }

// Room API

export async function addNewRoom ( image , roomType , roomPrice ) {
    // const homestayId = req.params.homestayId
    const formData = new FormData()
    formData.append('image' , image)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const res = await api.post("/rooms/add/new-room", formData, {
        headers: getHearder2()
    } )
    if (res.status === 201 || res.status === 200) {
        return true
    } else {
        return false
    }
}

export async function getRoomType() {
    try {
        const res = await api.get("/rooms/room/types")
        return res.data
    } catch (error) {
        throw new Error("Error Fetching Room Types")
    }
}

export async function getAllRooms() {
    try {
        const res = await api.get("/rooms/all-rooms")
        return res.data
    } catch (error) {
        throw new Error("Error fetching rooms")
    }
}

export async function deleteRoom(roomId) {
    try {
        const result = await api.delete(`/rooms/delete/room/${roomId}` , {
            headers: getHearder2()
        })
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

    const res = await api.put(`/rooms/update/${roomId}`, formData , {
        headers: getHearder2()
    })
    return res
}

// Get Room by ID

export async function getRoomById(roomId) {
    try {
        const result = await api.get(`/rooms/room/${roomId}`)
        return result.data
    } catch (error) {
        throw new Error(`Error fetching room ${error.message}`)
    }
}

// Homestay API

export async function getAllHomestays() {
    try {
        const res = await api.get("/homestays/all")
        return res.data
    } catch (error) {
        throw new Error("Error fetching homestays")
    }
}

export async function addNewHomestay ( homestayName , homestayAddress , ownerEmail ) {
    
    const formData = new FormData()
    formData.append('homestayName' , homestayName)
    formData.append("homestayAddress", homestayAddress)
    formData.append("ownerEmail", ownerEmail)

    const res = await api.post("/rooms/add/new-homestay", formData)
    if (res.status === 201 || res.status === 200) {
        return true
    } else {
        return false
    }
}

export async function updateHomestay(homestayId, homestayData) {
    const formData = new FormData()
    formData.append("homestayAddress", homestayData.homestayAddress)
    formData.append("homestayName", homestayData.homestayName)
    formData.append("image", homestayData.image)

    const res = await api.put(`/homestays/update/${homestayId}`, formData)
    return res
}

export async function deleteHomestay(homestayId) {
    try {
        const result = await api.delete(`/homestays/delete/homestay/${homestayId}`)
        return result.data
    } catch (error) {
        throw new Error(`Error deleting homestay ${error.message}`)
    }
}

export async function getAllHomestayAddress() {
    try {
        const res = await api.get("/homestays/all-address")
        return res.data
    } catch (error) {
        throw new Error("Error fetching homestays")
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
        const response = await api.post('/auth/register-customer', dataReq)
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

export async function adminSignUp(dataReq) {
    try {
        const response = await api.post('/auth/register-admin', dataReq)
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

// Booking Room

export async function bookRoom(roomId, booking) {
    try {
        const response = await api.post(`/bookings/room/${roomId}/booking`, booking)
        return response.data
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data)
        } else {
            throw new Error(`Error booking room ${error.message}`)
        }
    }
}

export async function getAllBookings() {
    try {
        const result = await api.get("/bookings/all-bookings")
        return result.data
    } catch (error) {
        throw new Error(`Error fetching bookings ${error.message}`)
    }
}

export async function getBookingConfirmCode(confirmmationCode) {
    try {
        const response = await api.get(`/bookings/confirmation/${confirmmationCode}`)
        return response.data
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data)
        } else {
            throw new Error(`Error find booking ${error.message}`)
        }
    }
}

export async function cancelBooking(bookingId) {
    try {
        const result = await api.delete(`/bookings/${bookingId}/delete`)
        return result.data
    } catch (error) {
        throw new Error(`Error canceling booking ${error.message}`)
    }
}

export async function getAvailableRooms(checkIn, checkOut, roomType) {
    const result = await api.get(`/rooms/available-rooms?checkIn=${checkIn}&checkOut=${checkOut}&roomType=${roomType}`)
    return result
}

