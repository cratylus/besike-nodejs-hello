#!/usr/bin/env node
//console.log("haha");
var greet = require("../index.js");
//console.log(typeof greet);
//console.log(process.argv);// first is node,second is node_path;
var argv = require("minimist")(process.argv.slice(2));
//console.log(argv);
var name = argv._[0];
var drunk = argv.drunk;

//console.log(name,drunk);

console.log(greet(name,drunk));

