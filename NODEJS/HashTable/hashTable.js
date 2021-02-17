class HashTable{
    constructor(size=10){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        const PRIME = 31;
        for(let i=0; i< Math.min(100, key.length); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96 // map a -> 1 , b -> 2 
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    // The the Value by the key
    get(key){
        const index = this._hash(key);
        if(this.keyMap[index]){
        for(let i =0; i<this.keyMap[index].length; i++){
            if(this.keyMap[index][i][0] === key){
            return this.keyMap[index][i][1]}
        }
    }
    return undefined;
    }

    //Set the value at the index generated by hashing the key
    set(key, value) {
     const hashedKey = this._hash(key); // generate index for the KeyMap Array
     if(!this.keyMap[hashedKey]){
        this.keyMap[hashedKey] = [];    // Hash Collison : Create a new array if the position is empty
     }
     this.keyMap[hashedKey].push([key, value]);
    }

    // Returns all the unique keys
    keys(){
        let keyArr = [];
        for(let i=0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j =0; j< this.keyMap[i].length ; j++){
                    if(!keyArr.includes(this.keyMap[i][j][0])){
                    keyArr.push(this.keyMap[i][j][0]);}
               }
            }
        }
        return keyArr;
    }

    // Returns all the unique values
    values(){
        let valueArr = [];
        for(let i=0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j =0; j< this.keyMap[i].length ; j++){
                    if(!valueArr.includes(this.keyMap[i][j][1])){
                        valueArr.push(this.keyMap[i][j][1]);}
                }
            }
        }
        return valueArr;
    }

}


// Testing the code 
let hashTable = new HashTable();
hashTable.set('cat', 'Likes');
hashTable.set('zebra', 'Jumps');
console.log(hashTable.get('cat')); //Likes
console.log(hashTable.get('zebra')); //Jumps
console.log(hashTable.keys()); //[ 'zebra', 'cat' ]
console.log(hashTable.values()); //[ 'Jumps', 'Likes' ]