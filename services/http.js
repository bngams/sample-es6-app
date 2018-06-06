import { API_BASE_URL } from "../config.js";

export class Http {
    static fetchData(url) {
        return new Promise((resolve, reject) => {
            const HTTP = new XMLHttpRequest();
            HTTP.open('GET', API_BASE_URL + url);
            HTTP.onreadystatechange = function () {
                if (HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200) {
                    const RESPONSE_DATA = JSON.parse(HTTP.responseText);
                    resolve(RESPONSE_DATA);
                } else if (HTTP.readyState == XMLHttpRequest.DONE) {
                    reject('Something went wrong');
                }
            };
            HTTP.send();
        });
    }
}