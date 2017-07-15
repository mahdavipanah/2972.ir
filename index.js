var request = require('request');
var url = require('url');


/**
 * SMS service API host.
 *
 * @type {string}
 */
var HOST = 'http://2972.ir';

/**
 * SMS service API URL.
 * @type {string}
 */
var URL = '/api';


/**
 * @callback sendCallback
 * @param {number|error} err If it's zero then everything is OK. If it's lower than zero then it's SMS service's error and codes are defined in '2972.ir_API_Manual.pdf'. If it's not number then it's request package's error.
 * @param {object} response request package's response object.
 */

/**
 * Send SMS.
 *
 * @param {object} options
 * @param {string} options.username SMS service account username.
 * @param {string} options.password SMS service account password.
 * @param {string|number} options.number SMS service account number
 * @param {string|number|string[]|number[]} options.recipient Recipient(s)'s number.
 * @param {number|string} [options.port=0] SMS service API port number.
 * @param {string} [options.message=''] SMS message's content.
 * @param {boolean} [options.flash=false] Should SMS appear as flash on recipient(s)'s device or not. A flash SMS message is an SMS message that, instead of being stored in the SIM or memory of the receiving phone, pops-up on the receiving phone’s screen, without the user taking any action. When dismissed the message is usually gone.
 * @param {function} [callback]
 */
module.exports = function (options, callback) {
    // Convert these to string
    options.username += '';
    options.password += '';
    options.message += '';
    // Convert to int and then to string
    options.port = parseInt(options.port) || 0;
    options.port += '';
    // Convert to boolean and then to string
    options.flash = Boolean(options.flash).toString();
    // If user wants to send SMS to group of recipients
    if (Array.isArray(options.recipient))
        options.recipient = options.recipient.join(',');

    request.post(
        url.resolve(HOST, URL),
        {
            form: {
                username: options.username,
                password: options.password,
                number: options.number,
                recipient: options.recipient,
                message: options.message,
                port: options.port,
                flash: options.flash
            }
        },
        function (err, httpResponse, body) {
            if (typeof callback === 'function')
                if (err)
                    callback(err, httpResponse);
                else
                    callback(parseInt(body), httpResponse);
        }
    );
};
