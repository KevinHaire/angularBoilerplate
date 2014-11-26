module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower_concat: {
      all: {
        dest: 'js/build/_bower.js',
        bowerOptions: {
          relative: false
        }
      }
    },

    uglify: {
      build: {
        src: ['js/app.js', 'js/controllers/*.js'],
        dest: 'js/build/script.build.js'
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/app.js', 'js/controllers/*.js'],
        dest: 'js/build/script.build.js',
      },
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/compiled/global.css': 'css/scss/global.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/compiled/global.css',
        dest: 'css/prefixed/'
      }
    },

    cssmin: {
      combine: {
        files: {
          'css/minified/global.min.css': ['css/prefixed/global.css']
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*.js', 'js/controllers/*.js'],
        tasks: ['concat'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['css/scss/*.scss', 'css/scss/*/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin'],
        options: {
          spawn: false,
        }
      }

    }


  });

  // Load grunt tasks
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  grunt.registerTask('default', ['bower_concat', 'uglify', 'sass', 'autoprefixer', 'cssmin']);
  grunt.registerTask('dev', ['bower_concat', 'concat', 'sass', 'autoprefixer', 'cssmin', 'watch']);

};