import Timer from "./timer";


export default class Animation extends Timer {

    constructor(interval: number, f: (transition?: number) => void) {
        super(interval);
        this.func = f
    }
    next_state() {
        this.func();
    }
    prev_state() {
        this.func(-1);
    }
}