function firstDuplicate(a) {
    let count = [];
    for (let i = 0; i < a.length; i++) {
        count.push(0);
    }
    
    for (let i = 0; i < a.length; i++) {
        count[a[i]-1]++;
        if (count[a[i]-1] >= 2) {
            return a[i];
        }
    }
    
    return -1;
}
