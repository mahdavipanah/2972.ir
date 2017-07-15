# [2972.ir](http://2972.ir/)
2972.ir SMS service Node.js API library

# Usage
Install from [npm](https://www.npmjs.com/package/2972.ir)
```sh
npm install 2972.ir
```
and then
```javascript
var sendSMS = require('2972.ir');

sendSMS ({
    username: "account's username",
    password: "account's password",
    number: "account's number",
    recipient: ["09131234567", "09361234567"] // Or just "09131234567"
    message: "SMS's content",
    port: 10, // If you don't know what you're doing leave it out for it's default 0 value
    flash: false
}, function (err, res) {
    if (err)
        console.log("Error happened in sending SMS.");
    else
        console.log("SMS sent successfully");
});
```

#### If you want to use this package synchronously get help from packages like [deasync](https://www.npmjs.com/package/deasync).  

## What is _flash_ option?  
A flash SMS message is an SMS message that, instead of being stored in the SIM or memory of the receiving phone, pops-up on the receiving phone’s screen, without the user taking any action. When dismissed the message is usually gone.

## What are callback function's parameters
### err
The first parameter (_err_) indicates whether any error happened or not.  
**If _err_ is _0_ then everything is OK** and your request for sending SMS has successfully sent and service API
has sent successful response.  
**If it's lower than zero then it's SMS service's error** and codes are defined in _[2972.ir_API_Manual.pdf](./2972.ir_API_Manual.pdf)_ (PDF document is in Persian language).  
**If it's not number then it's [request](https://www.npmjs.com/package/request) package's error. (See it's documentation for more details)**
### res
The second parameter (__res__) is [request](https://www.npmjs.com/package/request) package's response. (See it's documentation for more details)**

## Why this documentation is in English, why not in Persian?
While the 2972.ir service is an Iranian service and therefore it's website and all of it's documentations
are in English (At the time of writing), I decided to write this README file in english because github does not support Persian language
in markdown READMEs very well and also I think nowadays almost all Iranian developers know (and if not, should know) English.  
*But feel free to translate this README to Persian or _[2972.ir_API_Manual.pdf](./2972.ir_API_Manual.pdf)_ to English or
or to edit this README. You're just a pull request away from this to happen!*
