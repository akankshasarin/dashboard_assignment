module.exports = function(grunt) {
  grunt.initConfig({
    svgstore: {
      options: {
        prefix: "icon-", // This will prefix each ID
        svg: {
          // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
          viewBox: "0 0 100 100",
          xmlns: "http://www.w3.org/2000/svg"
        }
      },
      default: {
        files: {
          "dist/icons.svg": ["./src/svg/*.svg"]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-svgstore");

  // Default task(s).
  grunt.registerTask("default", ["svgstore"]);
};
