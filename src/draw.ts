import Calculator from "./calculator";

export default class DrawingData {
    // 現在の状態
    current: number;
    data: any[];
    options: object;
    chart: HTMLDivElement;
    drawChart: () => void;
    constructor() {
        this.current = 0;
        this.data = [];
        this.options = null;
        this.chart = document.querySelector('#chart');
        this.drawChart = null;
    }

    setCalcResultData() {
        let rows = Calculator.hyperbolic();
        let count = 0
    
        for (let k in rows) {
            this.data[count] = new google.visualization.DataTable();
            this.data[count].addColumn('number', 'X');
            this.data[count].addColumn('number', 'U');
            this.data[count].addRows(rows[k])
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
            chart.draw(this.data[this.current], this.options);
        }
    }

}
