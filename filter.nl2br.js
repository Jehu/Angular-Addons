angular.filter('nl2br', function(string,is_xhtml) { 
    var is_xhtml = is_xhtml || true;
    var breakTag = (is_xhtml) ? '<br />' : '<br>';    
    var text = (string + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
    return angular.filter.html(text);
});
