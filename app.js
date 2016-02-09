System.register(['angular2/platform/browser', './app/cf'], function(exports_1) {
    var browser_1, cf_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (cf_1_1) {
                cf_1 = cf_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(cf_1.CfApp);
        }
    }
});
//# sourceMappingURL=../../app.js.map