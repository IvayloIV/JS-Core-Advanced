function validateRequest(obj) {
    let methodPattern = /^(GET|POST|DELETE|CONNECT)$/;
    let urlPattern = /^(\*|[A-Za-z0-9.]+)$/;
    let versionPattern = /^HTTP\/(0.9|1.0|1.1|2.0)$/;
    let messagePattern = /^[^<>\\&'"]*$/;

    if (obj['method'] === undefined || !methodPattern.test(obj['method'])) {
        throw new Error(`Invalid request header: Invalid Method`);
    }
    if (obj['uri'] === undefined || !urlPattern.test(obj['uri'])) {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (obj['version'] === undefined || !versionPattern.test(obj['version'])) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (obj['message'] === undefined || !messagePattern.test(obj['message'])) {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    return obj;
}

validateRequest({
    method: 'GET ',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
