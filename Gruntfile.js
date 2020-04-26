module.exports = (grunt) => {
  grunt.initConfig({
    browserify: grunt.file.readJSON("config/browserify.json"),
    uglify: grunt.file.readJSON("config/uglify.json"),
  });
  grunt.config.package =  grunt.file.readJSON("package.json");

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask("es5",
                     "Create a minified, ES5-compatible version of src/browser.js that's suitable"+
                     " for use in the browser.",
                     ["browserify", "uglify"]);
  grunt.registerTask("default", ["es5"]);
};
