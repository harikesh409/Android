define(['require'], function(require) {
    /**
     * Routing configuration generated by Appery.io
     */

    /**
     * Default route
     * @type {{redirectTo: string}}
     */
    var default_route = {
        redirectTo: '/Screen1.html'
    };

/**
     * Routing configuration object
     * @property {object} default                               - Default routing configuration
     * @property {string} default.redirectTo                    - Default routing URL
     * @property {object} when                                  - Routing configuration for different URLs
     * @property {object} when./                                - Routing configuration for "/" URL
     * @property {string} when./.redirectTo                     - Redirect to default routing URL
     * @property {object} when["/Screen1.html"]    - Routing configuration for /Screen1.html URL
     * @property {string} when["/Screen1.html"].c  - Controller for /Screen1.html URL
     * @property {string} when["/Screen1.html"].t  - Template for /Screen1.html URL
     * @property {string[]} when["/Screen1.html"].d  - Dependencies for /Screen1.html URL
     * @property {object} when["/error.html"]    - Routing configuration for /error.html URL
     * @property {string} when["/error.html"].c  - Controller for /error.html URL
     * @property {string} when["/error.html"].t  - Template for /error.html URL
     * @property {string[]} when["/error.html"].d  - Dependencies for /error.html URL

     * @property {object} otherwise                             - Routing configuration for another URL
     * @property {object} otherwise.redirectTo                  - Redirect to default routing URL
     * @property {object} route_names                           - Route aliases
     * @property {string} route_names.["Screen1"]  - "Screen1" is an alias for "/Screen1.html" routing
     * @property {string} route_names.["error"]  - "error" is an alias for "/error.html" routing

     */
    return {
    default:
        default_route, when: {
            '/': default_route,
            '/Screen1.html': {
                c: '$Screen1/Screen1Controller',
                t: '$Screen1/Screen1Template.html',
                d: []
            },
            '/error.html': {
                c: '$Error/ErrorController',
                t: '$Error/ErrorTemplate.html',
                d: []
            }

        },
        otherwise: default_route,
        route_names: {
            'Screen1': '/Screen1.html',
            'error': '/error.html'

        }
    };
});