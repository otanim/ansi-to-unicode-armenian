//initialize
const ansiSymbolMap = [];
const unicodeSymbolMap = [];

for (let i = 178; i <= 252; i += 2) {
    //uppercase
    ansiSymbolMap.push(i);
    unicodeSymbolMap.push(1328 + (i - 176) / 2);

    //lowercase
    ansiSymbolMap.push(i + 1);
    unicodeSymbolMap.push(1376 + (i - 176) / 2);
}

const customsMap = [{
    //և
    ansi: 168,
    unicode: 0x587,
}, {
    //•
    ansi: 183,
    unicode: 8226,
}, {
    //գ
    ansi: 8226,
    unicode: 1379,
}, {
    //՚
    ansi: 39,
    unicode: 0x55A,
}, {
    //՛
    ansi: 176,
    unicode: 0x55B
}, {
    //՜
    ansi: 175,
    unicode: 0x55C
}, {
    //՝
    ansi: 170,
    unicode: 0x55D
}, {
    //՞
    ansi: 177,
    unicode: 0x55E
}, {
    //։
    ansi: 163,
    unicode: 0x589
}, {
    //֊
    ansi: 173,
    unicode: 0x58A
}, {
    //«
    ansi: 167,
    unicode: 0xAB
}, {
    //»
    ansi: 166,
    unicode: 0xBB
}, {
    //,
    ansi: 171,
    unicode: 0x2C
}, {
    //.
    ansi: 169,
    unicode: 0x2E
}, {
    //…
    ansi: 174,
    unicode: 0x2026
}];
for (let custom of customsMap) {
    ansiSymbolMap.push(custom.ansi);
    unicodeSymbolMap.push(custom.unicode);
}

const converter = (input, isAnsiToUnicode) => {
    let arrFrom = isAnsiToUnicode ? ansiSymbolMap : unicodeSymbolMap;
    let arrTo = isAnsiToUnicode ? unicodeSymbolMap : ansiSymbolMap;

    let output = '';

    for (let i = 0; i < input.length; i++) {
        const symbol = input.charCodeAt(i);

        let isInFrom = false;

        for (let j = 0; j < arrFrom.length; j++) {
            if (symbol === arrFrom[j]) {
                if (arrTo[j] === '') {
                    isInFrom = true;
                    break;
                }

                output += String.fromCharCode(arrTo[j]);
                isInFrom = true;
                break;
            }
        }

        if (!isInFrom) {
            output += String.fromCharCode(symbol);
        }
    }

    return output;
};

const ansiToUnicode = (text) => {
    return converter(text, true);
};

const unicodeToAnsi = (text) => {
    return converter(text, false);
};

exports.toUnicode = ansiToUnicode;
exports.toAnsi = unicodeToAnsi;
