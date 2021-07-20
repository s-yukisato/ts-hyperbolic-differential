import Timer from "./timer";

/**
 * グラフ描画アニメーション用
 */
export default class Animation extends Timer {

    constructor(f: (transition?: number) => void, delay: number,) {
        super(f, delay);
    }

    next_state() {
            // 状態を一つ進める
            this._func(1);
    }

    prev_state() {
            // 状態を一つ戻す
            this._func(-1);
    }
}