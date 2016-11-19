require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: "",

    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': '/scripts/angular',
        'angular-route': '/scripts/angular-route',
        'ui-route': '/scripts/ui-router',
        'angularAMD': '/scripts/angularAMD',
        'spin': '/scripts/spin',
        'ui-bootstrap': '/scripts/ui-bootstrap-0.10.0',
        'ui-bootstrap-tpls': '/Scripts/ui-bootstrap-tpls-0.13.3.min',
        'moment': '/scripts/moment.min',

    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'ui-route': ['angular'],
        'angular-route': ['angular'],
        'ui-bootstrap': ['angular'],
        'ui-bootstrap-tpls': ['angular', 'ui-bootstrap'],
    },

    // kick start application
    deps: ['./app/app']
});