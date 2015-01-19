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
                runInBackground: false

            }

        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'public/style.css': 'src/scss/style.scss',
                    'public/prop/style.css': 'src/prop/scss/style.scss'
                }
            }
        },

        watch: {
            css:{
                files:'src/**/*.scss',
                tasks:['sass']
            }
        }



    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');

    // Default task(s).
    grunt.registerTask('default', ['http-server', 'watch', 'http-server:dev']);
    grunt.registerTask('build', ['sass', 'http-server:dev', ]);

};