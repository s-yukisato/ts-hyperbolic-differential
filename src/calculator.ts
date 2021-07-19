export default class Calculator {
    
    static hyperbolic(): object {
        // 計算結果を格納
        const result: object = {};
        // 刻みの大きさ
        const n = 200
        const u = [n + 1];
        const v = [n + 1];
        const w = [n + 1];
        // 微小時間
        const k = 0.001
        let h: number;
        let r: number;
        let s, q;
        let i, j;

        // 定数
        h = 1.0 / n
        r = k / h
        q = r * r
        s = 2.0 * (1.0 - q)
        let peak = 0.9
        let ia = peak * n

        for (i = 0; i <= ia; i++) {
            u[i] = i / ia * 0.5;
        }
        for (i = ia; i <= n; i++) {
            u[i] = 0.5 - ((i - ia) / (n - ia)) * 0.5;
        }
        for (i = 0; i <= n; i++) {
            v[i] = u[i]
        }
        for (i = 0; i <= n; i++) {
            w[i] = 0
        }

        for (j = 0; j <= 20000; j++) {
            if ((j % 10) == 0) {
                let tmp = (j * k).toFixed(1);
                result[tmp] = []
                for (i = 0; i <= n; i += 2) {
                    result[tmp].push([i, parseFloat(u[i].toFixed(4))])
                }
            }
            for (i = 1; i < n; i++) {
                w[i] = q * (u[i + 1] + u[i - 1]) + s * u[i] - v[i]
            }
            for (i = 0; i <= n; i++) {
                v[i] = u[i]
                u[i] = w[i]
            }
        }
        return result;
    }
}