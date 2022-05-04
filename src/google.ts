import https from "./https-common";

class google {
    translate(original_text:string, auth_key:string, target_lang:string) {
        const params = {
            q: original_text,
            sourc: 'ja',
            target: target_lang,
        }

        return https.post('?key=' + auth_key,params)
    }
}

export default new google();
