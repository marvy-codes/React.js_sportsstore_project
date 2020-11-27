// Consolidating the code that is responsible for sending HTTP requests to the web service
// and processing the results, allowing me to keep it contained in one place in that project.

import Axios from "axios";
import { RestUrls } from "./Urls";

export class RestDataSource {
    GetData = (dataType, params) => 
        this.SendRequest("get", RestUrls[dataType], params); // result is a promise that is resolved when the response is recieved from the web service

    SendRequest = (method, url, params) => Axios.request({
        method, url, params
    });
}

// HTTP requests sent by JavaSCript are performed asynchronously