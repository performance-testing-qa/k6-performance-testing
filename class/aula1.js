// K6 LIFECYCLE: well defined, will always go through these phases 
// in the same order

// 1. initialization
    // import of the native sleep module from k6
import sleep from 'k6';

// 2. configuration
    // can have more than one configuration block
export const option = {
    vus: 1,
    duration: '10s'
}

// 3. execution // vu code
export default function(){
    console.log("testing k6");
    sleep(1);
}

// 4. teardown
    // optional test step
    // useful when we want to send results to a webhook, external platform
    // or notify;
    // also responsible for ending the test

export function teardown(data){
    console.log(data);
}