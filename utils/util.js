export const fetcher = (...args) => fetch(...args).then(res => res.json())
export const fetcherPost = async ({
                                      url,
                                      payload = undefined
                                  }) => {
    const options = {
        method: payload ? "POST" : "GET",
        ...(payload && {body: payload}),
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
        },
    };

    return fetch(url, options).then(r => r.json());
};


export function formatFloat(f) {
    let s = f.toFixed(2)
    if (s.endsWith('.00')) {
        return s.substr(0, s.length-3)
    } else if (s.endsWith('0')) {
        return s.substr(0, s.length-1)
    } else {
        return s
    }
}

export function isNullString(str) {
    if (str === undefined || str === null || str === '') {
        return true
    }
    return false
}


export function shorterString(str) {
    if (str.length > 32) {
        return str.substr(0, 8) + '...' + str.substr(str.length-8, str.length-1)
    }
    return str
}

export function emptyArrayOfLength(len) {
    var x = [];
    for (var i = 0; i < len; i++) x[i] = 0;
    return x
}