const { program } = require('commander');
const { decode, encode } = require("./base64");

program
.name('base64')
.argument('<string>', 'string to decode/encode')
.option('-d, --decode');

program.parse();

const options = program.opts();
const input = program.args[1];
console.log(options.decode ? decode(input) : encode(input));
