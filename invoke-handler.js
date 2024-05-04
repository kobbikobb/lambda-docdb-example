const {handler} = require('./index');

handler().then(result => {
    console.log(result);
    process.exit();
});
