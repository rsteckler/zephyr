
function loadRankings () {
    const request = new XMLHttpRequest();
    request.open("get", "https://api.karmahunt.net/leaders");
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            populateRankings(json.Items);
        } catch (e) {
            console.warn("Could not load Player Rankings! :(");
        }
    };

    request.send();
}

function populateRankings (json) {
    // Populate Leaderboard
    const rankingsBody = document.querySelector("#rankings > tbody");
    var ranking = 1;
    json.forEach((row) => {
        const tr = document.createElement("tr");

        const tdRank = document.createElement("td");
        tdRank.textContent = ranking++;
        tr.appendChild(tdRank);
        const tdNames = document.createElement("td");
        tdNames.textContent = row.name;
        tr.appendChild(tdNames);
        const tdTime = document.createElement("td");
        var timeString = "";
        var timeDelta = row.timeDelta;
        timeDelta /= 1000;

        const days = Math.floor(timeDelta / (60 * 60 * 24));
        timeString += days + "d ";
        timeDelta -=  days * (60 * 60 * 24);

        const hours = Math.floor(timeDelta / (60 * 60));
        timeString += hours + "h ";
        timeDelta -=  hours * (60 * 60);

        const minutes = Math.floor(timeDelta / 60);
        timeString += minutes + "m ";
        timeDelta -=  minutes * 60;

        const seconds = Math.floor(timeDelta);
        timeString += seconds + "s";

        tdTime.textContent = timeString;
        tr.appendChild(tdTime);

        rankingsBody.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", () => { loadRankings (); });

$("#search-leaderboard").keyup(function() {
    var value = this.value;

    $("table").find("tr").each(function(index) {
        if (index === 0) return;

        var if_td_has = false;
        $(this).find('td').each(function () {
            if_td_has = if_td_has || $(this).text().indexOf(value) !== -1; //Check if td's text matches key and then use OR to check it for all td's
        });

        $(this).toggle(if_td_has);

    });
});