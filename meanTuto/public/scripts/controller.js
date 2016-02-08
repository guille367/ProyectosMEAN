function controladorPersonas($scope)
{
    /*var p1 = {
            nombre: 'pepe',
            documento: '39956868',
            mail: 'pepe@sublime.com',
            telefono: '5400-4409'
        }
    var p2 = {
            nombre: 'sargento',
            documento: '29940513',
            mail: 'sgt@pennyLane.com',
            telefono: '3005-1233'
        }
    var personas = [p1,p2];
	$scope.personas = personas;
      */ 
}


function getPersonasServer($scope,$http){
    $http.get('/callServiu').success(function(res){
    $scope.personas = res; 
    }); 
    
}