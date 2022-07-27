const { writeFile } = require('fs');

const fs = require('fs').promises;

async function loadMonoCounter() {
    const data = await fs.readFile("./docker_sqlserver/f1.sql", "binary");
    return Buffer.from(data);
}

loadMonoCounter()
  .then(data => {
    const lines = data.toString().split('\n');

    // acha a linha com INSERT races
    let line = "";
    for (index = 0; index < lines.length; index++) {
      line = lines[index];
      const createLine = 'INSERT INTO "races" ("raceId", "year", "round", "circuitId", "gpId") VALUES';
      if (line.includes(createLine)) break;
    }

    let j = 0;
    while(!lines[index].includes(";") || j <= 1000) {
      j++;
      line = lines[index + j];
      if (line == undefined) break;
      console.log(line);
    }

    console.log("terminou")

  });