import axios from "axios";
const STUDENT_URL = "http://localhost:8080/api/v1/student/1";



export default function fetchStudents() {
    return axios.get(STUDENT_URL);
}

