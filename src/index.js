const { program } = require('commander');

// aws s3 cp myDir s3://mybucket/ --recursive --exclude "*.jpg"
program
  .command('cp')
  .description('Copies a local file or S3 object to another location locally or in S3')
  .argument('<res>', 'resource location')
  .argument('<des>', 'destination location')
  .option('-e, --exclude <string>')
  .option('--recursive');

program.parse();

const options = program.opts();
console.log(`AWS CP `, options, program.args);