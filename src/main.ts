import DrawingData from "./draw";
import Timer from "./timer"
import Button from "./button"


window.addEventListener("load", () => {
    const timer = new Timer();
    new Button();
    let draw = new DrawingData();
    async function loadChart(draw: DrawingData) {
        // 描画用のデータの読み込み完了まで待機
        await google.charts.load('current', { packages: ['corechart', 'line'] });
        // アニメーションに必要なデータをインスタンス変数に格納する
        draw.setCalcResultData();
        // 描画する
        draw.drawChart();
        // ボタンclick時の関数を設定 static変数
        timer.timer = () => {
            if (draw.current == 199) draw.current = -1;
            draw.current += 1;
            draw.drawChart()
        }
        Button.prev_func = () => {
            if (draw.current == 0)  draw.current = 199
            draw.current -= 1
            draw.drawChart()
        }
    }
    loadChart(draw)
});