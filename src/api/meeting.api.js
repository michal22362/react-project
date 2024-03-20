import axios from "axios";

export const createMeeting = (optionServiice, date, start_time, note, name, phone) => {
    return axios.post(`http://localhost:3000/meeting`, {
        business_id: "123",
        start_time,
        duration: "2",
        meeting: {
            optionServiice,
            date,
            note,
            name,
            phone
        }
    });
}

export const getMeetings = () => {
    return axios.get(`http://localhost:3000/meeting/?business_id=123`);
}

export const deleteMeeting = (id) => {
    return axios.delete(`http://localhost:3000/meeting/${id}`)
}
export const updateMeeting = (id, meeting) => {
    return axios.put(`http://localhost:3000/meeting/${id}`, {
        meeting

    })

}
