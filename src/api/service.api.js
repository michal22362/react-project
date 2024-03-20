import axios from "axios";

export const getServices= ()=>{
    return axios.get(`http://localhost:3000/service/?business_id=8f571327-fd44-4f0f-b0f9-950082e0ced3`);
}

export const createService=(name,cost,description)=>{
    return axios.post(`http://localhost:3000/service`,{
        business_id:"8f571327-fd44-4f0f-b0f9-950082e0ced3",
        name,
        service:{
            cost,
            description
        }
    });
    }



