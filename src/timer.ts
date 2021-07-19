export default class Timer {
    // 間隔
    private interval: number;

    enabled: boolean;
    // function
    private _timer: () => void;
    // intervalTimer
    private intervalId: number;

    constructor(){
        this.interval = 100;
        this.enabled = false;
        this.intervalId = null;
    }

    set timer (func: () => void) {
        this._timer = func;
    }

    enable(): void {
        if ((this.timer != null) && (this.enabled == false)) {
            this.intervalId = window.setInterval(this.timer, this.interval);
            this.enabled = true;
        }
    }

    disable(): void {
        if (this.enabled == true) {
            clearInterval(this.intervalId);
            this.enabled = false;
        }
    }
}