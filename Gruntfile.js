/*!
 * JEC Project Website Gruntfile.js
 * Copyright(c) 2017 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC projects: <http://jecproject.org>
 */

/*
 * Provides tasks for building and testing the jec-website project.
 */
module.exports = function(grunt) {
  //--> Grunt config initialization:
  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          "dist/website/js/main.js": ["src/website/js/main.js"]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          "dist/index.html": "src/index.html"
        }
      }
    },
    cssmin: {
      dist: {
        files: [{
          src: ["src/website/styles/style.css"],
          dest: "dist/website/styles/style.css"
        }]
      }
    },
    copy: {
      dist: {
        files: [
          {expand: true, cwd: "src", src: ["website/fonts/**"], dest: "dist/"},
          {expand: true, cwd: "src", src: ["website/assets/**"], dest: "dist/"},
          {expand: true, flatten: true, cwd: "src", src: ["website/styles/font-awesome.min.css"], dest: "dist/website/styles/"},
          {expand: true, flatten: true, cwd: "src", src: ["favicon.ico"], dest: "dist/"}
        ],
      },
    },
    clean: {
      dist: ["dist/"]
    }
  });

  /**
   * JEC Project Website Tasks:
   */
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-copy");

  //--> Task: builds the "jec-website" project:
  grunt.registerTask("build", ["clean:dist", "uglify:dist", "htmlmin:dist", "cssmin:dist", "copy:dist"]);
};
