/**
 *  インターバルタイマー
 */
export default class Timer {
    // 関数呼び出しの間隔
    private _delay: number;
    
    protected _enabled: boolean;

    protected _func: (transition?: number) => void;
    // タイマーを識別する数値
    private _intervalId: number;

    constructor(func: (transition: number) => void, delay: number){
        this._delay = delay;
        this._enabled = false;
        this._func = func;
        this._intervalId = null;
    }

    start(): void {
        if ((this._func != null) && (this._enabled == false)) {
            this._intervalId = window.setInterval(this._func, this._delay);
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