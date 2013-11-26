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
                    'css/all.css': ['less/all.less']
                }
            },
            release: {
                options: {
                    cleancss: true
                },
                files: {
                    'css/all.css': ['less/all.less']
                }
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