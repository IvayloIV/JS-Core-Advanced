function validateRequest(obj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];

    if(! (obj.method !== undefined && validMethods.includes(obj.method))){
        throw new Error("Invalid request header: Invalid Method");
    }
    if (obj.uri === undefined || !/^[\w.]+$/.test(obj.uri)){
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (obj.version === undefined || !/^HTTP\/(0.9|1.0|1.1|2.0)$/.test(obj.version)){
        throw new Error(`Invalid request header: Invalid Version`);
    }
    let messageRegex = /^[^<>\\&'"]*$/;

    if(! ( obj.hasOwnProperty("message") && (messageRegex.test(obj.message) || obj.message == ""))) {
        throw new Error("Invalid request header: Invalid Message");
    }
    return obj;
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
