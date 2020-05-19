const isAnagram = (str1, str2) => {
    const codes = new Array(26).fill(0);
    for(let i=0;i<str1.length;i++){
        codes[str1.charCodeAt(i)-97]++;
    }
    for(let i=0;i<str2.length;i++){
        codes[str2.charCodeAt(i)-97]--;    
    }
    return codes.every(count=>count === 0);
}