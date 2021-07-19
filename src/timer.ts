export default class Timer {
    // 関数呼び出しの間隔
    private _delay: number;
    
    private _enabled: boolean;

    public func: (transition?: number) => void;
    // タイマーを識別する数値
    private _intervalId: number;

    constructor(interval: number){
        this._delay = interval;
        this._enabled = false;
        this._intervalId = null;
    }

    start(): void {
        if ((this.func != null) && (this._enabled == false)) {
            this._intervalId = window.setInterval(this.func, this._delay);
            this._enabled = true;
        }
    }

    stop(): void {
        if (this._enabled == true) {
            clearInterval(this._intervalId);
            this._enabled = false;
        }
    }
}