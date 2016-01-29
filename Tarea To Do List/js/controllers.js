var controllers =  angular.module('todo.controllers', [])

controllers.controller('todoCtrl', ['$scope', function($scope){
    $scope.todos = [
        {text: '¡Aprender mas sobre AngularJs!', done:false},         
        {text: '¡Hacer mi primer app!', done:false}
    ];

    $scope.totalTodos = function(){
        return $scope.todos.length;
    };

    $scope.addToDo = function(text, done){
        $scope.todos.push({text:$scope.todoFormText, done:false});
        $scope.todoFormText = '';
    };

   $scope.remove = function(){
        var oldList = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldList, function(todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
    };
}]);