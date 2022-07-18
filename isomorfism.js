
const isomorfism = (str1, str2) => {

    const createStringMap = (str => {
        let map = {};
        let index = 1
        str.split("").forEach( c => {
            if(!map[c]){
                map[c] = index;
                index += 1;
            }
        })
        return map;
    })

    const convertString = (str, map) => {
        return str.split("").map(c => {
            return map[c]
        })
    }

    const map1 = createStringMap(str1);
    const map2 = createStringMap(str2)


    convertedStr1 = convertString(str1,map1)
    convertedStr2 = convertString(str2,map2)


    return JSON.stringify(convertedStr1) === JSON.stringify(convertedStr2)


}
