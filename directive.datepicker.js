/**
 * Directive for datepicker from jQueryUI
 * creates a date object for scope too due "Obj"
 * as suffix to element name: elementNameObj
 *
 * Attention: the used i18n filter is a custom filter by Jehu (Marco Michely) 
 * see: https://github.com/Jehu/Angular-Addons/blob/master/filter.i18n.js
 */
angular.directive('my:datepicker', function(expression,element) {
    var i18n = angular.filter.i18n;
    return function(element) {
        var currentScope = this;
        currentScope.$watch(expression, function(value) {
            var elemName = element.attr('name');
            var dateObj = jQuery.datepicker.parseDate( angular.filter.i18n('mm/dd/yy'), element.val() );
            // create a new property with date object, can be used in controller, 
            // e.g.jQuery.datepicker.formatDate('yy-mm-dd', dateObj));
            currentScope[elemName + 'Obj'] = dateObj;
            element.datepicker().change(function() {
                // refresh properties after change
                dateObj = jQuery.datepicker.parseDate( angular.filter.i18n('mm/dd/yy'), element.val() );
                currentScope[elemName] = element.val();
                currentScope[elemName + 'Obj'] = dateObj;
            });
        });
    };
});
