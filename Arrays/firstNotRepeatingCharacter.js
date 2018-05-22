function firstNotRepeatingCharacter(s) {
    console.log('a'.charCodeAt(0));
    let count = [];
    for (let i = 0; i < s.length; i++) {
        let countIndex = s[i].charCodeAt(0) - 97;
        if(count[countIndex] === undefined) {
            count[countIndex] = new charCountIndex(s[i], i);
        } else {
            count[countIndex].count++;
        }
    }
    
    let lowestIndex = -1;
    
    for(let i = 0; i < count.length; i++) {
        if(count[i] !== undefined) {
            if (count[i].count === 1) {
                if(lowestIndex === -1 || count[i].index < lowestIndex) {
                    lowestIndex = count[i].index;
                }     
            }
        }
    }
    
    // console.log(count);
    
    if (lowestIndex === -1) {
        return '_';
    } else {
        return s[lowestIndex];
    }
    
}

function charCountIndex (char, index) {
    this.char = char;
    this.count = 1;
    this.index = index;
}