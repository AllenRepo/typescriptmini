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


module Mini {
    export class MiniMenuSvc {
        static $inject = ['miniMenuResrc'];
        constructor(private miniMenuResrc: IMiniMenuResrc) {
            
        }
        
        create(name: string, price: number){
            let id = this.miniMenuResrc.get().length + 1;
        }
    }
}