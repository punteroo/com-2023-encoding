/**
 * NOTE: This is a NodeJS script, to use with more server-sided modules to correctly parse this CSV.
 */

const fs = require("fs");
const csv = require("csv-parser");

async function parseCsv() {
  // Use a read stream to read the CSV file
  const data = await new Promise((r) => {
    const data = [];

    fs.createReadStream("public/8b6t_encoding_table.csv")
      .pipe(csv())
      .on("data", (d) => data.push(d))
      .on("end", () => r(data));
  });

  // Map this array into our corresponding object.
  const encodings = data.map((coding) => {
    // Convert the HEX value to a decimal number.
    const { hex, voltage } = coding;

    const dec = parseInt(hex, 16);

    // Read the voltage values to represent each voltage.
    const voltages = [];
    for (let i = 0; i < voltage.length; i++) {
      const encodedBit = voltage[i] == "0" ? 0 : voltage[i] == "+" ? 1 : -1;

      voltages.push(encodedBit);
    }

    return {
      [dec]: voltages,
    };
  });

  // Merge all the objects into one.
  const merged = encodings.reduce((acc, curr) => {
    return { ...acc, ...curr };
  });

  return { encodings: merged };
}

parseCsv().then((d) => console.log(JSON.stringify(d)));
