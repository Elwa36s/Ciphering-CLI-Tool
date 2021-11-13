module.exports.selectCifer = (key) => {
    switch(key[0]){
        case 'A':
            return 'atbash'
        case 'C':
            return 'cesar'
        case 'R':
            return 'Rot'
        default: 
            return 'Error: Config wasn`t found'
    }
}