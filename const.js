'use strict';

// Wit.ai parameters
const WIT_TOKEN = 'DWSEWR32EUMTTQ3LNXNQELNQA4ZL4QS2';

// process.env.WIT_TOKEN;
// if (!WIT_TOKEN) {
//   throw new Error('missing WIT_TOKEN');
// }

// Messenger API parameters
const FB_PAGE_TOKEN = 'EAAQwFrRHYK0BABywxaeFcYUUjG8No6xTtiaFVM8syx4IdUeQ4tGjdUUdHZA3cvcuqjMGUk4srCZAbKKiPqHThRq4gltVLVM0G0zEe4jLbIL77uFDJitoky8S5OFJ4uVncGGbWowmhc1EiZAVsl9A10pm4j0kWgpXQQt2Ff91QZDZD'
// process.env.FB_PAGE_TOKEN;

var FB_VERIFY_TOKEN = 'just_do_it'
// process.env.FB_VERIFY_TOKEN;
// if (!FB_VERIFY_TOKEN) {
//   FB_VERIFY_TOKEN = "just_do_it";
// }

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};

// curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=EAAQwFrRHYK0BABywxaeFcYUUjG8No6xTtiaFVM8syx4IdUeQ4tGjdUUdHZA3cvcuqjMGUk4srCZAbKKiPqHThRq4gltVLVM0G0zEe4jLbIL77uFDJitoky8S5OFJ4uVncGGbWowmhc1EiZAVsl9A10pm4j0kWgpXQQt2Ff91QZDZD"