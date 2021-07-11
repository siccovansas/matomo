(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/upgrade/static'), require('@angular/platform-browser-dynamic'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@matomo/core-home', ['exports', '@angular/core', '@angular/upgrade/static', '@angular/platform-browser-dynamic', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.matomo = global.matomo || {}, global.matomo['core-home'] = {}), global.ng.core, global.ng.upgrade.static, global.ng.platformBrowserDynamic, global.ng.platformBrowser));
}(this, (function (exports, i0, _static, platformBrowserDynamic, platformBrowser) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var CoreHomeModule = /** @class */ (function () {
        function CoreHomeModule() {
        }
        CoreHomeModule.prototype.ngDoBootstrap = function () {
            // empty
        };
        return CoreHomeModule;
    }());
    CoreHomeModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.0", ngImport: i0__namespace, type: CoreHomeModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CoreHomeModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.0", ngImport: i0__namespace, type: CoreHomeModule, imports: [_static.UpgradeModule,
            platformBrowser.BrowserModule] });
    CoreHomeModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.0", ngImport: i0__namespace, type: CoreHomeModule, imports: [[
                _static.UpgradeModule,
                platformBrowser.BrowserModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.0", ngImport: i0__namespace, type: CoreHomeModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            _static.UpgradeModule,
                            platformBrowser.BrowserModule,
                        ],
                    }]
            }] });
    var ng2BootstrapFn = function (extraProviders) { return platformBrowserDynamic.platformBrowserDynamic(extraProviders).bootstrapModule(CoreHomeModule); };
    var angularModuleName = _static.downgradeModule(ng2BootstrapFn);

    /*
     * Public API Surface of library
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CoreHomeModule = CoreHomeModule;
    exports.angularModuleName = angularModuleName;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=matomo-core-home.umd.js.map