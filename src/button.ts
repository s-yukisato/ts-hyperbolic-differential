import Animation from "./animation";


export default class Button {

    private _start: HTMLButtonElement;

    private _stop: HTMLButtonElement;

    private _next: HTMLButtonElement;

    private _prev: HTMLButtonElement;


    constructor(animation: Animation) {
        this._start = document.querySelector("#start");
        this._start.onclick = () => animation.start();

        this._stop = document.querySelector("#stop");
        this._stop.onclick = () => animation.stop();

        this._next = document.querySelector("#next");
        this._next.onclick = () => animation.next_state();

        this._prev = document.querySelector("#prev");
        this._prev.onclick = () => animation.prev_state();
    }
}