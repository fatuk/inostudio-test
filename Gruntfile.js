module.exports = function (grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //------------------------------------------------------------
        less: {
            options: {
                sourceMap: true,
                sourceMapRootpath: '../',
                strictMath: true
            },
            dev: {
                options: {
                    
                },
                files: {
                    'css/all.css': ['less/all.less'],
                    'css/ie7.css': ['less/ie7.less']
                }
            },
            release: {
                options: {
                    cleancss: true
                },
                files: {
                    'css/all.css': ['less/all.less'],
                    'css/ie7.css': ['less/ie7.less']
                }
            }
        },
        //------------------------------------------------------------
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                    'bower_components/jquery/jquery.min.js', 
                    'bower_components/jquery.customSelect/jquery.customSelect.min.js'
                ],
                dest: 'js/libs.js',
            }
        },
        //------------------------------------------------------------
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '',
                    keepalive: false
                }
            }
        },
        //------------------------------------------------------------
        watch: {
            less: {
                files: 'less/*.less',
                tasks: ['less:dev'],
                options: {
                    interrupt: true
                }
            },
            css: {
                options: {
                    livereload: true
                },
                files: 'css/*.css'
            },
            js: {
                options: {
                    livereload: true
                },
                files: 'js/*.js'
            },
            html: {
                options: {
                    livereload: true
                },
                files: '*.html'
            }
        }
        //------------------------------------------------------------
    });
    
    // Инициализация плагинов, таски которых мы вызываем
    grunt.registerTask('run', ['connect', 'watch']);
};