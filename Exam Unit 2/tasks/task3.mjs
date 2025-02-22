import fs from "fs";
import path from "path";

function loadTreeFromFile(filepath) {
    try {
        const data = fs.readFileSync(filepath, 'utf8');
        return JSON.parse(data);
    }catch (err) {
        console.error('Error loading JSON file:', err);
        return null;
    }
}

    function analyzeTree(node, depth = 0, results = { sum: 0, maxDepth: 0, nodeCount: 0}) {
        if (node === null) {
            return results;
        }

        results.sum = results.sum + node.value;
        results.nodeCount = results.nodeCount + 1;

        if (depth > results.maxDepth) {
            results.maxDepth = depth;
        }

        if (node.left !== null) {
            analyzeTree(node.left, depth + 1, results);
        }

        if (node.right !== null) {
            analyzeTree(node.right, depth + 1, results);
        }
        return results;
    }

    function main() {
        const __dirname = import.meta.dirname;
        const filepath = path.join(__dirname, "..", "example_files", "nodes.json")
        const root = loadTreeFromFile(filepath);
    
        if (!root) {
            process.exit(1);
        }

    const treeResults = analyzeTree(root);

    console.log('Sum of all values: ', treeResults.sum);
    console.log('Deepest level: ', treeResults.maxDepth + 1);
    console.log('Number of nodes: ', treeResults.nodeCount);
}

main();