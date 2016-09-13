'use strict';

// What are environ variables?

// Wit.ai parameters
const WIT_TOKEN = 'DWSEWR32EUMTTQ3LNXNQELNQA4ZL4QS2';

// Messenger API parameters
const FB_PAGE_TOKEN = 'EAAQwFrRHYK0BABywxaeFcYUUjG8No6xTtiaFVM8syx4IdUeQ4tGjdUUdHZA3cvcuqjMGUk4srCZAbKKiPqHThRq4gltVLVM0G0zEe4jLbIL77uFDJitoky8S5OFJ4uVncGGbWowmhc1EiZAVsl9A10pm4j0kWgpXQQt2Ff91QZDZD';
var FB_VERIFY_TOKEN = 'just_do_it';

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};

// Steps for local testing:
// WIT_TOKEN=DWSEWR32EUMTTQ3LNXNQELNQA4ZL4QS2 node bot
// WIT_TOKEN=DWSEWR32EUMTTQ3LNXNQELNQA4ZL4QS2 node index
// In new window:
// curl -X POST -H "Content-Type: application/json" -d @__tests__/msg.json http://localhost:8445/webhook


// curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=EAAQwFrRHYK0BABywxaeFcYUUjG8No6xTtiaFVM8syx4IdUeQ4tGjdUUdHZA3cvcuqjMGUk4srCZAbKKiPqHThRq4gltVLVM0G0zEe4jLbIL77uFDJitoky8S5OFJ4uVncGGbWowmhc1EiZAVsl9A10pm4j0kWgpXQQt2Ff91QZDZD