import { HashMap } from './HashMap.js';
import './testHashMap.js';

const map = new HashMap();

map.set('Carlos', 'I am the new value.');
map.set('Carla', 'I am Carla');
map.set('John', 'I am John');

console.log('Initial length:', map.length());

console.log('Removing John:', map.remove('John'));
console.log('Removing non-existent key:', map.remove('NonExistent'));

console.log('Length after removal:', map.length());

console.log('Keys:', map.keys());
console.log('Values:', map.values());
console.log('Entries:', map.entries());

map.clear();
console.log('Length after clear:', map.length());

// Demonstrate non-preserved insertion order
for (let i = 0; i < 10; i++) {
  map.set(`key${i}`, `value${i}`);
}

console.log('Keys after inserting 10 elements:', map.keys());