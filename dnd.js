const inquirer = require("inquirer");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

clear();
console.log(
  chalk.greenBright(
    figlet.textSync("Solo D&D Tools", { horizontalLayout: "fitted" })
  )
);
