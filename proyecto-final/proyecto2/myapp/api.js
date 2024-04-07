// // const API  = 'http://10.0.2.2:3000/users';
// const API = 'http://localhost:3000/users';

// export const getUsers = async () => {
//     const rest = await fetch(API);
//     return await rest.json();
// }

// export const saveUser = async (newUser) => {
//     const rest = await fetch(API, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newUser)
//     });
//     return await rest.json();
// }

// export const deleteUser = async (id) => {
//     await fetch(`${API}/${id}`, {
//         method: 'DELETE',
//     })
// }

// ================= PARKINGS =================
// const API  = 'http://10.0.2.2:3000/parkings';
const API = 'http://localhost:3000/parkings';

export const getParkings = async () => {
    const rest = await fetch(API);
    return await rest.json();
}

export const saveParking = async (newParking) => {
    const rest = await fetch(API, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newParking)
    });
    return await rest.json();
}

export const deleteParking = async (id) => {
    await fetch(`${API}/${id}`, {
        method: 'DELETE',
    })
}

export const updateParking = async (id, updatedParking) => {
    await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedParking)
    })
}
