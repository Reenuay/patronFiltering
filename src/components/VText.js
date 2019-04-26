const availableColors = [
    "white",
    "black",
    "light",
    "dark",
    "primary",
    "info",
    "link",
    "success",
    "warning",
    "danger",
    "black-bis",
    "black-ter",
    "grey-darker",
    "grey-dark",
    "grey",
    "grey-light",
    "grey-lighter",
    "white-ter",
    "white-bis",
];

export default {
    props: {
        color: {
            type: String,
            default: "black",
            validator(value) {
                return availableColors.includes(value);
            },
        },
    },
    computed: {
        computedColor() {
            return "has-text-" + this.color;
        }
    },
    template: `
        <span :class="computedColor">
            <slot></slot>
        </span>
    `,
};
