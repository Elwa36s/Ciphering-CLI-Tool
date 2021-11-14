module.exports.selectCifer = (key) => {
    switch(key[0]){
        case 'A':
            return ciferAtbash;
        case 'C':
            return ciferShift(1, key[1]);
        case 'R':
            return ciferShift(8, key[1]);
        default: 
            return 'Something goes wrong...'
    }
}

function ciferAtbash(string){
    const limits = {
        uppercase: {
            min: 65,
            max: 90,
        },
        lowercase: {
            min: 97,
            max: 122,
        }
    }
    const arrFromString = string.split('');
    const ciferedArr = arrFromString.map((letter) => {
        const letterNum = letter.charCodeAt();
        let currentLimits = {};

        if (letterNum < 65 || (letterNum > 90 && letterNum < 97) || letterNum > 122){
            return letter;
        }

        if (letterNum <= 90 && letterNum >= 65){
            currentLimits = limits.uppercase;
        }

        if (letterNum <= 122 && letterNum >= 97){
            currentLimits = limits.lowercase
        }
        console.log(`letterNum = ${letterNum}`)

        const newLetterNumb = currentLimits.min + (currentLimits.max - letterNum);
        console.log(`newLetterNumb = ${newLetterNumb}`)
        if (newLetterNumb >= currentLimits.min && newLetterNumb <= currentLimits.max) return String.fromCharCode(newLetterNumb);
        if (newLetterNumb > currentLimits.max) return String.fromCharCode(currentLimits.min + (newLetterNumb - currentLimits.max - 1));
        if (newLetterNumb < currentLimits.min) return String.fromCharCode(currentLimits.max - (currentLimits.min - newLetterNumb - 1));
    })
    return ciferedArr.join('');
}

function ciferShift(step, direction){

    const currentStep = step;
    const currentDirection = +direction;

    return function (string){
        const direction = currentDirection;
        const limits = {
            uppercase: {
                min: 65,
                max: 90,
            },
            lowercase: {
                min: 97,
                max: 122,
            }
        }
        const step = currentStep;
        const arrFromString = string.split('');
        const ciferedArr = arrFromString.map((letter) => {
            const letterNum = letter.charCodeAt();
            let currentLimits = {};

            if (letterNum < 65 || (letterNum > 90 && letterNum < 97) || letterNum > 122){
                return letter;
            }

            if (letterNum <= 90 && letterNum >= 65){
                currentLimits = limits.uppercase;
            }

            if (letterNum <= 122 && letterNum >= 97){
                currentLimits = limits.lowercase
            }
            console.log(`letterNum = ${letterNum}`)

            const newLetterNumb = direction === 0 ? letterNum + step : letterNum - step;
            console.log(`newLetterNumb = ${newLetterNumb}`)
            if (newLetterNumb >= currentLimits.min && newLetterNumb <= currentLimits.max) return String.fromCharCode(newLetterNumb);
            if (newLetterNumb > currentLimits.max) return String.fromCharCode(currentLimits.min + (newLetterNumb - currentLimits.max - 1));
            if (newLetterNumb < currentLimits.min) return String.fromCharCode(currentLimits.max - (currentLimits.min - newLetterNumb - 1));
        })
        return ciferedArr.join('');
    }
}