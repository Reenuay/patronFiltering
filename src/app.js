import VText from "./components/VText.js";
import VList from "./components/VList.js";
import removePatrons from "./utils/removePatrons.js";

new Vue({
    el: "#app",
    data: {
        list: [
            ["cat"],
            ["cute", "cat"],
            ["angry", "cat"],
            ["dog"],
            ["big", "dog"],
            ["squirrel"],
            ["fox"],
            ["brown", "fox"],
            ["quick", "fox"],
            ["quick", "brown", "fox"],
            ["funny", "cat"],
        ],
        n: 3,
        newWord: "",
    },
    computed: {
        filteredList() {
            return removePatrons(this.list, this.n);
        },
    },
    methods: {
        addNewWord() {
            if (this.newWord.match(/^\s*$/g)) return;

            const elements = this.newWord.split(/\s+/);

            if (Object.keys(elements.reduce((res, i) => {
                    res[i] = 1;
                    return res;
                }, {})).length < elements.length) return;

            if (this.list.some(i => i.join(" ") === this.newWord)) return;

            this.list.push(elements);
            this.newWord = "";
        },
    },
    components: {
        VText,
        VList,
    },
});
