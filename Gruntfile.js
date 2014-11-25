'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
<<<<<<< HEAD
=======
    pkg: grunt.file.readJSON('package.json'),
>>>>>>> 45804a0c385940eb81cd0f9cc4e7afe4b5d6f9ed
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
<<<<<<< HEAD
        'assets/js/*.js',
        '!assets/js/plugins/*.js',
        '!assets/js/scripts.min.js'
      ]
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
            'assets/js/plugins/*.js',
            'assets/js/_*.js'
=======
        'js/*.js',
        '!js/main.js'
      ]
    },
    watch: {
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify'],
        options: {
          livereload: true
        }
      },
    },
    uglify: {
      dist: {
        options: {
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
          compress: true,
          beautify: false,
          mangle: false
        },
        files: {
          'js/main.js': [
            'js/plugins/*.js',
            'js/_*.js'
>>>>>>> 45804a0c385940eb81cd0f9cc4e7afe4b5d6f9ed
          ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'images/'
        }]
      }
    },
<<<<<<< HEAD
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.svg',
=======
    imgcompress: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.{png,jpg,jpeg}',
>>>>>>> 45804a0c385940eb81cd0f9cc4e7afe4b5d6f9ed
          dest: 'images/'
        }]
      }
    },
<<<<<<< HEAD
    watch: {
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint','uglify']
      }
    },
    clean: {
      dist: [
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'uglify',
    'imagemin',
    'svgmin'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

=======
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.svg',
          dest: 'images/'
        }]
      }
    },
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-imgcompress');

  // Register tasks
  grunt.registerTask('scripts', ['watch', 'uglify']);
  grunt.registerTask('images', ['newer:imgcompress', 'newer:svgmin']);
>>>>>>> 45804a0c385940eb81cd0f9cc4e7afe4b5d6f9ed
};