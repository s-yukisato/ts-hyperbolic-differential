export default class Calculator {

    // 弦の初期位置 0.0 ~ 1.0
    static hyperbolic(peak: number): object {
        // 計算結果を格納
        const result: object = {};
        // 刻みの大きさ
        const n = 200
        const u = [n + 1];
        const v = [n + 1];
        const w = [n + 1];

        // 微小時間
        const k = 0.001

        // 定数を先に計算しておく
        const h = 1.0 / n;
        const r = k / h;
        const q = r * r;
        const s = 2.0 * (1.0 - q);
        // 初期位置を定める
        let ia = peak * n;
        // 振幅（波の高さ)
        let a = 0.5;

        for (let i = 0; i <= ia; i++) {
            u[i] = i / ia * a;
        }
        for (let i = ia; i <= n; i++) {
            u[i] = a - ((i - ia) / (n - ia)) * a;
        }
        for (let i = 0; i <= n; i++) {
            v[i] = u[i]
        }
        for (let i = 0; i <= n; i++) {
            w[i] = 0
        }

        for (let j = 0; j <= 20000; j++) {
            if ((j % 10) == 0) {
                let tmp = (j * k).toFixed(1);
                result[tmp] = [];
                for (let i = 0; i <= n; i += 2) {
                    result[tmp].push([i, parseFloat(u[i].toFixed(4))])
                }
            }
            for (let i = 1; i < n; i++) {
                // 次の状態を求める
                w[i] = q * (u[i + 1] + u[i - 1]) + s * u[i] - v[i]
            }
            for (let i = 0; i <= n; i++) {
                v[i] = u[i]
                u[i] = w[i]
            }
        }
        return result;
    }
}