requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'http://code.jquery.com/jquery-2.2.3.min',
        'tmpl': 'tmpl'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'tmpl' : {
            exports: 'tmpl'
        }
    }
});

require(
    [
        'model',
        'view',
        'controller',
        'jquery',
        'tmpl'
    ],
    function () {
    }
);