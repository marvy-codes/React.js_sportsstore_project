// Consolidating the code that is responsible for sending HTTP requests to the web service
// and processing the results, allowing me to keep it contained in one place in that project.

import Axios from "axios";
import { RestUrls } from "./Urls";

export class RestDataSource {

    constructor(err_handler) {
        this.error_handler = err_handler || (() => {});
    }
    GetData = (dataType, params) => 
        this.SendRequest("get", RestUrls[dataType], params); // result is a promise that is resolved when the response is recieved from the web service

    storeData = (dataType, data) => 
        this.SendRequest("post", RestUrls[dataType], {}, data);
    
    SendRequest = (method, url, params, data) => Axios.request({
        method, url, params, data
    });
}
// The result from the GetData method is a promise that is resolved when the response is received from the web service
// HTTP requests sent by JavaSCript are performed asynchronously
