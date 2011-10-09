/**
 * Angular directrive for jQueryUI Autocomplete (defaul functionality only yet).
 */
angular.directive('my:autocomplete', function(expression, element) {
    return function(element) {
        var currentScope = this;
        var elemName = element.attr('name');
        currentScope.$watch(expression, function(value) {
            var items = this.$eval(expression);
            element.autocomplete({source: items}).blur( function(){
                currentScope[elemName] = element.val();
            });
        });
    };
});
