import fs from "fs";


function flatten(arr) {
    const flattened = [];

    for (const item of arr) {
        if (Array.isArray(item))
            flattened.push(...flatten(item));
        else
            flattened.push(item);
    }
    return flattened;
}

function loadArrayFromFile(filepath) {
    try {
        const data = fs.readFileSync(filepath, 'utf8');
        return JSON.parse(data);
    }catch (err) {
        console.error('Error loading JSON file:', err);
        return null;
    }
}

function main() {
    const filepath = "./example_files/arrays.json";
    const nestedArrays = loadArrayFromFile(filepath);

    if (nestedArrays === null) {
        return;
    }
}