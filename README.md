# 🗺️ JavaScript HashMap Implementation

## 🌟 Overview
This project is a robust implementation of a HashMap data structure in JavaScript, created as part of The Odin Project curriculum. It demonstrates fundamental computer science concepts and showcases advanced JavaScript programming techniques.

## 🚀 Features
Our HashMap implementation includes:

- 🔑 Efficient key-value storage and retrieval
- 🔄 Dynamic resizing to maintain optimal performance
- 🧮 Collision handling using separate chaining
- 🔍 O(1) average time complexity for basic operations

## 🛠️ Methods
- `set(key, value)`: Insert or update a key-value pair
- `get(key)`: Retrieve a value by its key
- `has(key)`: Check if a key exists
- `remove(key)`: Delete a key-value pair
- `length()`: Get the number of stored items
- `clear()`: Remove all items
- `keys()`: Get an array of all keys
- `values()`: Get an array of all values
- `entries()`: Get an array of all key-value pairs

## 🧪 Testing
We've included a comprehensive test suite in `testHashMap.js` that verifies:
- Correct insertion and retrieval of key-value pairs
- Proper handling of collisions
- Accurate resizing when load factor is exceeded
- Consistency of all operations before and after resizing

## 🏗️ Project Structure
- `src/HashMap.js`: Core HashMap implementation
- `src/index.js`: Entry point for the application
- `src/testHashMap.js`: Comprehensive test suite
- `webpack.config.js`: Webpack configuration for bundling

## 🚦 Getting Started
1. Clone this repository
2. Run `npm install` to install dependencies
3. Use `npm run build` to build the project
4. Run `node dist/main.js` to execute the tests

## 🧠 Learning Outcomes
Through this project, we've gained practical experience in:
- Implementing complex data structures in JavaScript
- Handling edge cases and optimizing performance
- Using modern JavaScript features and module systems
- Setting up a development environment with Webpack

## 🤝 Contributing
While this project is primarily for learning purposes, suggestions and improvements are welcome! Feel free to fork the project and submit a pull request.

## 📚 Further Reading
To dive deeper into hash maps and other data structures:
- [The Odin Project](https://www.theodinproject.com/)
- [Introduction to Algorithms](https://mitpress.mit.edu/books/introduction-algorithms-third-edition) by Cormen, Leiserson, Rivest, and Stein

Happy coding! 🚀