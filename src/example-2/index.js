const { program } = require('commander');
const { decode, encode } = require("./base64");
const { encrypt } = require('./md5');
program
  .command('base64')
  .option('-d, --decode')
  .argument('<value>', 'string to decode/encode')
  .action((value, options) => {
    console.log(options.decode ? decode(value) : encode(value))
  })
// action 的参数顺序， 【arg0,arg1,,,option:{}】, option args


program.command('md5')
  .argument('<val>', 'string to encrypt').action((value) => {
    console.log(encrypt(value))
  });

program.parse();