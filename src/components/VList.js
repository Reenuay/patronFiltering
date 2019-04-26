export default {
    props: {
        list: {
            type: Array,
            default: [],
            validator(value) {
                return Array.isArray(value);
            },
        },
        deletable: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        remove(item) {
            this.list.splice(this.list.indexOf(item), 1);
        }
    },
    template: `
        <div class="list">
            <a class="list-item" v-if="!list.length" key="list">
                No items
            </a>
            <a class="list-item" v-for="item of list" v-else key="list">
                {{item.join(" ")}}
                <a class="delete is-small is-pulled-right" v-if="deletable" @click="remove(item)"></a>
            </a>
        </div>
    `,
};
