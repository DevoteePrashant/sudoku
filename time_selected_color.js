            // select color
            // if ((i === 0 && j === 0) || (i === 0 && j === 2) || (i === 2 && j === 0) || (i === 2 && j === 2)|| (i === 1 && j === 0)) {
            //   numDiv.classList.add('selected');
            // }

// restartTime = ["00:23"]
//  // if rest btn to strat restartTime count  00:23
const jsonData = {
    "timeRanges": [
        { "id": 1, "startTime": "00:00", "endTime": "00:30", "restartTime": "00:23" },
        { "id": 2, "startTime": "00:30", "endTime": "01:00" },
        { "id": 3, "startTime": "01:00", "endTime": "01:30" }
    ]
};

console.log(jsonData);
