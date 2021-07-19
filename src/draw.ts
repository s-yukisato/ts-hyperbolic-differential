import Calculator from "./calculator";


export default class DrawingData {
    // 現在の状態
    current: number;
    // google chart用のDataTableが入る
    drawData: any[];
    // chartの設定
    options: object;
    // 描画対象のエレメント
    chart: HTMLDivElement;
    // アニメーション用
    drawChart: () => void;

    constructor() {
        this.current = 0;
        this.chart = document.querySelector('#chart');
        this.setDrawData();
    }

    setDrawData() {
        const calcResult = Calculator.hyperbolic();
        this.drawData = [];
        let count = 0
    
        for (let i in calcResult) {
            this.drawData[count] = new google.visualization.DataTable();
            this.drawData[count].addColumn('number', 'X');
            this.drawData[count].addColumn('number', 'U');
            this.drawData[count].addRows(calcResult[i])
            count++
        }
    
        this.options = {
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
    
        const chart = new google.visualization.LineChart(this.chart);
    
        this.drawChart = () => {
            chart.draw(this.drawData[this.current], this.options);
        }
    }

}
