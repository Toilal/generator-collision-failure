'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('*'),
        this.destinationRoot()
      );
    }
  }
});
