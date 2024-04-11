document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var textbox = document.querySelector('input[name="textbox"]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.karmahunt.net/buggie', true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var spanAnswer = document.querySelector('#answer');
                spanAnswer.textContent = "unlocked";
                setTimeout(function() {
                    var spanAnswer = document.querySelector('#answer');
                    spanAnswer.textContent = "locked";
                }, 3000);
            } else {
                var spanAnswer = document.querySelector('#answer');
                spanAnswer.textContent = 'Something went wrong.';
            }
        };
        xhr.send();
    });
});
