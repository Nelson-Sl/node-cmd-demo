const { program } = require('commander');
const { decode, encode } = require("./base64");

program.option('-d, --decode');

program.parse();

const options = program.opts();
const input = program.args[0];

console.log(options.decode ? decode(input) : encode(input));
