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

    // quebra o script em pacotes
    let j = 0;
    while(!line.includes(";")) {
      j++;
      line = lines[index + j];
      // console.log(line);

      if (j >= 1000) {
        console.log("\t\t\t\t\t\tLOCO");
        index = index + j;
        j = 0;
      }
    }

    console.log("terminou")

  });