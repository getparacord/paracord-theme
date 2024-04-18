const glob = require('glob'); // You might need to install this package
const tailwindConfig = require('../tailwind.config.js'); // Adjust the path as necessary

const files = tailwindConfig.content.flatMap(pattern => glob.sync(pattern));
console.log(files);