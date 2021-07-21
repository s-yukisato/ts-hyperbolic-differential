export type motionTimer = {
    (transition?: number): void
}

/**
 *  インターバルタイマー
 */
export default class Timer {
    // 関数呼び出しの間隔
    private _delay: number;
    // タイマーが設定されているか
    private _hasTimer: boolean;

    protected _func: motionTimer;
    // タイマーを識別する数値
    private _intervalId: number;

    constructor(func: motionTimer, delay: number){
        this._delay = delay;
        this._hasTimer = false;
        this._func = func;
        this._intervalId = null;
    }

    start(): void {
        if ((this._func != null) && (this._hasTimer== false)) {
            this._intervalId = window.setInterval(this._func, this._delay);
            this._hasTimer = true;
        }
    }

    stop(): void {
        if (this._hasTimer == true) {
            clearInterval(this._intervalId);
            this._hasTimer = false;
        }
    }
}