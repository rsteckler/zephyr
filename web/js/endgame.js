document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var textbox = document.querySelector('input[name="textbox"]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.karmahunt.net/addLeader', true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                window.location.href = "leaderboard.html";
            } 
        };
        xhr.send('{"textbox": "' + textbox.value + '"}');
    });
});
