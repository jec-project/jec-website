/*!
 * JEC Project Website Gruntfile.js
 * Copyright(c) 2017 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC projects: <https://github.com/pechemann/JEC>
 */

/*
 * Provides tasks for building and testing the jec-website project.
 */
module.exports = function(grunt) {
  //--> Grunt config initialization:
  grunt.initConfig({});

  /**
   * JEC Project Website Tasks:
   */
  grunt.loadNpmTasks("grunt-contrib-uglify");

  //--> Task: builds the "jec-website" project:
  grunt.registerTask("build", ["uglify:dist"]);
};
