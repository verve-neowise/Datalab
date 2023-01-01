import axios from "axios";
import { url, wrapResponse } from "../base";
import { authHeaders } from "./common";

export default class TasksService {
    static getTasks(lectureId: number) {
        return wrapResponse(
            axios.get(url('/tasks?lecture=' + lectureId), {
                headers: authHeaders()
            })
        )
    }
}