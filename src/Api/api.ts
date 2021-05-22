import axios from "axios";


 const instance = axios.create({
     withCredentials: true,
     baseURL: `https://social-network.samuraijs.com/api/1.0/`,
     headers: {
         'API-KEY': '7cacc9fb-3bc3-450f-820c-e03a8609251e'}
})

export const userApi = {
    getUsers (pageSize=3, actionPage=10){
        return  instance.get(`users?count=${pageSize}&page=${actionPage}`)
            .then(response => {return response.data})
    },
    unFollow (id){
        return  instance.delete(`follow/${id}`)
            .then(response => {return response.data})
    },
    follow (id){
        return  instance.post(`follow/${id}`, {})
            .then(response => {return response.data})
    },
    getOneUser (param){
        return  instance.get(`profile/${param}`)
            .then(response => {return response.data})
    }

}
export const headerApi = {
    getAuthor (){
        return  instance.get(`auth/me`)
            .then(response => {return response.data})
    }
}







