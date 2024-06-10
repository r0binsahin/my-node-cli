const { Command } = require('commander');
const program = new Command();

program
  .command('Hello')
  .description('Greeting you!')
  .option('-n, --name <type>', 'Add your name')
  .action((options) => {
    console.log(`Hello ${options.name}`);
  });

program.parse(process.argv);
