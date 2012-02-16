/**
 * Directive for jQuery Dialog
 * creates a dialog for the content of an element
 */
angular.directive('my:dialog', function(expression,element) {
    return function(element) {
        var currentScope = this;
        if(expression) {
            var dir = this;
            element.click(dir,function(e) {
                eval('dir.my_dialog_'+expression);
            });
        }
        else {
            element.fancybox();
        }

        this.my_dialog_show = function(targetElem, options) {
            options.title = element.attr('name');
            $('#'+targetElem).dialog(options);
        }
    };
});
