function reverseString(string) {
    
    let ispalindrome;
    let splitString = string.split('');

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join('');

    if (string === joinArray) {
        ispalindrome = true;
    } else {
        ispalindrome = false;
    }

    console.log(ispalindrome);
}

reverseString(string);
string = 'bird';