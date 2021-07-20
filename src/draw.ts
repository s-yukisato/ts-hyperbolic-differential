import Calculator from "./calculator";


export default class DrawingData {
    // 現在の状態
    public current: number;
    // google chart用のDataTableが入る
    public drawData: any[];
    // chartの設定
    public options: object;
    // 描画対象のエレメント
    private _chartElement: HTMLDivElement;
    // アニメーション用
    public drawChart: () => void;


    constructor(peak: number) {

        this.current = 0;

        this._chartElement = document.querySelector('#chart');

        this.drawData = [];

        this.options = {
            title: "hyperbolic partial differential equation",
            width: 828,
            height: 414,
            animation: { duration: 100 },
            hAxis: { title: 'x' },
            vAxis: {
                title: 'U',
                minValue: -0.6,
                maxValue: 0.6,
                ticks: [-0.5, -0.4, -0.3, -0.2, -0.1, 0.0, 0.1, 0.2, 0.3, 0.4, 0.5]
            },
        };

        this.setDrawData(peak);
    }

    setDrawData(peak: number) {
        const calcResult = Calculator.hyperbolic(peak);

        let count = 0

        for (let i in calcResult) {
            this.drawData[count] = new google.visualization.DataTable();
            this.drawData[count].addColumn('number', 'X');
            this.drawData[count].addColumn('number', 'U');
            this.drawData[count].addRows(calcResult[i])
            count++
        }

        const chart = new google.visualization.LineChart(this._chartElement);

        this.drawChart = () => {
            chart.draw(this.drawData[this.current], this.options);
        }
    }

}
