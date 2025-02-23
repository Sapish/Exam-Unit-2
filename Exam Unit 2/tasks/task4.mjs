import fs from "fs";
import path from "path";

function loadBooksFromFile(filepath) {
    try {
        const data = fs.readFileSync(filepath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error loading JSON file:', err);
        return null;
    }
}

function booksFilterThe(books) {
    if (!books || !Array.isArray(books)) {
        return [];
    }

    return books.filter(book => {
        const title = book.title;
        if (title && title.length >= 3) {
            const firstThree = title.substring(0, 3).toLowerCase();
            return firstThree === "the";
        }
        return false;
    });
}

async function main() {
    const __dirname = import.meta.dirname;
    const filepath = path.join(__dirname, "..", "example_files", "books.json");
    const books = await loadBooksFromFile(filepath);
    
    if (books) {
        const theBooks = booksFilterThe(books);
        console.log("Books starting with 'The': ", theBooks);
    }
}

main();

