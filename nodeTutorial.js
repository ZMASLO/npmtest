var Tutorial = require('./tutorial.js');
exports.NodeTutorial = function () {
    console.log("Tu cos bedzie ")
    this.wywolywanie = function () {
        var calling = Tutorial
        calling.tutorial();
    }
}