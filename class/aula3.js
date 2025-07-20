// Performing Checks
    // Validate boolean conditions in the performance test
        // Mainly at points such as: If the system is
        // responding with the expected content.

import http from 'k6/http';

// Note1
    // first: import the k6 module that performs this type of validation
    // https://grafana.com/docs/k6/latest/using-k6/modules/
    // note: when importing the module, you should put the module name
    // in square brackets, as below.
import { check } from 'k6';

export const options = {
    vus: 1,
    duration: '3s'
}

export default function() {

    // Note2
    // second: store the content returned from the request
    // somewhere. Below we put it in a constant.
    const res = http.get('http://test.k6.io');

    // third: use the check module to validate the object.
    check(res, {
        'status code is 200': (r) => r.status === 200
    });
}