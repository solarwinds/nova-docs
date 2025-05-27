import{e as u}from"./chunk-Q7KUYM6U.js";import{Nc as p,pe as c,re as m}from"./chunk-DKNPFPFG.js";import{Ha as s,Pb as r,Vb as o,Wb as t,Xb as i,tc as e,wb as n}from"./chunk-FGVILFLG.js";var E=(()=>{class a{constructor(){this.fallbackAdapter=`
@Injectable()
export class StatusContentFallbackAdapter implements OnDestroy, IHasComponent {

    protected readonly destroy$ = new Subject<void>();
    protected componentId: string;

    constructor(@Inject(PIZZAGNA_EVENT_BUS) protected eventBus: EventBus<IEvent>,
                protected pizzagnaService: PizzagnaService) {
        this.eventBus.getStream(DATA_SOURCE_OUTPUT)
            .pipe(takeUntil(this.destroy$)).subscribe((event: IEvent<any | IDataSourceOutputPayload<any>>) => {
                this.handleDataSourceOutput(event);
            });
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public setComponent(component: any, componentId: string) {
        this.componentId = componentId;
    }

    protected handleDataSourceOutput(event: IEvent<any | IDataSourceOutputPayload<any>>) {
        this.pizzagnaService.setProperty({
            componentId: this.componentId,
            propertyPath: ["fallbackKey"],
            pizzagnaKey: PizzagnaLayer.Data,
        }, typeof event.payload?.error?.type !== "undefined" ? event.payload?.error?.type.toString() : undefined);
    }
}`,this.errorsMap=`
export const ERROR_FALLBACK_MAP: Record<string, ErrorNodeKey> = {
    [HttpStatusCode.Unknown]: ErrorNodeKey.ErrorUnknown,
    [HttpStatusCode.Forbidden]: ErrorNodeKey.ErrorForbidden,
    [HttpStatusCode.NotFound]: ErrorNodeKey.ErrorNotFound,
};
`,this.errorNodes=`
export const ERROR_NODES: Record<string, IComponentConfiguration> = {
    [ErrorNodeKey.ErrorUnknown]: {
        id: ErrorNodeKey.ErrorUnknown,
        componentType: WidgetErrorComponent.lateLoadKey,
        properties: {
            image: "no-data-to-show",
            title: $localize\`Whoops, something went wrong\`,
            description: $localize\`There was an unexpected error.\`,
        } as IWidgetErrorDisplayProperties,
    },
    [ErrorNodeKey.ErrorForbidden]: {
        id: ErrorNodeKey.ErrorForbidden,
        componentType: WidgetErrorComponent.lateLoadKey,
        properties: {
            image: "no-data-to-show",
            title: $localize\`403 - Forbidden\`,
            description: $localize\`The requested action was forbidden.\`,
        } as IWidgetErrorDisplayProperties,
    },
    [ErrorNodeKey.ErrorNotFound]: {
        id: ErrorNodeKey.ErrorNotFound,
        componentType: WidgetErrorComponent.lateLoadKey,
        properties: {
            image: "no-data-to-show",
            title: $localize\`404 - Not Found\`,
            description: $localize\`The requested resource could not be found.\`,
        } as IWidgetErrorDisplayProperties,
    },
};`,this.widgetBodyContentNodesSignature=`
/**
 * Retrieves an index of the basic widget body content nodes including fallback nodes
 *
 * @param mainContentNodeKey The key corresponding to the main body content node
 * @param fallbackAdapterId The id for the adapter responsible for activating fallback content in case of an error
 * @param fallbackMap A map of node keys to fallback content definitions
 * @param fallbackNodes An index of fallback content definitions
 *
 * @returns An index of component configurations
 */
export function widgetBodyContentNodes(
    mainContentNodeKey: string,
    fallbackAdapterId = NOVA_STATUS_CONTENT_FALLBACK_ADAPTER,
    fallbackMap: Record<string, string> = ERROR_FALLBACK_MAP,
    fallbackNodes: Record<string, IComponentConfiguration> = ERROR_NODES
): Record<string, IComponentConfiguration> { ... }
`}static{this.\u0275fac=function(d){return new(d||a)}}static{this.\u0275cmp=s({type:a,selectors:[["nui-widget-error-handling-docs"]],decls:116,vars:5,consts:[["language","typescript",3,"code"],["type","info",3,"allowDismiss"],["href","../additional-documentation/getting-started.html","target","_parent"],["href","../additional-documentation/widget-types/kpi.html","target","_parent"],["href","../components/DataSourceErrorComponent.html","target","_blank"],["href","../additional-documentation/tutorials/customization/data-source-configurator.html","target","_parent"],["filenamePrefix","widget-error-handling.component","exampleTitle","Widget Error Handling"],["href","../additional-documentation/tutorials/customization/widget.html","target","_parent"]],template:function(d,l){d&1&&(o(0,"h1"),e(1,"Widget Error Handling"),t(),o(2,"p"),e(3,` In this tutorial we'll show you how to handle errors in Nova dashboard. You will know-how provide an empty state view for the widget so users will be informed when there's no data or an error has occurred. We have default error state handling for all types of widgets.
`),t(),o(4,"p"),e(5," We have three params in the method "),o(6,"code"),e(7,"widgetBodyContentNodes"),t(),e(8,`, which responsible for widget error handling:
`),t(),o(9,"ul")(10,"li")(11,"code"),e(12,"fallbackAdapterId"),t(),e(13," The id for the adapter responsible for activating fallback content in case of an error (default value: NOVA_STATUS_CONTENT_FALLBACK_ADAPTER) "),t(),o(14,"li")(15,"code"),e(16,"fallbackMap"),t(),e(17," A map of node keys to fallback content definitions (default value: ERROR_FALLBACK_MAP) "),t(),o(18,"li")(19,"code"),e(20,"fallbackNodes"),t(),e(21," An index of fallback content definitions (default value: ERROR_NODES) "),t()(),o(22,"p"),e(23,` You can see below the code examples of each part, which are used as a default for widget error handling
`),t(),o(24,"strong"),e(25,"The example of adapter"),t(),i(26,"nui-example-code",0),o(27,"p")(28,"strong"),e(29,"A map of error codes to widget error node keys"),t(),o(30,"nui-message",1),e(31," An error code doesn't have to be an HTTP status code. It may be any string that matches an expected data source error type. Additionally, the node keys may be any string as long as they correspond to an error configuration node defined in the widget structure. "),t(),i(32,"nui-example-code",0),t(),o(33,"strong"),e(34,"An index of common error configurations"),t(),o(35,"p"),e(36,"Each error configuration has:"),t(),o(37,"ul")(38,"li")(39,"code"),e(40,"id"),t(),e(41," of error node key"),t(),o(42,"li")(43,"code"),e(44,"componentType"),t(),e(45," of widget error component"),t(),o(46,"li")(47,"code"),e(48,"properties (image, title and description)"),t(),e(49," for displaying error details "),t()(),i(50,"nui-example-code",0),o(51,"h2"),e(52,"Basic Steps"),t(),o(53,"ol")(54,"li"),e(55," Follow the instructions "),o(56,"a",2),e(57,"here"),t(),e(58," to set up your environment for dashboard development. "),t(),o(59,"li"),e(60," Follow the instructions "),o(61,"a",3),e(62,"here"),t(),e(63," to get a basic KPI dashboard up and running. "),t()(),o(64,"p"),e(65,` In the example below, we'll implement a sample KPI widget with an error. If the widget data source results in a known error transition we need to show the corresponding error layout configuration. If the data source reports an unknown error type transition we need to show an "unknown error" layout configuration. Switch into other data sources to see the handling of different errors in the widget. Each data source provides an error from `),o(66,"code"),e(67,"ERROR_FALLBACK_MAP"),t(),e(68,". A widget with no errors does not display an error layout. You can check it when switching to "),o(69,"code"),e(70,"AverageRatingKpiDataSource"),t(),e(71,`.
`),t(),o(72,"p"),e(73," If the data source outputs an error as part of its "),o(74,"code"),e(75,"outputsSubject"),t(),e(76," payload, the configurator will display an error message including the string specified in the "),o(77,"code"),e(78,"message"),t(),e(79," property of the payload's error object. If there's no value for the "),o(80,"code"),e(81,"message"),t(),e(82," property, the error message will just display the value of the "),o(83,"code"),e(84,"type"),t(),e(85," property. The component responsible for this logic is the "),o(86,"code")(87,"a",4),e(88,"DataSourceErrorComponent"),t()(),e(89,". If you want to use a custom component for this, you'll need to to set the "),o(90,"code"),e(91,"errorComponent"),t(),e(92," property in the configurator section of the pizzagna with the "),o(93,"code"),e(94,"lateLoadKey"),t(),e(95," of your custom component. For instructions on how to do that, be sure to take a look at the "),o(96,"a",5),e(97,"Implementing a Custom Data Source Configurator"),t(),e(98,` tutorial.
`),t(),o(99,"nui-example-wrapper",6),i(100,"widget-error-handling"),t(),o(101,"h2"),e(102,"Custom Widget Error Handling"),t(),o(103,"p"),e(104," At first, follow the instructions "),o(105,"a",7),e(106,"here"),t(),e(107," to implement your custom widget. Then you need to modify the widget type definition by changing the retrieving the definitions for the body content nodes in the method "),o(108,"code"),e(109,"widgetBodyContentNodes"),t(),e(110,". You can see below the declaration of that method: "),i(111,"nui-example-code",0),e(112," So, you can modify any parameter: "),o(113,"code"),e(114,"fallbackAdapterId, fallbackMap, fallbackNodes"),t(),e(115,` to your own widget error handling.
`),t()),d&2&&(n(26),r("code",l.fallbackAdapter),n(4),r("allowDismiss",!1),n(2),r("code",l.errorsMap),n(18),r("code",l.errorNodes),n(61),r("code",l.widgetBodyContentNodesSignature))},dependencies:[m,c,p,u],encapsulation:2})}}return a})();export{E as a};
