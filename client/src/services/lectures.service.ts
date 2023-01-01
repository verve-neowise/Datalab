import axios from "axios";
import { url, wrapResponse } from "../base";
import { Lecture } from "../models";
import BaseService from "./base.service";
import { authHeaders } from "./common";

export default class LecturesService extends BaseService {
    
    static getLectures() {

        return wrapResponse(
            axios.get(url('/lectures'), {
                headers: authHeaders()
            })
        )
    }

    static getLecture(id: number) {
        return wrapResponse(
            axios.get(url('/lectures/' + id), {
                headers: authHeaders()
            })
        )
    }
}

