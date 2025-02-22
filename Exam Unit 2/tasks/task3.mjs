import fs from "fs";

async function loadData() {
    try {
        const data = fs.readFileSync('nodes.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error loading JSON file:', err);
        return null;
    }
}

async function main() {
    const root = await loadData();

    if (!root) {
        process.exit(1);
    }
}