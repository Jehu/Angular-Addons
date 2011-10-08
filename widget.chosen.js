/**
 * Widget for a better selectbox experience by using the jQuery Plugin "chosen":
 * see: http://harvesthq.github.com/chosen/
 *
 * Attention: the used i18n filter is a custom filter by Marco Michely
 * see: https://github.com/jehu
 *
 * Sample usage:
 * <select
     name="selectedContactName"
     data-placeholder="Choose an item..."
     my:chosen="availableContacts"></select>
 *
 */
angular.widget('@my:chosen', function(expression,element) {
    function instanceFn(element) { // this is how we can inject services properly... (not needed here)
        var currentScope = this;
        var i18n = angular.filter.i18n;
        currentScope.$watch(expression, function(value) {
            if(value) {
                if(element.attr('data-placeholder'))
                {
                    element.append('<option value="">' + i18n(element.attr('data-placeholder'))+ '</option>');
                }
                angular.forEach(value,function(item, index) {
                    element.append('<option value="' + item + '">' + item  + '</option>')
                });
                element.chosen({no_results_text: i18n("No results matched")}).change(function() {
                    var elemName = element.attr('name');
                    currentScope[elemName] = element.val();
                });
            }
        });
    }
    instanceFn.$inject = [];
    return instanceFn;
});
