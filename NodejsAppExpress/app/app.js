//app.js
'use strict'

const express = require('express');
const cors = require('cors');

console.log('express method.....')


// Lambda does not allow you to configure environment variables, but dotenv is an
// excellent and simple solution, with the added benefit of allowing you to easily
// manage different environment variables per stage, developer, environment, etc.
require('dotenv').config();

const app = express();


// MongoDB has a default timeout of 30s, which is the same timeout as API Gateway.
// Because API Gateway was initiated first, it also times out first. Reduce the
// timeout and kill the process so that the next request attempts to connect.



app.use(cors());

/*
 * GZIP support is currently not available to API Gateway.
 app.use(compress())

 * node-sass is a native binary/library (aka Addon in Node.js) and thus must be
 * compiled in the same environment (operating system) in which it will be run.
 * If you absolutely need to use a native library, you can set up an Amazon EC2 instance
 * running Amazon Linux for packaging your Lambda function.
 * In the case of SASS, I recommend to build your CSS locally instead and
 * deploy all static assets to Amazon S3 for improved performance.
 const publicPath = path.join(__dirname, 'public')
 app.use(sass({ src: publicPath, dest: publicPath, sourceMap: true}))
 app.use(express.static(publicPath, { maxAge: 31557600000 }))

 * Storing local state is unreliable due to automatic scaling. Consider going stateless (using REST),
 * or use an external state store (for MongoDB, you can use the connect-mongo package)
 app.use(session({ secret: process.env.SESSION_SECRET }))
 */



/*
 * aws-serverless-express communicates over a Unix domain socket. While it's not required
 * to remove this line, I recommend doing so as it just sits idle.
 app.listen(3000)
 */

// Export your Express configuration so that it can be consumed by the Lambda handler

//app.listen(3000);

app.get('/', function (req, res) {
  res.send('response from server');
});
app.get('/res1', function (req, res) {
  res.send('response from res1');
});



module.exports = app