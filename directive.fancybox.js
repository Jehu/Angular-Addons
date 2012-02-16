/**
 * Directive for fancybox
 * creates a lighbox for the content of an element
 */
angular.directive('my:fancybox', function(expression,element) {
    return function(element) {
        var $updateView = this.$root.$eval; 
        var currentScope = this;
        if(expression) {
            var dir = this;
            element.click(dir,function(e) {
                $updateView();
                eval('dir.my_fancybox_'+expression);
            });
        }
        else {
            element.fancybox();
        }

        this.my_fancybox_show = function(targetElem) {
            var link = $('<a href="#'+targetElem+'"></a>');
            link.fancybox().click();
        }
    };
});
