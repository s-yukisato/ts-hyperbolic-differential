import Timer from "./timer";

const timer = new Timer();

export default class Button {
    private start_animation: HTMLButtonElement;
    private stop_animation: HTMLButtonElement;
    private next_state: HTMLButtonElement;
    private prev_state: HTMLButtonElement;

    static next_func: () => void;
    static prev_func: () => void;

    constructor() {
        this.start_animation = document.querySelector("#start");
        this.start_animation.onclick = () => timer.enable();

        this.stop_animation = document.querySelector("#stop");
        this.stop_animation.onclick = () => timer.disable();

        this.next_state = document.querySelector("#next");
        this.next_state.onclick = this.next;

        this.prev_state = document.querySelector("#prev");
        this.prev_state.onclick = this.prev;
    }

    next(): void {
        if (timer.enabled == false) {
            timer.timer();
        }
    }

    prev(): void {
        if (timer.enabled == false) {
            Button.prev_func();
        }
    }
}