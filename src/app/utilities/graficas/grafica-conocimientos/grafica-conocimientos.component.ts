import { AfterViewInit, Component, EventEmitter, Input, NgZone, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
import { ArrayUtilities } from '../../ArrayUtilities';
import { Settings, graficaConocimientos } from '../../interfaces/graficaConocimientos';



@Component({
  selector: 'app-grafica-conocimientos',
  standalone: true,
  imports: [],
  templateUrl: './grafica-conocimientos.component.html',
  styleUrl: './grafica-conocimientos.component.scss'
})
export class GraficaConocimientosComponent implements OnInit, OnDestroy{

  @Input() chStyles!: Settings['styles'];
  @Input() chSeries!: Settings['series'];
  // @Input() chTitle!: Settings['title'];
  @Input() chData!: Settings['data'];
  @Input() chId!: Settings['id'];
  // @Input() totalRec!: number;
  @Output() updateValor = new EventEmitter<Event>();

  public root!: am5.Root;
  public chart!: am5xy.XYChart;
  public cursor!: am5xy.XYCursor;
  public xRenderer!: am5xy.AxisRendererX;
  public xAxis!: am5xy.CategoryAxis<am5xy.AxisRenderer>;
  public yRenderer!: am5xy.AxisRendererY;
  public yAxis!: am5xy.ValueAxis<am5xy.AxisRenderer>;
  public series!: am5xy.ColumnSeries;

  #defaultSettings: Partial<Settings> = {
    styles: { height: '100%'},
    // title: "Gráfico de torta",
    data: [],
    id: 'pipeDivChart',
    series: {
      labelsHidden: false,
      ticksHidden: false
    }
  };

  constructor(private zone: NgZone) { }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
  }

  ngOnInit(): void {
    const { id } = this.settings;
    // Asegúrate de que el código se ejecuta en el navegador
    if (typeof window !== 'undefined') {
      this.zone.runOutsideAngular(() => {
        // Create root element
        let root = am5.Root.new(id);

        // Set themes
        root.setThemes([
          am5themes_Animated.new(root)
        ]);

        // Create chart
        let chart = root.container.children.push(am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: "panX",
          wheelY: "zoomX",
          pinchZoomX:true
        }));

        this.root = root;
      });
    }
  }

  ngAfterViewInit(): void {
    this.create();
    this.update([...Object.keys(this.settings), 'data']);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.root) return;
    this.update(Object.keys(changes).map(key => key.slice(2).toLowerCase()));
  }

  get settings(): Settings {
    const { data, id, styles, series } = this.#defaultSettings;
    return {
      series: { ...series, ...this.chSeries },
      styles: { ...styles, ...this.chStyles },
      // title: this.chTitle || title,
      id: this.chId || id || '',
      data: this.chData || data
    };
  }

    /**
  * Actualiza los valores de la gráfica de acuerdo a los valores de configuración pasados en el componente
  * @param list Opciones de configuración
  */
  update(list: string[]) {
    const { data, id } = this.settings;
    if (ArrayUtilities.includesSome<Settings>(['data'], list)) {
      this.setData(data);
      this.animate();
    }
    if (ArrayUtilities.includesSome<Settings>(['series'], list)) {
      this.animate();
    }
  }

  create(){
    const { data, id, series } = this.settings;

    if (!this.root) {
      this.root = am5.Root.new(id);
      this.root.setThemes([
        am5themes_Animated.new(this.root)
      ]);
    }

    this.chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {
      panX: false,
      panY: false,
      paddingLeft: 0
    }));

    this.cursor = this.chart.set("cursor", am5xy.XYCursor.new(this.root, {}));
    this.cursor.lineY.set("visible", false);

    this.xRenderer = am5xy.AxisRendererX.new(this.root, {
      minGridDistance: 30,
      minorGridEnabled: true
    });

    this.xAxis = this.chart.xAxes.push(am5xy.CategoryAxis.new(this.root, {
      maxDeviation: 0,
      categoryField: "name",
      renderer: this.xRenderer,
      tooltip: am5.Tooltip.new(this.root, {})
    }));

    this.xRenderer.grid.template.set("visible", false);

    this.yRenderer = am5xy.AxisRendererY.new(this.root, {});
    this.yAxis = this.chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      maxDeviation: 0,
      min: 0,
      extraMax: 0.1,
      renderer: this.yRenderer
    }));

    this.yRenderer.grid.template.setAll({
      strokeDasharray: [2, 2]
    });

    this.series = this.chart.series.push(am5xy.ColumnSeries.new(this.root, {
      name: "Series 1",
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "name",
      tooltip: am5.Tooltip.new(this.root, {
        labelText: `[bold]{valueY}[/]\% `
      })
    }));

    this.series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0
    });

    const valor = (value:any) =>{
      this.updateValor.emit(value);
    }

    this.series.columns.template.events.on('click',function(event){
      const data = (event.target.dataItem?.dataContext as graficaConocimientos).number;
      // console.log(data, "nombre de cada grafica");
      valor(data)
    })

    this.series.columns.template.events.on('pointerover',function(event){
      event.target.set("cursorOverStyle", "pointer");
    })



    // this.series.columns.template.events.on('pointerout',function(event){
    //   event.target.set("cursorOverStyle", "default");
    // })

    // this.series.columns.template.adapters.add("fill", (fill, target) => {
    //   return this.chart.get("colors")?.getIndex(this.series.columns.indexOf(target));
    // });

    this.series.columns.template.adapters.add("fill",  (fill, target) => {
      return this.chart.get("colors")?.getIndex(this.series.columns.indexOf(target)%3);
    });

    this.chart.get("colors")?.set("colors", [
      am5.color("#383838"),
      am5.color("#a3a3a3"),
      am5.color("#0b0b0b")
    ]);

    this.series.columns.template.adapters.add("stroke", (stroke, target) => {
      return this.chart.get("colors")?.getIndex(this.series.columns.indexOf(target));
    });

    this.series.bullets.push(() => {
      return am5.Bullet.new(this.root, {
        locationY: 1,
        sprite: am5.Picture.new(this.root, {
          templateField: "bulletSettings",
          width: 50,
          height: 50,
          centerX: am5.p50,
          centerY: am5.p100,
          shadowColor: am5.color(0x000000),
          shadowBlur: 4,
          shadowOffsetX: 4,
          shadowOffsetY: 4,
          shadowOpacity: 0.6
        })
      });
    });

    this.xAxis.data.setAll(data);
    this.series.data.setAll(data);

  }

  setData(data: Settings['data']) {
    this.xAxis.data.setAll(data);
    this.series.data.setAll(data);
  }
  animate() {
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    this.series.appear(1000);
    this.chart.appear(1000, 100);
  }

}
