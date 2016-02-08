var app = angular.module('ModuloPpal',["LocalStorageModule"]);

app.controller('Ctroller',function($scope, localStorageService){
    
    if(localStorageService.get('listaParaHacer')){
    $scope.listaToDo = localStorageService.get('listaParaHacer');
    }
    else{
    $scope.listaToDo = [];
    }
    
    /* Primer parametro funcion que retorna el objeto que 
        vamos a estar "observando".
        Como segundo la accion que recibe dos parametros:
        el viejo valor y el nuevo valor
    */
    
    $scope.$watch(function(){
        $scope.nuevaActividad
    },function(oldVal,newVal){
        console.log(oldVal,newVal);
    });
    
    /*
        el $watchCollection recibe el array que observa
        y la funcion de antes (oldval,newval)
    */
    
    $scope.$watchCollection('listaToDo',function(oldVal,newVal){localStorageService.set('listaParaHacer',$scope.listaToDo); 
    });
    
    $scope.AgregarActividad = function(){
        $scope.listaToDo.push($scope.nuevaActividad);
        $scope.nuevaActividad = {};
        
    }
        
    $scope.LimpiarActividades = function(){
        $scope.listaToDo = [];
    }
    
});