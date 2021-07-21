export default class Button {

    private _start: HTMLButtonElement;

    private _stop: HTMLButtonElement;

    private _next: HTMLButtonElement;

    private _prev: HTMLButtonElement;


    constructor(motion: Motion) {

        this._start = document.querySelector("#start");

        this._stop = document.querySelector("#stop");

        this._next = document.querySelector("#next");

        this._prev = document.querySelector("#prev");


        this._start.onclick = () => {
            motion.start();
            this._start.disabled = true;
            this._next.disabled = true;
            this._prev.disabled = true;
            this._stop.disabled = false;
        }

        this._stop.onclick = () => {
            motion.stop();
            this._stop.disabled = true;
            this._start.disabled = false;
            this._next.disabled = false;
            this._prev.disabled = false;
        }

        this._next.onclick = () => motion.next();

        this._prev.onclick = () => motion.prev();
    }
}