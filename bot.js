'use strict';

const Wit = require('node-wit').Wit;
const FB = require('./facebook.js');
const Config = require('./const.js');
const request = require('request');

const firstEntityValue = (entities, entity) => {
    const val = entities && entities[entity] &&
        Array.isArray(entities[entity]) &&
        entities[entity].length > 0 &&
        entities[entity][0].value;
    if (!val) {
        return null;
    }
    return typeof val === 'object' ? val.value : val;
};

// Bot actions
const actions = {
    say(sessionId, context, message, cb) {
        console.log(message);

        // Bot testing mode, run cb() and return
        if (require.main === module) {
            cb();
            return;
        }

        // Our bot has something to say!
        // Let's retrieve the Facebook user whose session belongs to from context
        // TODO: need to get Facebook user name
        const recipientId = context._fbid_;
        console.log("FB ID", recipientId);
        if (recipientId) {
            // Yay, we found our recipient!
            // Let's forward our bot response to her.
            FB.fbMessage(recipientId, message, (err, data) => {
              console.log("MESSAGE", message);
                if (err) {
                    console.log(
                        'Oops! An error occurred while forwarding the response to',
                        recipientId,
                        ':',
                        err
                    );
                }

                // Let's give the wheel back to our bot
                cb();
            });
        } else {
            console.log('Oops! Couldn\'t find user in context:', context);
            // Giving the wheel back to our bot
            cb();
        }
    },
    merge(sessionId, context, entities, message, cb) {
        // Retrieve the location entity and store it into a context field
        const loc = firstEntityValue(entities, 'location');
        if (loc) {
            context.loc = loc; // store it in context
        }

        cb(context);
    },

    error(sessionId, context, error) {
        console.log(error.message);
    },

    // fetch-weather bot executes
    ['fetch-weather'](sessionId, context, cb) {
        // Here should go the api call, e.g.:
        // context.forecast = apiCall(context.loc)
        context.forecast = 'sunny';
        cb(context);
    },

    // Getting google maps stuff. Here?
    // const directionDetails = request.get({
    //     uri: 'https://maps.googleapis.com/maps/api/directions',
    //     method: 'GET',
    //     json: true,
    //     // Is this proper? For https://maps.googleapis.com/maps/api/directions/json?origin=aaa?destination=bbb?key=
    //     qs: {
    //         origin: 'Atlanta',
    //         destination: 'Orlando',
    //         key: 'AIzaSyA_2lY9VZ5_ohmSOkdvaDN2cGryDcecwmU'
    //     },

    // }, (response, err) => {
    //     console.log('response', response, 'error', err);

    // });
};


const getWit = () => {
    return new Wit(Config.WIT_TOKEN, actions);
};

exports.getWit = getWit;

// bot testing mode
// http://stackoverflow.com/questions/6398196
if (require.main === module) {
    console.log("Bot testing mode.");
    const client = getWit();
    client.interactive();
}
