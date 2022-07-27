const { writeFile, promises } = require('fs');

async function loadMonoCounter() {
    const data = await fs.readFile("./docker_sqlserver/f1.sql", "binary");
    return Buffer.from(data);
}

loadMonoCounter()
  .then(data => {
    const lines = data.toString().split('\n');

    // for (let index = 0; index < lines.length; index++) {
      const line = lines[index];
      const createLine = 'INSERT INTO "races" ("raceId", "year", "round", "circuitId", "gpId") VALUES';
      if (line.includes(createLine)) {
        index++;
        for (let j = 0; j < 1000; j++) {
          const scriptLine = lines[j];
        }
      }
      index = index + 1000;
    // }
  });
console.log("terminou");