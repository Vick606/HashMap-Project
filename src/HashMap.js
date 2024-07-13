export class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
      this.buckets = new Array(initialCapacity).fill(null).map(() => []);
      this.size = 0;
      this.loadFactor = loadFactor;
      this.capacity = initialCapacity;
    }
  
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
      }
      return hashCode;
    }
  
    set(key, value) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      const existingPair = bucket.find(pair => pair[0] === key);
  
      if (existingPair) {
        existingPair[1] = value;
      } else {
        bucket.push([key, value]);
        this.size++;
  
        if (this.size / this.capacity > this.loadFactor) {
          this.grow();
        }
      }
    }
  
    get(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      const existingPair = bucket.find(pair => pair[0] === key);
      return existingPair ? existingPair[1] : null;
    }
  
    has(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      return bucket.some(pair => pair[0] === key);
    }
  
    grow() {
      const newCapacity = this.capacity * 2;
      const newBuckets = new Array(newCapacity).fill(null).map(() => []);
  
      for (const bucket of this.buckets) {
        for (const [key, value] of bucket) {
          const newIndex = this.hash(key) % newCapacity;
          newBuckets[newIndex].push([key, value]);
        }
      }
  
      this.buckets = newBuckets;
      this.capacity = newCapacity;
    }
        remove(key) {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          const pairIndex = bucket.findIndex(pair => pair[0] === key);
      
          if (pairIndex !== -1) {
            bucket.splice(pairIndex, 1);
            this.size--;
            return true;
          }
          return false;
        }
      
        length() {
          return this.size;
        }
      
        clear() {
          this.buckets = new Array(this.capacity).fill(null).map(() => []);
          this.size = 0;
        }
      
        keys() {
          return this.buckets.flatMap(bucket => bucket.map(pair => pair[0]));
        }
      
        values() {
          return this.buckets.flatMap(bucket => bucket.map(pair => pair[1]));
        }
      
        entries() {
          return this.buckets.flatMap(bucket => bucket);
        }
      }