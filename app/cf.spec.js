System.register(['angular2/testing', '../app/cf'], function(exports_1) {
    var testing_1, cf_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (cf_1_1) {
                cf_1 = cf_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [cf_1.CfApp]; });
            testing_1.describe('App: Cf', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([cf_1.CfApp], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([cf_1.CfApp], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=../../../app/cf.spec.js.map