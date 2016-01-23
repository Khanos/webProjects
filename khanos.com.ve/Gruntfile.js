module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['Gruntfile.js', 'main/**/*.js']
    },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['css/**/*.css'],
      },
      js: {
        files: ['Gruntfile.js'],
      },
      html: {
        files: ['*.html'],
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: '.',
          hostname: '0.0.0.0',
          protocol: 'http',
          livereload: true,
          open: true,
        }
      }
    },
  });

  // Grunts plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');  

  // Default task(s).
  grunt.registerTask('default', 'Log something', function(){
    grunt.log.writeln('Excelente!');
  });

  grunt.registerTask('server', [
    'connect',
    'watch',
    'jshint'
  ]);

  grunt.registerTask('dist', [
    'connect',
    'watch',
    'jshint'
  ]);

};