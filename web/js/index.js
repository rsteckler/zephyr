document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var textbox = document.querySelector('input[name="textbox"]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        var value = textbox.value;
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'api.karmahunt.com/index', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Handle successful response
                console.log(xhr.responseText);
            }
        };
        xhr.send('textbox=' + encodeURIComponent(value));
    });
});
