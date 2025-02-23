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

function booksAfter1992(books) {
    if (!books || !Array.isArray(books)) {
        return[];
    }
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].publication_year > 1992) {
            count++
        }
    }
    return count;
}

function booksBefore2004(books) {
    if (!books || !Array.isArray(books)) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].publication_year < 2004) {
            count++
        }
    }
    return count;
}

async function main() {
    const __dirname = import.meta.dirname;
    const filepath = path.join(__dirname, "..", "example_files", "books.json");
    const books = await loadBooksFromFile(filepath);
    
    if (books) {
        console.log("Books starting with 'The': ", booksFilterThe(books));
        console.log("Amount of books written after 1992: ", booksAfter1992(books));
        console.log("Amount of books written before 2004: ", booksBefore2004(books));
    }
}

main();

