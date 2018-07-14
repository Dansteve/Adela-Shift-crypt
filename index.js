// this is apl set
let alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function encryt(param){
    let input = param;
    input = input.toLowerCase();
    input = input.split("");
    
    let result = "";
    result = "";
    input.forEach(letter => {
        alph.forEach((checker, index) => {
            if (letter == checker) {
                let position = index - 5;
                if (position <= 0) {
                    position = 26 + position 
                    result +=  alph[position];
                } else {
                    result +=  alph[index - 5];
                }
            }
        });
    });
    result = result.toUpperCase();
    console.log(result);
}


function dencryt(param){
    let input = param;
    input = input.toLowerCase();
    input = input.split("");
    
    let result = "";
    result = "";
    input.forEach(letter => {
        alph.forEach((checker, index) => {
            if (letter == checker) {
                let position = index + 5;
                if (position >= 26) {
                    position = position - 26 
                    result +=  alph[position];
                } else {
                    result +=  alph[index + 5];
                }
            }
        });
    });
    result = result.toUpperCase();
    console.log(result);
}