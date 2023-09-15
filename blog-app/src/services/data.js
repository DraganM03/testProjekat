import {axiosInstance} from "./api"

class DataService{
    getData = async data => await axiosInstance.get("/users",data)
}

export const dataService = new DataService()