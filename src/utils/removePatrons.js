export default function removePatrons(list, n) {
    if (n === 0) return [];

    // Helpers
    function keys(obj) {
        return Object.keys(obj);
    }

    function keysCount(obj) {
        return keys(obj).length;
    }

    function values(obj) {
        return Object.values(obj);
    }

    function violatersCount(word) {
        return values(word)
            .reduce(
                (acc, el) => acc + (keysCount(el) > n),
                0
            );
    }

    // Constants
    const words = {};
    const elements = {};

    list.forEach(word => {
        words[word] = {};

        word.forEach(element => {
            if (!elements[element]) elements[element] = {};

            words[word][element] = elements[element];
            elements[element][word] = words[word];
        });
    });

    // Delete all patrons
    keys(elements).forEach(element => {
        const occurencies = keysCount(elements[element]);
        if (occurencies <= n)
            return;

        keys(elements[element])
            .sort((a, b) => {
                const aWord = words[a];
                const bWord = words[b];

                // Remove with maximum patronage
                let cmp = violatersCount(aWord) - violatersCount(bWord);

                // Remove with max length
                if (cmp === 0) cmp = keysCount(aWord) - keysCount(bWord);

                return cmp;
            })
            .slice(n)
            .forEach(word => {
                values(words[word]).forEach(element => delete element[word]);
                delete words[word];
            });
    });

    return list.filter(word => words[word]);
}
