import Timer from "./timer";
import { motionTimer } from "./timer";

/**
 * グラフ描画アニメーション用
 */
export default class Animation extends Timer implements Motion {

    constructor(f: motionTimer, delay: number,) {
        super(f, delay);
    }

    next() {
        // 状態を一つ進める
        this._func(1);
    }

    prev() {
        // 状態を一つ戻す
        this._func(-1);
    }
}