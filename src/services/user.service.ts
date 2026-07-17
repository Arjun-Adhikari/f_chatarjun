//If our site needs to call to get users data then each time the users.get() needs to be called
//in each file but through this user.service.ts we will make the resuable function which will be
//always imported and called everytime.

// services/user.service.ts

// import { api } from "@/lib/axios";

// export async function getUsers() {
//     const response = await api.get("/users");
//     return response.data;
// }



//now every page does this
//const users = await getUsers();


//Everythig related to user will be called from here.

// export async function getUsers() {}

// export async function getUser(id: string) {}

// export async function createUser(data) {}

// export async function updateUser(id, data) {}

// export async function deleteUser(id) {}

// export async function uploadProfilePicture() {}

// export async function changePassword() {}

// export async function updateProfile() {}