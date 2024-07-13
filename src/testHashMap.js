import { HashMap } from './HashMap.js';

// Create a new instance of HashMap with default load factor (0.75)
const test = new HashMap();

// Helper function to print the current state of the HashMap
function printHashMapState(map) {
    console.log(`Size: ${map.length()}, Capacity: ${map.capacity}, Load Factor: ${map.length() / map.capacity}`);
    console.log('Entries:', map.entries());
    console.log('---');
}

// Populate the HashMap
console.log("Populating HashMap:");
[
    ['apple', 'red'], ['banana', 'yellow'], ['carrot', 'orange'],
    ['dog', 'brown'], ['elephant', 'gray'], ['frog', 'green'],
    ['grape', 'purple'], ['hat', 'black'], ['ice cream', 'white'],
    ['jacket', 'blue'], ['kite', 'pink'], ['lion', 'golden']
].forEach(([key, value]) => {
    test.set(key, value);
    printHashMapState(test);
});

// Overwrite some existing nodes
console.log("\nOverwriting existing nodes:");
test.set('apple', 'green');
test.set('elephant', 'white');
test.set('lion', 'yellow');
printHashMapState(test);

// Add a new node to trigger growth
console.log("\nAdding a new node to trigger growth:");
test.set('moon', 'silver');
printHashMapState(test);

// Overwrite nodes after growth
console.log("\nOverwriting nodes after growth:");
test.set('banana', 'green');
test.set('hat', 'red');
printHashMapState(test);

// Test other methods
console.log("\nTesting other methods:");
console.log('Get apple:', test.get('apple'));
console.log('Has dog:', test.has('dog'));
console.log('Remove elephant:', test.remove('elephant'));
console.log('Length:', test.length());
console.log('Keys:', test.keys());
console.log('Values:', test.values());

console.log("\nClearing HashMap:");
test.clear();
printHashMapState(test);