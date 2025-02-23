import fs from "fs";
import path from "path";
import { json } from "stream/consumers";

function loadBooksFromFile(filepath) {
    try {
        const data = fs.readFileSync(filepath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error loading JSON file:', err);
        return null;
    }
}

async function main() {
    const __dirname = import.meta.dirname;
    const filepath = path.join(__dirname, "..", "example_files", "nodes.json");
    const root = await loadBooksFromFile(filepath);
    if (root) {
        console.log(root);
    }
}

main();