
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

    json.forEach((row) => {
        const tr = document.createElement("tr");

        const tdRank = document.createElement("td");
        tdRank.textContent = "1";
        tr.appendChild(tdRank);
        const tdNames = document.createElement("td");
        tdNames.textContent = row.name;
        tr.appendChild(tdNames);
        const tdTime = document.createElement("td");
        tdTime.textContent = row.timeDelta;
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