document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var textbox = document.querySelector('input[name="textbox"]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.karmahunt.net/index', true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var responseText = xhr.responseText;
                var spanAnswer = document.querySelector('#answer'); // Replace 'span' with the appropriate selector for your HTML
                spanAnswer.textContent = responseText;
                var divAnswer = document.querySelector('#answerShowHide'); // Replace 'span' with the appropriate selector for your HTML
                divAnswer.style.visibility = 'visible';
            }
        };
        xhr.send('{textbox: "' + textbox.value + '"}');
    });
});
