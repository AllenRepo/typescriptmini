var Mini;
(function (Mini) {
    angular.module('mini', [
        'mini.menu'
    ]);
})(Mini || (Mini = {}));
var Mini;
(function (Mini) {
    angular.module('mini.menu', []);
})(Mini || (Mini = {}));
var Mini;
(function (Mini) {
    'use strict';
    angular.module('mini.menu')
        .service('miniMenuResrc', MiniMenuResrc);
    var MiniMenuResrc = (function () {
        function MiniMenuResrc() {
            this.data = [
                {
                    id: 1,
                    name: 'Chocolate-Mint Bars',
                    price: 5.99
                },
                {
                    id: 2,
                    name: 'Lemon-Scented Blueberry Cupcakes',
                    price: 3.99
                },
                {
                    id: 3,
                    name: 'Bourbon-Pecan Tart with Chocolate Drizzle',
                    price: 1.99
                },
                {
                    id: 4,
                    name: 'Raspberry-Rhubarb Pie',
                    price: 10.99
                },
                {
                    id: 5,
                    name: 'Classic Fudge-Walnut Brownies',
                    price: 9.99
                },
                {
                    id: 6,
                    name: 'Nathan’s Lemon Cake',
                    price: 20.99
                },
                {
                    id: 7,
                    name: 'Blueberry-Peach Cobbler',
                    price: 15.99
                },
                {
                    id: 8,
                    name: 'Roasted Banana Bars with Browned Butter–Pecan Frosting',
                    price: 2.99
                },
                {
                    id: 9,
                    name: 'Strawberry-Almond Cream Tart',
                    price: 3.99
                },
                {
                    id: 10,
                    name: 'Hello Dolly Bars',
                    price: 3.99
                }
            ];
        }
        MiniMenuResrc.prototype.get = function () {
            return this.data;
        };
        MiniMenuResrc.prototype.add = function (id, name, price) {
            this.data.push({
                id: id,
                name: name,
                price: price
            });
        };
        return MiniMenuResrc;
    }());
    Mini.MiniMenuResrc = MiniMenuResrc;
})(Mini || (Mini = {}));
// (function(){
//     'use strict';
//     angular.module('mini.menu')
//         .factory('miniMenuSvc', miniMenuSvc);
//     miniMenuSvc.$inject = ['miniMenuResrc'];
//     function miniMenuSvc(miniMenuResrc) {
//         return {
//             create: create
//         };
//         function create(name, price){
//             var id = miniMenuResrc.get().length + 1;
//             miniMenuResrc.add(id, name, price);
//         }
//     }
// })();
var Mini;
(function (Mini) {
    var MiniMenuSvc = (function () {
        function MiniMenuSvc(miniMenuResrc) {
            this.miniMenuResrc = miniMenuResrc;
        }
        MiniMenuSvc.prototype.create = function (name, price) {
            var id = this.miniMenuResrc.get().length + 1;
        };
        MiniMenuSvc.$inject = ['miniMenuResrc'];
        return MiniMenuSvc;
    }());
    Mini.MiniMenuSvc = MiniMenuSvc;
})(Mini || (Mini = {}));
(function () {
    'use strict';
    angular.module('mini.menu')
        .component('miniMenuAdmin', {
        templateUrl: './app/menu2/admin/menu-admin.tpl.html',
        controllerAs: 'vm',
        controller: controller,
        bindings: {
            miniText: '@',
            miniUniDirection: '<',
            miniTwoWayBinding: '=',
            miniFunction: '&'
        }
    });
    controller.$inject = ['miniMenuResrc', 'miniMenuSvc'];
    function controller(miniMenuResrc, miniMenuSvc) {
        var vm = this;
        //handlers
        vm.onSubmit = onSubmit;
        //form bindings
        vm.data = null;
        vm.name = null;
        vm.price = null;
        vm.$onInit = function () {
            vm.data = miniMenuResrc.get();
        };
        function onSubmit(form) {
            if (form.$valid) {
                miniMenuSvc.create(vm.name, vm.price);
            }
        }
    }
})();
//# sourceMappingURL=app.js.map