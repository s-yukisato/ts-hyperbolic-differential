import DrawingData from "./draw";
import Animation from "./animation";
import Button from "./button"


window.addEventListener("load", () => {

    let animation: Animation;

    let draw:DrawingData;

    init();

    const peak:HTMLInputElement = document.querySelector("#peak");
    peak.onchange = () => {
        draw.setDrawData(parseFloat(peak.value));
        draw.current = 0;
        draw.drawChart();
    }

    async function init() {
        // 描画用のデータの読み込み完了まで待機
        await google.charts.load('current', { packages: ['corechart', 'line'] });
        // アニメーションに必要なデータをインスタンス変数に格納する
        draw = new DrawingData(0.5);
        // 描画する
        draw.drawChart();

        let f = (transition = 1) => {
            // 計算結果の範囲を超えないように調整
            if (transition === -1 && draw.current === 0) {
                draw.current = 199;
            } else if (transition === 1 && draw.current === 199) {
                draw.current = 0;
            }
            draw.current += transition;
            draw.drawChart();
        }

        animation = new Animation(f, 100);
        // ボタンクリック時の関数を設定
        new Button(animation);
    }
});