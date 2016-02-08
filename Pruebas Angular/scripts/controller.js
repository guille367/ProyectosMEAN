var modulo = angular.module('AppNG',[]);

modulo.controller('ControllerModuloUno',function($scope){
    
    $scope.addUser = function(){
        $scope.listaUsuarios.push({
            user:$scope.nuevoUser_Usuariov  ,
            contrasena:$scope.nuevoUser_PW
        });
    }
    
    $scope.listaUsuarios = [
        {
            user:'elwis',
            contrasena:'123321'
        },
        {
            user:'guille367',
            contrasena:'asdasd'
        }
    ];
})

modulo.controller('controllerServer',function($scope,$http){
    $http.get('http://jsonplaceholder.typicode.com/posts')
        .success(function(response){
        $scope.listaUsuarios = response;
    })
    .error(function(){
        
    });
    
});