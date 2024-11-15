/* 
    Data is generated from google/libphonenumber library. The data is fetched from the following URL:
    https://raw.githubusercontent.com/google/libphonenumber/refs/heads/master/resources/timezones/map_data.txt
*/
import fs from "node:fs/promises";
import path from "node:path";

const libphonenumberDataUrl = "https://raw.githubusercontent.com/google/libphonenumber/refs/heads/master/resources/timezones/map_data.txt";
const response = await fetch(libphonenumberDataUrl);
const data = await response.text();
const lines = data.split("\n");

const fileHandle = await fs.open(path.join(import.meta.dirname, "..", "src/data/phone-to-time-zone.ts"), 'w');
await fileHandle.writeFile(`import { PhoneToTimezoneTrie } from "../utils/timezone-trie.js";\n\n`);
await fileHandle.writeFile(`export const phoneToTimezoneTrie = new PhoneToTimezoneTrie();\n\n`);

for (const line of lines) {
    if (!line || line.startsWith("#")) {
        continue;
    }
    const [phone, timezonesString] = line.split("|");
    const timezones = timezonesString.split("&");
    await fileHandle.writeFile(`phoneToTimezoneTrie.insert("${phone}", ${JSON.stringify(timezones)});\n`);
}

await fileHandle.close();