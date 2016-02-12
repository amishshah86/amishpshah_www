module.exports = function(grunt) {

    //require dependencies
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        'http-server': {

            'dev': {

                // the server root directory
                root: 'public',

                port: 8888,
                // port: function() { return 8282; }

                host: "127.0.0.1",

                cache: 0,
                showDir : true,
                autoIndex: true,

                // server default file extension
                ext: "html",

                // run in parallel with other tasks
                runInBackground: true

            }

        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'public/style.css': 'src/scss/style.scss',
                    'public/prop/style.css': 'src/prop/scss/style.scss',
                    'public/portfolio/style.css': 'src/portfolio/scss/style.scss'
                }
            }
        },

        browserify: {
            main: {
                src: 'src/portfolio/js/main.js',
                dest: 'public/portfolio/js/main.js'
            }
        },

        watch: {
            configFiles: {
                files: [ 'Gruntfile.js']
            },
            options: {
                'livereload': true
            },
            css:{
                files:[
                    'src/scss/*.scss',
                    'src/prop/scss/*.scss',
                    'src/portfolio/scss/*.scss'
                ],
                tasks:['sass']
            },
            js:{
                files:[
                    'src/portfolio/js/*.js'
                ],
                tasks:['browserify']
            }
        }



    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-browserify');

    // Default task(s).
    grunt.registerTask('default', ['http-server:dev','watch']);
    grunt.registerTask('build', ['sass', 'browserify', 'http-server:dev', 'watch']);

};