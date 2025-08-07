import{a as p}from"./chunk-76FQ7AHK.js";import{Pb as h,_a as c}from"./chunk-HL7NY4QC.js";import{Fa as a,Ga as t,Ha as d,cb as e,db as n,fa as i,q as m,ya as o}from"./chunk-VSZOZJXN.js";var E=(()=>{class l{basicChartTemplate='<nui-chart [chart]="chart"></nui-chart>';basicSeries=`const chartSeries: IChartSeries = {
    id: "series-1",
    name: "Series 1",
    data: [
        { x: 1, y: 10 },
        { x: 2, y: 20 },
    ],
    scales: {
        x: new LinearScale(),
        y: new LinearScale(),
    },
    renderer: new LineRenderer(),
};
...`;basicData=`const chartSeries: IChartSeries = {
    id: "series-1",
    name: "Series 1",
    data: [
        { x: 1, y: 10 },
        { x: 2, y: 20 },
    ],
    ...
};`;basicScales=`const chartSeries: IChartSeries = {
    ...
    scales: {
        x: new LinearScale(),
        y: new LinearScale(),
    },
    ...
};`;renderer=`const chartSeries: IChartSeries = {
    ...
    renderer: new LineRenderer(),
    ...
};`;chartSetup=`const chart = new Chart(new XYGrid());
...`;chartUpdate=`const seriesSet: IChartSeries[] = [...];
chart.update(seriesSet);
...`;static \u0275fac=function(s){return new(s||l)};static \u0275cmp=m({type:l,selectors:[["nui-chart-docs-chart-setup"]],decls:143,vars:9,consts:[["href","../classes/Chart.html","target","_blank"],["href","../interfaces/IGrid.html","target","_blank"],["href","../classes/XYGrid.html","target","_blank"],["href","../additional-documentation/advanced-usage/grid.html","target","_parent"],["href","../classes/Chart.html#update","target","_blank"],["href","../interfaces/IChartSeries.html","target","_blank"],["type","warning",3,"allowDismiss"],["filenamePrefix","line-chart","exampleTitle","Basic Line Chart"],["href","../interfaces/IDataSeries.html","target","_blank"],["href","../miscellaneous/typealiases.html#Scales","target","_blank"],["href","../classes/Renderer.html","target","_blank"],["href","../classes/LinearScale.html","target","_blank"],["href","../classes/TimeScale.html","target","_blank"],["href","../classes/BandScale.html","target","_blank"],["href","../classes/TimeIntervalScale.html","target","_blank"],["href","../classes/LineRenderer.html","target","_blank"]],template:function(s,r){s&1&&(a(0,"h1"),e(1,"Chart Setup"),t(),a(2,"p"),e(3,"To create a data visualization, start by doing the following:"),t(),a(4,"p"),e(5," Instantiate a "),a(6,"code")(7,"a",0),e(8,"Chart"),t()(),e(9," by passing an implementation of the "),a(10,"code")(11,"a",1),e(12,"IGrid"),t()(),e(13," interface as an argument to the constructor--for example an "),a(14,"code")(15,"a",2),e(16,"XYGrid"),t()(),e(17,` for line and bar charts.
`),t(),a(18,"pre"),e(19),t(),a(20,"p"),e(21," The purpose of the grid is to give the chart a well-defined place to show its data. In the case of a line or bar chart, this includes grid lines, axes, ticks, tick labels, etc. For information about other types of grids, see the "),a(22,"a",3),e(23,"Grid Configuration"),t(),e(24,` page in the documentation.
`),t(),a(25,"p"),e(26,` In your template, pass the chart class instance to the chart input on the chart component.
`),t(),a(27,"pre"),e(28),t(),a(29,"p"),e(30," To initialize your chart with data or to update it later, invoke the chart class's "),a(31,"code")(32,"a",4),e(33,"update"),t()(),e(34," method with an array of one or more chart series ("),a(35,"code")(36,"a",5),e(37,"IChartSeries[]"),t()(),e(38,`) as an argument.
`),t(),a(39,"pre"),e(40),t(),a(41,"nui-message",6)(42,"strong"),e(43,"Note:"),t(),e(44," See the "),a(45,"em"),e(46,"Chart Series Setup"),t(),e(47,` section below for how to set up a chart series.
`),t(),a(48,"h1"),e(49,"Example"),t(),a(50,"nui-example-wrapper",7),d(51,"nui-line-chart-example"),t(),a(52,"h1"),e(53,"Chart Series Setup"),t(),a(54,"p"),e(55," Each "),a(56,"code")(57,"a",5),e(58,"IChartSeries"),t()(),e(59," is an extension of "),a(60,"code")(61,"a",8),e(62,"IDataSeries"),t()(),e(63," and includes scales ("),a(64,"code")(65,"a",9),e(66,"Scales"),t()(),e(67,") and a renderer ("),a(68,"code")(69,"a",10),e(70,"Renderer"),t()(),e(71,`) in addition to the data to be visualized.
`),t(),a(72,"p"),e(73," To start setting up a chart series, provide an "),a(74,"code"),e(75,"id"),t(),e(76," (string), a display "),a(77,"code"),e(78,"name"),t(),e(79," (string), and an array of "),a(80,"code"),e(81,"data"),t(),e(82," ("),a(83,"code"),e(84,"any[]"),t(),e(85,`). The items in the array can be as simple as numbers or can be represented with more complex objects. The objects in the data array can be any shape you want, but the most basic setup for a two dimensional visualization is:
`),t(),a(86,"pre"),e(87),t(),a(88,"p"),e(89,` For a basic x-y coordinate system, the x values are used for the chart's x-axis and the y values are used for the y-axis.
`),t(),a(90,"h2"),e(91,"Scales"),t(),a(92,"p"),e(93," Next, provide as part of the IChartSeries a set of scales ("),a(94,"code")(95,"a",9),e(96,"Scales"),t()(),e(97,`) which allow the renderer to calculate exactly where to render a data point inside the grid.
`),t(),a(98,"p"),e(99," For a basic x-y grid, the scales can be set as an object with x and y properties--indicating which axis each scale applies to. Some of the available scale types are "),a(100,"code")(101,"a",11),e(102,"LinearScale"),t()(),e(103,", "),a(104,"code")(105,"a",12),e(106,"TimeScale"),t()(),e(107,", "),a(108,"code")(109,"a",13),e(110,"BandScale"),t()(),e(111," and "),a(112,"code")(113,"a",14),e(114,"TimeIntervalScale"),t()(),e(115,`.
`),t(),a(116,"pre"),e(117),t(),a(118,"h2"),e(119,"Renderer"),t(),a(120,"p"),e(121," Finally, provide a renderer which determines the type and appearance of a chart's visualization. For instance, to render the data as a line, instantiate a "),a(122,"code")(123,"a",15),e(124,"LineRenderer"),t()(),e(125," and assign it to the "),a(126,"code"),e(127,"renderer"),t(),e(128," property of the corresponding "),a(129,"code")(130,"a",5),e(131,"IChartSeries"),t()(),e(132,`.
`),t(),a(133,"pre"),e(134),t(),a(135,"h2"),e(136,"Complete Chart Series"),t(),a(137,"pre"),e(138),t(),a(139,"nui-message",6)(140,"strong"),e(141,"Note:"),t(),e(142,` To check out the full basic line chart usage, click the "Show Source" button on the live example at the top of the page.
`),t()),s&2&&(i(19),n(r.chartSetup),i(9),n(r.basicChartTemplate),i(12),n(r.chartUpdate),i(),o("allowDismiss",!1),i(46),n(r.basicData),i(30),n(r.basicScales),i(17),n(r.renderer),i(4),n(r.basicSeries),i(),o("allowDismiss",!1))},dependencies:[h,c,p],encapsulation:2})}return l})();export{E as a};
