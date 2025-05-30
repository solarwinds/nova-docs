import{j as y}from"./chunk-XAWZKRM7.js";import{c as L}from"./chunk-TN2MTUUA.js";import{a as S}from"./chunk-ZR5STDHI.js";import{j as C,s as M}from"./chunk-EHNCPSLF.js";import{Oc as f,Pb as g,Pc as Z,Qb as l,Wb as u,Xb as V,Yb as H,ia as h,ib as d,nb as p,tb as r,wa as m,zb as x}from"./chunk-MC3BMXIX.js";import{f as D,g as w}from"./chunk-VBFW7A5V.js";var k=D((Y,A)=>{var G=L();function z(t){return typeof t=="number"&&t==G(t)}A.exports=z});var e=function(t){return t.Command="command",t.HealthStatus="health-status",t.Object="object",t.Severity="severity",t.State="state",t.Tab="tab",t.Widget="widget",t}(e||{}),n=function(t){return t.Command="command_",t.Object="object_",t.Severity="severity_",t.State="state_",t.Status="status_",t.Widget="widget_",t}(n||{}),B=function(t){return t.Acknowledged="acknowledged",t.Critical="critical",t.Disabled="disabled",t.Down="down",t.External="external",t.Inactive="inactive",t.Issues="issues",t.Missing="missing",t.Mixed="mixed",t.Reserved="reserved",t.NotRunning="notrunning",t.Shutdown="shutdown",t.Sleep="sleep",t.Standby="standby",t.Suspended="suspended",t.Testing="testing",t.Transient="transient",t.Undefined="undefined",t.Unknown="unknown",t.Unmanaged="unmanaged",t.Unplugged="unplugged",t.Unreachable="unreachable",t.Up="up",t.Used="used",t.Warning="warning",t}(B||{}),o=function(t){return t.CriticalInverse="severity_critical-inverse",t.Critical="severity_critical",t.Error="severity_error",t.InfoInverse="severity_info-inverse",t.Info="severity_info",t.Ok="severity_ok",t.Tip="severity_tip",t.Unknown="severity_unknown",t.WarningInverse="severity_warning-inverse",t.Warning="severity_warning",t}(o||{}),c=function(t){return t.Hidden="state_hidden",t.Ok="state_ok",t.Paused="state_paused",t.Restarting="state_restarting",t.Running="state_running",t.Shutdown="state_shutdown",t.Sleeping="state_sleeping",t.Stopped="state_stopped",t.Unknown="state_unknown",t.Unmanaged="state_unmanaged",t.Unplugged="state_unplugged",t.Visible="state_visible",t.Lock="state_lock",t.Unlock="state_unlock",t}(c||{});var b=[{svgFile:"acknowledge.svg",name:"acknowledge",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm0,2c1.42,0,2.57,1.64,2.57,3.67s-1.15,3.7-2.57,3.7S7.43,8.72,7.43,6.7,8.58,3,10,3Zm2.49,7.45a4.24,4.24,0,0,1-.62,1.64A2.31,2.31,0,0,1,10,13.3a2.31,2.31,0,0,1-1.88-1.17,4.24,4.24,0,0,1-.62-1.64,4.4,4.4,0,0,0-3,3.92,1.34,1.34,0,0,0,1.34,1.34h0a1.3,1.3,0,0,0,.6-.15A4.66,4.66,0,0,0,10,17a4.66,4.66,0,0,0,3.56-1.37,1.3,1.3,0,0,0,.6.15,1.34,1.34,0,0,0,1.34-1.34s0,0,0,0a4.4,4.4,0,0,0-3-3.92ZM12,10h0M8,10H8'/>
</svg>
`},{svgFile:"add.svg",name:"add",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm1,10h4V9H11V5H9V9H5v2H9v4h2Z'/>
</svg>
`},{svgFile:"application.svg",name:"application",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M1,1V18H19V1ZM18,2V4H16V2ZM15,2V4H13V2ZM12,2V4H10V2Zm6,15H2V5H18Zm-6-2H4V13h8Zm4-3H4V10H16Zm0-3H4V7H16Z'/>
</svg>
`},{svgFile:"arrow-down.svg",name:"arrow-down",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994'
             points='10 17.41 4.29 11.71 5.71 10.29 9 13.59 9 3 11 3 11 13.59 14.29 10.29 15.71 11.71 10 17.41'/>
</svg>
`},{svgFile:"arrow-left.svg",name:"arrow-left",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994'
             points='8.29 15.71 2.59 10 8.29 4.29 9.71 5.71 6.41 9 17 9 17 11 6.41 11 9.71 14.29 8.29 15.71'/>
</svg>
`},{svgFile:"arrow-right.svg",name:"arrow-right",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994'
             points='11.71 15.71 10.29 14.29 13.59 11 3 11 3 9 13.59 9 10.29 5.71 11.71 4.29 17.41 10 11.71 15.71'/>
</svg>
`},{svgFile:"arrow-up.svg",name:"arrow-up",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994'
             points='11 17 9 17 9 6.41 5.71 9.71 4.29 8.29 10 2.59 15.71 8.29 14.29 9.71 11 6.41 11 17'/>
</svg>
`},{svgFile:"assign.svg",name:"assign",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M20,0V12H16V11h3V1H9V11h3v1H8V0ZM15,6.06V12a5,5,0,0,1-5,5H7.86a4,4,0,1,1,0-2H10a3,3,0,0,0,3-3V6.06L11.53,7.53,10.47,6.47,14,2.94l3.53,3.53L16.47,7.53ZM6,16a2,2,0,1,0-2,2A2,2,0,0,0,6,16Z'/>
</svg>
`},{svgFile:"blog02.svg",name:"blog02",category:e.Tab,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M0,20l2.31-5.7A9.49,9.49,0,1,1,10.5,19a9.38,9.38,0,0,1-4.1-.94ZM10.5,1A8.49,8.49,0,0,0,3.3,14l.14.23L1.5,18.5,6.5,17l.19.09A8.4,8.4,0,0,0,10.5,18a8.5,8.5,0,0,0,0-17ZM11,5V9h2a2.44,2.44,0,0,1-2.63,2.76l1,1.3A3.75,3.75,0,0,0,15,9.2q0-.1,0-.2V5ZM8,11h2V7H6v4a3.86,3.86,0,0,0,3.55,4.14h.08l1-1.35A2.48,2.48,0,0,1,8,11Z'/>
</svg>
`},{svgFile:"browse.svg",name:"browse",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M12,7H9V6h3ZM9,9h3V8H9Zm0,2h3V10H9ZM6,11H8V10H6ZM8,6H6V7H8ZM8,8H6V9H8Zm4,6H2V2H18V9h1V1H1V15H8v3H4v1H15V18H12Zm4.91-.31L19,12.76,13,5V15.44l2.09-.93,2.2,4.9,1.82-.82ZM15,6h1V3H4V13h8V12H5V5H15Z'/>
</svg>
`},{svgFile:"calendar.svg",name:"calendar",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M15,7H9v5h6Zm-2,3H11V9h2ZM1,2V18H19V2ZM5,14H2V12H5Zm0-3H2V9H5ZM2,17V15H5v2Zm4,0V15H9v2Zm12,0H10V15h8Zm0-9H16V9h2v2H16v1h2v2H15V13H14v1H10V13H9v1H6V12H8V11H6V9H8V8H2V6H18ZM2,5V3H18V5Z'/>
</svg>
`},{svgFile:"caret-down.svg",name:"caret-down",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994'
             points='10 14.41 4.29 8.71 5.71 7.29 10 11.59 14.29 7.29 15.71 8.71 10 14.41'/>
</svg>
`},{svgFile:"caret-left.svg",name:"caret-left",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994'
             points='11.29 15.71 5.59 10 11.29 4.29 12.71 5.71 8.41 10 12.71 14.29 11.29 15.71'/>
</svg>
`},{svgFile:"caret-right.svg",name:"caret-right",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994'
             points='8.71 15.71 7.29 14.29 11.59 10 7.29 5.71 8.71 4.29 14.41 10 8.71 15.71'/>
</svg>
`},{svgFile:"caret-up.svg",name:"caret-up",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994'
             points='14.29 12.71 10 8.41 5.71 12.71 4.29 11.29 10 5.59 15.71 11.29 14.29 12.71'/>
</svg>
`},{svgFile:"check.svg",name:"check",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1ZM9,14.41,4.29,9.71,5.71,8.29,9,11.59l5.29-5.3,1.42,1.42Z'/>
</svg>
`},{svgFile:"clear.svg",name:"clear",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M16,20H1V19H16ZM19,4V6l-4.5,4.5L7,18H1V14L9.5,5.5,14,1h2Zm-5.91,6.5L9.5,6.91,2,14.41V17H6.59ZM17.17,5,15,2.83,11.83,6,14,8.17Z'/>
</svg>
`},{svgFile:"clock.svg",name:"clock",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm0,17a8,8,0,1,1,8-8A8,8,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6,6,0,0,0,10,4Zm2.92,4.62-.83-1.25L9.79,8.9,8.17,5.66l-1.34.67L9.21,11.1Z'/>
</svg>
`},{svgFile:"close.svg",name:"close",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm4.71,12.29L11.41,10l3.29-3.29L13.29,5.29,10,8.59,6.71,5.29,5.29,6.71,8.59,10,5.29,13.29l1.41,1.41L10,11.41l3.29,3.29Z'/>
</svg>
`},{svgFile:"color.svg",name:"color",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>
    <path fill='#767676'
          d='M58.89 40.56l4.37 12.58A5.91 5.91 0 0157.67 61a5.92 5.92 0 01-5.51-8.08L57 40.52a1 1 0 011.89.04zM25 63.1a13.06 13.06 0 009.27-3.84l25.48-25.52a2.5 2.5 0 000-3.53l-26-26a2.52 2.52 0 00-3.54 0L12.78 21.69A8 8 0 0115 6h5.5a2.5 2.5 0 000-5H15a13 13 0 000 26h20.5a2.5 2.5 0 000-5h-16L32 9.54 54.44 32 30.73 55.72A8 8 0 0125 58.1a8.06 8.06 0 01-5.73-2.37l-11-11a8.09 8.09 0 010-11.46 2.5 2.5 0 10-3.54-3.54 13.13 13.13 0 000 18.54l11 11A13 13 0 0025 63.1z'/>
</svg>
`},{svgFile:"copy.svg",name:"copy",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M18,7.29V20H5V18H6v1H17V7.71l-1-1V5.29ZM15,17H2V0h8.71L15,4.29ZM11,4h2.29L11,1.71Zm3,12V5H10V1H3V16ZM5,14h7V12H5ZM5,8h7V6H5Zm0,3h7V9H5Z'/>
</svg>
`},{svgFile:"customize.svg",name:"customize",category:e.Tab,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M3.32,20A3.33,3.33,0,0,1,1,14.34L7.4,7.89A5.91,5.91,0,0,1,8.48,1.58a6,6,0,0,1,6.74-1,.5.5,0,0,1,.13.8L11.71,5,15,8.29l3.65-3.65a.5.5,0,0,1,.8.13,6,6,0,0,1-1,6.67l0,0a5.93,5.93,0,0,1-6.34,1.12L5.67,19A3.32,3.32,0,0,1,3.32,20ZM12.6.95A5,5,0,0,0,9.19,2.29a4.91,4.91,0,0,0-.74,5.49.5.5,0,0,1-.09.58L1.67,15A2.33,2.33,0,1,0,5,18.34l6.68-6.69a.5.5,0,0,1,.57-.1,4.94,4.94,0,0,0,5.54-.79,5,5,0,0,0,1.06-4.87L15.35,9.35a.5.5,0,0,1-.71,0l-4-4a.5.5,0,0,1,0-.71l3.46-3.47A5,5,0,0,0,12.6.95ZM3.71,17.71l6-6a1,1,0,0,0-1.41-1.41l-6,6a1,1,0,1,0,1.41,1.41Z'/>
</svg>
`},{svgFile:"cut.svg",name:"cut",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M16.12,7.09a2.31,2.31,0,0,0,0-3.25.5.5,0,0,0-.66,0l-4,3.11-.68-5.48a.5.5,0,0,0-.5-.44A2.3,2.3,0,0,0,8,3.3V9.64l-1.18.91A3.43,3.43,0,0,0,2.15,11a3.43,3.43,0,0,0-.36,4.78,2.83,2.83,0,0,0,.36.36,1.2,1.2,0,0,0,.88.37c.73,0,1.68-.57,2.83-1.71a7.76,7.76,0,0,0,1.56-2l1.91-.56,1,1.72a9.71,9.71,0,0,0-.18,2c0,2.41.56,3.63,1.59,3.63h.59a3.43,3.43,0,0,0,3.13-3.63,3.47,3.47,0,0,0,0-.5,3.42,3.42,0,0,0-3.32-3.12L12,11.19Zm-.46-2.18a1.3,1.3,0,0,1-.25,1.47L11.87,9.93l-.23-1.85ZM9,3.3a1.3,1.3,0,0,1,.87-1.23l1.29,10.37a1.38,1.38,0,0,0-.35.32L9,9.74ZM3.25,14.36a1.43,1.43,0,0,1,.25-1.91l.12-.12a1.41,1.41,0,0,1,1.08-.51,1.48,1.48,0,0,1,.83.26A9.24,9.24,0,0,1,3.25,14.36Zm4.4-2.71a1.08,1.08,0,0,0-.13-.36l.86-.67.41.69Zm5.83,3.89a1.53,1.53,0,0,1,0,.25V16a1.43,1.43,0,0,1-1.17,1.53,9.26,9.26,0,0,1,0-3.23A1.43,1.43,0,0,1,13.48,15.54Z'/>
</svg>
`},{svgFile:"database.svg",name:"database",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M10,19c-4,0-8-1-8-3V4c0-2,4-3,8-3s8,1,8,3V16C18,18,14,19,10,19ZM3,13.53V16c0,.82,2.73,2,7,2s7-1.18,7-2V13.53C14.12,15.47,5.88,15.47,3,13.53ZM3,12c0,.82,2.73,2,7,2s7-1.18,7-2V9.53c-2.88,1.94-11.12,1.94-14,0ZM3,8c0,.82,2.73,2,7,2s7-1.18,7-2V5.53c-2.88,1.94-11.12,1.94-14,0ZM3,4c0,.82,2.73,2,7,2s7-1.18,7-2-2.73-2-7-2S3,3.18,3,4Z'/>
</svg>
`},{svgFile:"delete.svg",name:"delete",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M18,4H14A4,4,0,0,0,6,4H2V7H3V20H17V7h1ZM10,2a2,2,0,0,1,2,2H8A2,2,0,0,1,10,2Zm6,17H4V7H16ZM17,6H3V5H17ZM7,18H5V8H7Zm4,0H9V8h2Zm4,0H13V8h2Z'/>
</svg>
`},{svgFile:"deselect-all.svg",name:"deselect-all",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M19,19H6V18H18V6h1Zm-2-2H4V16H16V4h1Zm-2-2H1V1H15ZM2,14H14V2H2Zm10.71-2.71L9.41,8l3.29-3.29L11.29,3.29,8,6.59,4.71,3.29,3.29,4.71,6.59,8,3.29,11.29l1.41,1.41L8,9.41l3.29,3.29Z'/>
</svg>
`},{svgFile:"deselect.svg",name:"deselect",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M19,19H1V1H19ZM2,18H18V2H2Zm12.71-4.71L11.41,10l3.29-3.29L13.29,5.29,10,8.59,6.71,5.29,5.29,6.71,8.59,10,5.29,13.29l1.41,1.41L10,11.41l3.29,3.29Z'/>
</svg>
`},{svgFile:"double-caret-down.svg",name:"double-caret-down",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,16.41,4.29,10.71,5.71,9.29,10,13.59l4.29-4.29,1.41,1.41Zm0-5L4.29,5.71,5.71,4.29,10,8.59l4.29-4.29,1.41,1.41Z'/>
</svg>
`},{svgFile:"double-caret-left.svg",name:"double-caret-left",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M14.29,15.71,8.59,10l5.71-5.71,1.41,1.41L11.41,10l4.29,4.29Zm-5,0L3.59,10,9.29,4.29l1.41,1.41L6.41,10l4.29,4.29Z'/>
</svg>
`},{svgFile:"double-caret-right.svg",name:"double-caret-right",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10.71,15.71,9.29,14.29,13.59,10,9.29,5.71l1.41-1.41L16.41,10Zm-5,0L4.29,14.29,8.59,10,4.29,5.71,5.71,4.29,11.41,10Z'/>
</svg>
`},{svgFile:"double-caret-up.svg",name:"double-caret-up",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M14.29,15.71,10,11.41,5.71,15.71,4.29,14.29,10,8.59l5.71,5.71Zm0-5L10,6.41,5.71,10.71,4.29,9.29,10,3.59l5.71,5.71Z'/>
</svg>
`},{svgFile:"download.svg",name:"download",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm5,14H5V12H7v1h6V12h2Zm-5-2.59L6.29,8.71,7.71,7.29,9,8.59V4h2V8.59l1.29-1.29,1.41,1.41Z'/>
</svg>
`},{svgFile:"drag.svg",name:"drag",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#aaaaaa'
          d='M7,1H9V3H7Zm4,0h2V3H11ZM7,5H9V7H7ZM7,9H9v2H7Zm4,0h2v2H11Zm0-4h2V7H11ZM7,17H9v2H7Zm4,0h2v2H11ZM7,13H9v2H7Zm4,0h2v2H11Z'/>
</svg>
`},{svgFile:"edit.svg",name:"edit",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M17,1H14L12.71,2.29,11.29,3.71,2,13,1,14v5H6l1-1,9.29-9.29,1.41-1.41L19,6V3ZM6.3,17.29,2.71,13.7,12,4.41,15.59,8ZM18,5.59l-1,1L13.41,3l1-1h2.18L18,3.41Z'/>
</svg>
`},{svgFile:"email.svg",name:"email",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994' d='M0,3V17H20V3ZM16.75,5,10,11,3.25,5ZM2,15V5.89L10,13l8-7.11V15Z'/>
</svg>
`},{svgFile:"enable.svg",name:"enable",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm.55,14A5,5,0,0,0,13.13,6.1L11.88,7.66a3,3,0,1,1-3.75,0L6.88,6.1a5.06,5.06,0,0,0-.78.78A5,5,0,0,0,10,15,4.91,4.91,0,0,0,10.55,15ZM11,4H9v6h2Z'/>
</svg>
`},{svgFile:"execute.svg",name:"execute",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M6.56,20.71,7.86,11H3.11L6.78,0h9.78L14.42,6h4.76ZM5.89,9h4.25l-.7,5.29L14.83,8H11.58l2.14-6H8.22Z'/>
</svg>
`},{svgFile:"export-pdf.svg",name:"export-pdf",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M13.71,0H2V20H18V4.29ZM14,1.71,16.29,4H14ZM3,19V1H13V5h4V19Zm11.23-5.33a4,4,0,0,1,.58,0,1.83,1.83,0,0,1,.48.06c.12.05.27,0,.37.11L16,14a1.87,1.87,0,0,0-.13-.39.9.9,0,0,0-.32-.4,1.93,1.93,0,0,0-.58-.34,2.63,2.63,0,0,0-.71-.18,4.06,4.06,0,0,0-.78,0,9.78,9.78,0,0,0-1,.16,10.82,10.82,0,0,1-2-2.64c-.08-.16-.16-.32-.23-.48a13.81,13.81,0,0,0,.17-1.38V7.72l-.15.61c-.07.28-.16.54-.25.81a7.31,7.31,0,0,1-.36-1.57,4.76,4.76,0,0,1,.29-2.14A1.19,1.19,0,0,1,10,5.6a6.06,6.06,0,0,1,.25.71c.12.41.17.67.17.67a2.16,2.16,0,0,0,.36-.69,2.85,2.85,0,0,0,.1-.89,1.9,1.9,0,0,0-.2-.65.91.91,0,0,0-.22-.26.78.78,0,0,0-.69-.16c-.51.21-.51.4-.6.57a6,6,0,0,0-.26,1.31,6,6,0,0,0,0,1.48,7.3,7.3,0,0,0,.76,2.47A18.92,18.92,0,0,1,8.88,12a19.12,19.12,0,0,1-1.35,2.17A9.56,9.56,0,0,1,5.86,16a2.56,2.56,0,0,1-.37.24,3.26,3.26,0,0,1,.31-.56l.4-.59c.25-.33.38-.54.38-.54a3.82,3.82,0,0,0-.58.27,3.89,3.89,0,0,0-.6.48,3.12,3.12,0,0,0-.71.72,1.09,1.09,0,0,0-.17.7.78.78,0,0,0,.6.65,1.85,1.85,0,0,0,1.36-.55,9.39,9.39,0,0,0,1.78-2.06l1-.27c.38-.09.82-.22,1.29-.32l1.48-.31c.24,0,.49-.06.74-.1a10.13,10.13,0,0,0,1.09.68,2.32,2.32,0,0,0,1.81.32.53.53,0,0,0,.28-.44.76.76,0,0,0,0-.18l-.11.13a.47.47,0,0,1-.29.35,2.26,2.26,0,0,1-1.61-.5c-.2-.13-.38-.29-.57-.43l.14,0ZM5.4,16.45c0,.06,0,.08,0,0Zm5-2.95a11.37,11.37,0,0,0-1.23.59l-.8.5a12.2,12.2,0,0,0,1.17-2.3A12.68,12.68,0,0,0,10,10.78,10.12,10.12,0,0,0,11.86,13,9.79,9.79,0,0,0,10.4,13.5Z'/>
</svg>
`},{svgFile:"export.svg",name:"export",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M2,1H12V5h4v6h1V4.29L12.71,0H1V20H14V19H2Zm11,.71L15.29,4H13ZM14,12H4V10H14Zm0-3H4V7H14ZM4,13H14v1H8v1H4Zm16,3-3.7,3.71-1.42-1.42L16.18,17H9V15h7.18l-1.3-1.29,1.42-1.42Z'/>
</svg>
`},{svgFile:"external-link.svg",name:"external-link",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M14,9h1V19H1V5H11V6H2V18H14ZM12,1V3h3.59L10.1,8.48,11.52,9.9,17,4.41V8h2V1Z'/>
</svg>
`},{svgFile:"filter.svg",name:"filter",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M.29,1,7,7.71V19.5l5-3.75v-8L18.71,1ZM2.71,2H16.29l-5,5H7.71ZM11,15.25,8,17.5V9h3Z'/>
</svg>
`},{svgFile:"fullscreen.svg",name:"fullscreen",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M19,1V9H17V4.06L12.53,8.53,11.47,7.47,15.94,3H11V1ZM8.53,12.53,7.47,11.47,3,15.94V11H1v8H9V17H4.06Z'/>
</svg>
`},{svgFile:"gear.svg",name:"gear",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,6a4,4,0,1,0,4,4A4,4,0,0,0,10,6Zm1.37,14H8.63L7.9,17.71A8.88,8.88,0,0,1,6.08,17L3.9,18,2,16.1l1-2.19a8.88,8.88,0,0,1-.75-1.82L0,11.37V8.63L2.29,7.9A8.86,8.86,0,0,1,3,6.08L2,3.9,3.9,2,6.08,3A8.86,8.86,0,0,1,7.9,2.25L8.63,0h2.73l.73,2.29A8.88,8.88,0,0,1,13.92,3L16.1,2,18,3.9,17,6.08a8.88,8.88,0,0,1,.75,1.82L20,8.63v2.73l-2.29.73A8.91,8.91,0,0,1,17,13.92l1,2.19L16.1,18l-2.19-1a8.91,8.91,0,0,1-1.82.75Zm-2-1h1.27l.67-2.12.27-.07A8,8,0,0,0,13.65,16l.23-.13,2,1,.9-.9-1-2,.13-.23a8,8,0,0,0,.85-2.07l.07-.27L19,10.63V9.37L16.88,8.7l-.07-.27A8,8,0,0,0,16,6.35l-.13-.23,1-2-.9-.9-2,1L13.65,4a8,8,0,0,0-2.07-.85l-.27-.07L10.63,1H9.37L8.69,3.12l-.27.07A8,8,0,0,0,6.35,4l-.23.13-2-1-.9.9,1,2L4,6.35a8,8,0,0,0-.85,2.07l-.07.27L1,9.37v1.27l2.12.67.07.27A8,8,0,0,0,4,13.65l.13.23-1,2,.9.9,2-1,.23.13a8,8,0,0,0,2.07.85l.27.07ZM10,12.5A2.5,2.5,0,1,1,12.5,10,2.5,2.5,0,0,1,10,12.5Z'/>
</svg>
`},{svgFile:"group.svg",name:"group",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M17,7V4H10V2H1V18H16a3,3,0,0,0,3-3V7ZM3,15a1,1,0,0,1-1,1V3H9V5h7V7H3Zm14,0a1,1,0,0,1-1,1H4.83A3,3,0,0,0,5,15V9H17Z'/>
</svg>
`},{svgFile:"help.svg",name:"help",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1ZM8.79,11.54v-.47A2.09,2.09,0,0,1,9,10a3.41,3.41,0,0,1,1-1,4,4,0,0,0,.88-.77,1.12,1.12,0,0,0,.21-.67.72.72,0,0,0-.3-.63,1.46,1.46,0,0,0-.85-.22,4.89,4.89,0,0,0-2.17.62L7.07,6a6,6,0,0,1,3-.79,3.19,3.19,0,0,1,2.08.63,2,2,0,0,1,.77,1.68,2.24,2.24,0,0,1-.32,1.21,4.55,4.55,0,0,1-1.2,1.13,3.71,3.71,0,0,0-.77.69,1.07,1.07,0,0,0-.16.62v.38Zm-.2,2.17a1.07,1.07,0,0,1,.29-.81,1.16,1.16,0,0,1,.83-.27,1.12,1.12,0,0,1,.82.28,1.23,1.23,0,0,1,0,1.59,1.11,1.11,0,0,1-.81.29,1.14,1.14,0,0,1-.83-.28,1.06,1.06,0,0,1-.31-.8Z'/>
</svg>
`},{svgFile:"hide.svg",name:"hide",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M19.77,9.69a19,19,0,0,0-3.38-3.27l-.58.84A18.28,18.28,0,0,1,18.74,10c-.92,1.08-4.27,4.69-8.24,5l-.69,1H10c5.36,0,9.59-5.46,9.77-5.69L20,10ZM1.26,10c1-1.13,4.55-5,8.74-5a7.47,7.47,0,0,1,2.26.36l.6-.87A9,9,0,0,0,10,4C4.64,4,.41,9.46.23,9.69L0,10l.23.31a18.13,18.13,0,0,0,5.48,4.58l.57-.83A17.27,17.27,0,0,1,1.26,10ZM10,6a4,4,0,0,0-2.85,6.8l1.17-1.71A2,2,0,0,1,10,8a2.84,2.84,0,0,1,.42,0l1.17-1.7A3.84,3.84,0,0,0,10,6ZM6.82,18.57,5.18,17.43l11-16,1.65,1.13Z'/>
</svg>
`},{svgFile:"ignore.svg",name:"ignore",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,19a9,9,0,1,1,9-9A9,9,0,0,1,10,19ZM10,5a5,5,0,1,0,5,5A5,5,0,0,0,10,5Zm0,2a3,3,0,0,1,2.82,2H7.18A3,3,0,0,1,10,7Zm0,6a3,3,0,0,1-2.82-2h5.63A3,3,0,0,1,10,13Z'/>
</svg>
`},{svgFile:"image.svg",name:"image",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M0,2V12.76l-.07,0,.07.1V18H20V2ZM1,3H19V9.71l-5.46,2.66-7.09-4L1,12.07ZM1,17V14.35l.07.1,5.48-3.77,6.91,4L19,11.94V17ZM12,7a2,2,0,1,1,2,2A2,2,0,0,1,12,7Z'/>
</svg>
`},{svgFile:"key.svg",name:"key",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M6,20H0V15.29L6.74,8.55a6.15,6.15,0,0,1,.91-6.91c2.4-2.4,6.75-2,9.71,1h0c3,3,3.4,7.31,1,9.71a6.07,6.07,0,0,1-6.23,1.23L10.71,15H9v2H6ZM1,19H5V16H8V14h2.29l1.59-1.59.31.14a5.06,5.06,0,0,0,5.46-.91c2-2,1.55-5.72-1-8.28s-6.28-3-8.29-1C6.91,3.8,6.69,6.18,7.79,8.44l.16.32L1,15.71v1.59L8.65,9.65l.71.71L1,18.71Zm15.88-8.91L9.66,3.34C11,2,13.57,2.57,15.5,4.5S17.88,8.74,16.88,10.09Z'/>
</svg>
`},{svgFile:"lock.svg",name:"lock",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M16,8V7A6,6,0,0,0,4,7V8H2V20H18V8ZM7,7a3,3,0,0,1,6,0V8H7ZM17,19H3V9H17Zm-6-2H9V11h2Z'/>
</svg>
`},{svgFile:"menu.svg",name:"menu",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,2A2,2,0,1,1,8,4,2,2,0,0,1,10,2Zm0,6a2,2,0,1,1-2,2A2,2,0,0,1,10,8Zm0,6a2,2,0,1,1-2,2A2,2,0,0,1,10,14Z'/>
</svg>
`},{svgFile:"move-down.svg",name:"move-down",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm5.21,7.71L13.79,7.29,10,11.09,6.21,7.29,4.79,8.71,10,13.91Z'/>
</svg>
`},{svgFile:"ncm-config-change-template.svg",name:"ncm-config-change-template",category:e.Tab,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M20,2.5A2.5,2.5,0,0,0,17.5,0H4.5A2.5,2.5,0,0,0,2,2.5V15H0v2.5A2.5,2.5,0,0,0,2.5,20h12A2.5,2.5,0,0,0,17,17.5V5h3ZM2.5,19A1.5,1.5,0,0,1,1,17.5V16H12v1.5A2.49,2.49,0,0,0,12,18s0,.09,0,.14a2.48,2.48,0,0,0,.09.3l.06.15a2.47,2.47,0,0,0,.14.26l.08.13,0,.06ZM16,17.5a1.5,1.5,0,0,1-3,0V15H3V2.5A1.5,1.5,0,0,1,4.5,1H16ZM19,4H17V1h.5A1.5,1.5,0,0,1,19,2.5ZM5,5h9V7H5ZM5,8h9v2H5Zm0,3h9v2H5Z'/>
</svg>
`},{svgFile:"orion-ape-backup.svg",name:"orion-ape-backup",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M7,9.26,5,8V7L7,8.26Zm0,1L5,9v1l2,1.26Zm2,9.82L0,14.79V12.31l3-1.74V4.19L11.52-.07,17,3.22V9.75l3,2v2.06ZM1,14.21l8,4.71,10-5.71v-.94L17,11V12.3L8.49,17.09,3,13.79V11.73L1,12.89Zm8-6.4v7.84l7-3.94V4.32ZM4,13.23l4,2.4V7.79L4,5.39Zm.53-8.68,4,2.4,6.95-3.47-4-2.4Zm8,8A2.5,2.5,0,0,1,10,10a2.63,2.63,0,0,1,.62-1.62l.76.65A1.61,1.61,0,0,0,11,10a1.5,1.5,0,0,0,3,0,1.4,1.4,0,0,0-.37-1l.74-.68A2.39,2.39,0,0,1,15,10,2.5,2.5,0,0,1,12.5,12.5ZM13,10H12V7h1Z'/>
</svg>
`},{svgFile:"orion-sitemaster.svg",name:"orion-sitemaster",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M15,5H5V1L7.5,3,10,0l2.5,3L15,1ZM7,8.26,5,7V8L7,9.26Zm10,1.8V3.26l-1-.63v9.08L9,15.64V7.81L12.6,6H10.37l-1.82.93L7,6H5L8,7.78v7.83L4,13.22V3.69l-1,.5v6.17L0,12v3l9,5,11-6V12.09Zm-10,.2L5,9v1l2,1.26Z'/>
</svg>
`},{svgFile:"overview.svg",name:"overview",category:e.Tab,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M10,.59.29,10.29l1.41,1.41L2,11.41V20H18V11.41l.29.29,1.41-1.41ZM12,18H8V11h4Zm4,0H13V10H7v8H4V9.41l6-6,6,6Z'/>
</svg>
`},{svgFile:"patch-manager01.svg",name:"patch-manager01",category:e.Tab,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M12.59,3H11V1h8V9H17V7.41l-.29.29L15.29,6.29,17,4.59V3H15.41L13.71,4.71,12.29,3.29ZM4.29,17.29a1.13,1.13,0,0,1-1.59,0,1.12,1.12,0,0,1,0-1.59l2-2L3.29,12.29l-2,2a3.12,3.12,0,0,0,4.41,4.41l2-2L6.29,15.29Zm15.06-3.94-6,6a.5.5,0,0,1-.71,0l-12-12a.5.5,0,0,1,0-.71l6-6a.5.5,0,0,1,.71,0l12,12A.5.5,0,0,1,19.35,13.35ZM4,9.29,9.29,4,7,1.71,1.71,7Zm6,6L15.29,10,10,4.71,4.71,10ZM18.29,13,16,10.71,10.71,16,13,18.29ZM7.45,9.07a.81.81,0,1,0,.81.81A.81.81,0,0,0,7.45,9.07ZM9.88,6.64a.81.81,0,1,0,.81.81A.81.81,0,0,0,9.88,6.64Zm0,4.85a.81.81,0,1,0,.81.81A.81.81,0,0,0,9.88,11.49ZM12.3,9.07a.81.81,0,1,0,.81.81A.81.81,0,0,0,12.3,9.07Z'/>
</svg>
`},{svgFile:"plus.svg",name:"plus",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994'
             points='11 15 9 15 9 11 5 11 5 9 9 9 9 5 11 5 11 9 15 9 15 11 11 11 11 15'/>
</svg>
`},{svgFile:"port.svg",name:"port",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M13,19H7V15H4V13H1V1H19V13H16v2H13ZM8,18h4V14h3V12h3V2H2V12H5v2H8ZM17,8H15V3h2ZM14,8H12V3h2ZM11,8H9V3h2ZM8,8H6V3H8ZM5,8H3V3H5Z'/>
</svg>
`},{svgFile:"power-off.svg",name:"power-off",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm1,6H9v6h2Zm-1,9a6,6,0,1,1,6-6A6,6,0,0,1,10,16ZM10,6a4,4,0,1,0,4,4A4,4,0,0,0,10,6Z'/>
</svg>
`},{svgFile:"power-on.svg",name:"power-on",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm.55,14A5,5,0,0,0,13.13,6.1L11.88,7.66a3,3,0,1,1-3.75,0L6.88,6.1a5.06,5.06,0,0,0-.78.78A5,5,0,0,0,10,15,4.91,4.91,0,0,0,10.55,15ZM11,4H9v6h2Z'/>
</svg>
`},{svgFile:"printer.svg",name:"printer",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M19,5H16V1H4V5H1V16H3v3H17V16h2ZM5,2H15V5H5ZM15,17H5V12H15Zm3-2H17V10H3v5H2V6H18Zm-5-1H7V13h6Zm4-5H16V8h1Zm-4,7H7V15h6Z'/>
</svg>
`},{svgFile:"reload.svg",name:"reload",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,19a9,9,0,1,1,9-9A9,9,0,0,1,10,19Zm5.87-7.79A6,6,0,0,1,10,16a5.6,5.6,0,0,1-1.21-.13A6,6,0,0,1,5.52,6H4V4H9V9H7V7.35a3.8,3.8,0,0,0-.93,1.84A4,4,0,1,0,10.8,6.08l.4-2A6,6,0,0,1,15.87,11.21Z'/>
</svg>
`},{svgFile:"remote-access-vpn-tunnel.svg",name:"remote-access-vpn-tunnel",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M9,8V1h2V8h1.79L10,12.84,7.21,8Zm10,7v4H1V15H2V4H8V5H3V15H17V5H12V4h6V15Zm-1,1H13v1H7V16H2v2H18Z'/>
</svg>
`},{svgFile:"remove.svg",name:"remove",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm4.71,12.29L11.41,10l3.29-3.29L13.29,5.29,10,8.59,6.71,5.29,5.29,6.71,8.59,10,5.29,13.29l1.41,1.41L10,11.41l3.29,3.29Z'/>
</svg>
`},{svgFile:"reset.svg",name:"reset",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,19a9,9,0,1,1,9-9A9,9,0,0,1,10,19Zm0-5.25v1.5h0A5.24,5.24,0,0,1,4.75,10,5.4,5.4,0,0,1,6.59,6H5V5H9V9H8V6.82A3.86,3.86,0,0,0,6.25,10,3.76,3.76,0,0,0,10,13.75Zm3.32.25H15v1H11V11h1v2.11a3.77,3.77,0,0,0-2-7V4.65a5.24,5.24,0,0,1,4.85,3.27,5.17,5.17,0,0,1,0,4A5.27,5.27,0,0,1,13.32,14Z'/>
</svg>
`},{svgFile:"run.svg",name:"run",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1ZM6,14.52v-9L16.54,10Zm2-6v3L11.46,10Z'/>
</svg>
`},{svgFile:"schedule.svg",name:"schedule",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M4,7V9H9.1A7,7,0,0,1,14,7Zm0,3v2H7.3a7.5,7.5,0,0,1,1-2Zm3.1,3H4v2H7.1A3.4,3.4,0,0,1,7,14,3.4,3.4,0,0,1,7.1,13ZM15,15H11V13h2V10h2Zm-1,5a6.08,6.08,0,0,1-6-6,6.08,6.08,0,0,1,6-6,6.08,6.08,0,0,1,6,6A6.08,6.08,0,0,1,14,20ZM14,9a5,5,0,1,0,5,5A5.07,5.07,0,0,0,14,9ZM9,20H1V0H12.71L17,4.29V7H16V5H12V1H2V19H9ZM13,4h2.29L13,1.71Z'/>
</svg>
`},{svgFile:"search.svg",name:"search",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M18.79,20.21,14.62,16A9,9,0,1,1,16,14.62l4.18,4.18ZM9,2a7,7,0,1,0,7,7A7,7,0,0,0,9,2Z'/>
</svg>
`},{svgFile:"critical.svg",name:o.Critical,cat_namespace:n.Severity,category:e.Severity,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#D50000' cx='10' cy='10' r='10'/>\r
<path fill='#FFFFFF' d='M9,13h2v2H9V13z M9,5h2v6H9V5z'/>\r
</svg>\r
`},{svgFile:"error.svg",name:o.Error,cat_namespace:n.Severity,category:e.Severity,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<polygon fill='#D50000' points='5.858,20 0,14.143 0,5.858 5.858,0 14.143,0 20,5.858 20,14.143 14.143,20 '/>\r
<path fill='none' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' d='M14,6l-8,8 M6,6l8,8'/>\r
</svg>\r
`},{svgFile:"info.svg",name:o.Info,cat_namespace:n.Severity,category:e.Severity,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#FFFFFF' stroke='#297994' stroke-miterlimit='10' cx='10' cy='10' r='9.5'/>\r
<path fill='#297994' d='M9,5h2v2H9V5z M9,15h2V9H9V15z'/>\r
</svg>\r
`},{svgFile:"ok.svg",name:o.Ok,cat_namespace:n.Severity,category:e.Severity,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' id='Ok'\r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#30B230' cx='10' cy='10' r='10'/>\r
<polyline fill='none' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' points='15,7 9,13 5,9 '/>\r
</svg>\r
`},{svgFile:"unknown.svg",name:o.Unknown,cat_namespace:n.Severity,category:e.Severity,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#D5D5D4' cx='10' cy='10' r='10'/>\r
<path fill='#90908F' d='M8.956,11.412v-0.57c0-0.434,0.088-0.799,0.266-1.098c0.177-0.298,0.491-0.589,0.941-0.872\r
	c0.358-0.226,0.616-0.429,0.772-0.61c0.156-0.182,0.235-0.389,0.235-0.624c0-0.186-0.084-0.333-0.252-0.441\r
	c-0.167-0.108-0.386-0.163-0.656-0.163c-0.668,0-1.448,0.236-2.341,0.709L7,5.941C8.101,5.314,9.25,5,10.448,5\r
	c0.985,0,1.76,0.216,2.319,0.65c0.562,0.434,0.844,1.023,0.844,1.771c0,0.535-0.125,0.998-0.375,1.389\r
	c-0.25,0.392-0.647,0.762-1.197,1.111c-0.464,0.301-0.754,0.521-0.871,0.66c-0.117,0.14-0.176,0.304-0.176,0.494v0.338L8.956,11.412\r
	L8.956,11.412z M8.671,13.732c0-0.406,0.119-0.719,0.354-0.94C9.262,12.57,9.61,12.46,10.07,12.46c0.442,0,0.782,0.112,1.019,0.336\r
	c0.236,0.224,0.354,0.536,0.354,0.938c0,0.401-0.123,0.714-0.367,0.935C10.829,14.891,10.495,15,10.07,15\r
	c-0.438,0-0.781-0.109-1.028-0.329C8.795,14.453,8.671,14.141,8.671,13.732z'/>\r
</svg>\r
`},{svgFile:"warning.svg",name:o.Warning,cat_namespace:n.Severity,category:e.Severity,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<polygon fill='#F9C700' points='20,20 0,20 10,0 '/>\r
<path fill='#333333' fill-opacity='0.6' d='M11,17H9v-2h2V17z M11,7H9v6h2V7z'/>\r
</svg>\r
`},{svgFile:"signal-0.svg",name:"signal-0",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M17,19H16V1h1Zm-3,0H13V16h1Zm-4,0H9V14h1ZM7,19H6V16H7ZM4,19H3V13H4Zm10.78-5.78L11.56,10l3.22-3.22L13.22,5.22,10,8.44,6.78,5.22,5.22,6.78,8.44,10,5.22,13.22l1.56,1.55L10,11.56l3.22,3.22Z'/>
</svg>
`},{svgFile:"star-full.svg",name:"star-full",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994'
             points='10 0.5 13.09 6.75 19.99 7.76 14.99 12.63 16.17 19.5 10 16.25 3.83 19.5 5 12.63 0.01 7.76 6.91 6.75 10 0.5'/>
</svg>
`},{svgFile:"ok.svg",name:c.Ok,cat_namespace:n.State,category:e.State,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' id='Ok'\r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#30B230' cx='10' cy='10' r='10'/>\r
<polyline fill='none' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' points='15,7 9,13 5,9 '/>\r
</svg>`},{svgFile:"acknowledged.svg",name:"status_acknowledged",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>
<svg version='1.1'  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
	 width='20' height='20' viewBox='0 0 20 20' style='enable-background:new 0 0 20 20;' xml:space='preserve'>
<g id='acknowledged'>
    <circle fill='#FFFFFF' cx='10' cy='10' r='10'/>
    <path fill='#297994' d='M10,3c1.4,0,2.6,1.7,2.6,3.7s-1.2,3.7-2.6,3.7S7.4,8.7,7.4,6.7S8.6,3,10,3z M12.5,10.5
    	c-0.1,0.6-0.3,1.2-0.6,1.6c-0.5,0.7-1.1,1.2-1.9,1.2c-0.7,0-1.4-0.5-1.9-1.2c-0.3-0.5-0.5-1-0.6-1.6c-1.8,0.7-3,2.2-3,3.9
    	c0,0.7,0.6,1.3,1.3,1.3c0.2,0,0.4-0.1,0.6-0.1c0.7,0.8,2,1.4,3.6,1.4c1.5,0,2.9-0.6,3.6-1.4c0.2,0.1,0.4,0.1,0.6,0.1
    	c0.7,0,1.3-0.6,1.3-1.3C15.5,12.7,14.3,11.2,12.5,10.5z'/>
</g>
</svg>
`},{svgFile:"critical.svg",name:"status_critical",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#D50000' cx='10' cy='10' r='10'/>\r
<path fill='#FFFFFF' d='M11,15H9v-2h2V15z M11,5H9v6h2V5z'/>\r
</svg>\r
`},{svgFile:"disabled.svg",name:"status_disabled",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#D5D5D5' cx='10' cy='10' r='10'/>\r
<path fill='#FFFFFF' d='M13.98,4.25l-9.73,9.73C3.46,12.85,3,11.48,3,10c0-3.87,3.13-7,7-7C11.48,3,12.85,3.46,13.98,4.25z\r
	 M15.75,6.02l-9.73,9.73C7.15,16.54,8.52,17,10,17c3.87,0,7-3.13,7-7C17,8.52,16.54,7.15,15.75,6.02z'/>\r
</svg>\r
`},{svgFile:"down.svg",name:"status_down",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<polygon fill='#950000' points='5.858,20 0,14.143 0,5.858 5.858,0 14.143,0 20,5.858 20,14.143 14.143,20 '/>\r
</svg>\r
`},{svgFile:"external.svg",name:"status_external",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#9966CC' cx='10' cy='10' r='10'/>\r
<path fill='none' stroke='#FFFFFF' stroke-width='2' stroke-miterlimit='10' d='M7,6h6.997L14,13'/>\r
<line fill='none' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' x1='14' y1='6' x2='6' y2='14'/>\r
</svg>\r
`},{svgFile:"inactive.svg",name:"status_inactive",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#D5D5D4' cx='10' cy='10' r='10'/>\r
<path fill='#90908F' d='M8.956,11.412v-0.57c0-0.434,0.088-0.799,0.266-1.098c0.177-0.298,0.491-0.589,0.941-0.872\r
	c0.358-0.226,0.616-0.429,0.772-0.61c0.156-0.182,0.235-0.389,0.235-0.624c0-0.186-0.084-0.333-0.252-0.441\r
	c-0.167-0.108-0.386-0.163-0.656-0.163c-0.668,0-1.448,0.236-2.341,0.709L7,5.941C8.101,5.314,9.25,5,10.448,5\r
	c0.985,0,1.76,0.216,2.319,0.65c0.562,0.434,0.844,1.023,0.844,1.771c0,0.535-0.125,0.998-0.375,1.389\r
	c-0.25,0.392-0.647,0.762-1.197,1.111c-0.464,0.301-0.754,0.521-0.871,0.66c-0.117,0.14-0.176,0.304-0.176,0.494v0.338L8.956,11.412\r
	L8.956,11.412z M8.671,13.732c0-0.406,0.119-0.719,0.354-0.94C9.262,12.57,9.61,12.46,10.07,12.46c0.442,0,0.782,0.112,1.019,0.336\r
	c0.236,0.224,0.354,0.536,0.354,0.938c0,0.401-0.123,0.714-0.367,0.935C10.829,14.891,10.495,15,10.07,15\r
	c-0.438,0-0.781-0.109-1.028-0.329C8.795,14.453,8.671,14.141,8.671,13.732z'/>\r
</svg>`},{svgFile:"issues.svg",name:"status_issues",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<polygon fill='#F9C700' points='20,20 0,20 10,0 '/>\r
<path fill='#333333' fill-opacity='0.6' d='M11,17H9v-2h2V17z M11,7H9v6h2V7z'/>\r
</svg>\r
`},{svgFile:"missing.svg",name:"status_missing",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#BD6ADF' cx='10' cy='10' r='10'/>\r
<circle fill='#FFFFFF' cx='10' cy='10' r='5'/>\r
</svg>\r
`},{svgFile:"mixed.svg",name:"status_mixed",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<polygon fill='#F9C700' points='20,20 0,20 10,0 '/>\r
<path fill='#333333' fill-opacity='0.6' d='M11,17H9v-2h2V17z M11,7H9v6h2V7z'/>\r
</svg>\r
`},{svgFile:"reserved.svg",name:"status_reserved",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#9966CC' cx='10' cy='10' r='10'/>\r
</svg>\r
`},{svgFile:"notrunning.svg",name:"status_notrunning",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#D5D5D5' cx='10' cy='10' r='10'/>\r
<path fill='none' stroke='#D50000' stroke-width='1.5' stroke-miterlimit='10' d='M14,6l-8,8 M6,6l8,8'/>\r
</svg>\r
`},{svgFile:"shutdown.svg",name:"status_shutdown",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#D5D5D5' cx='10' cy='10' r='10'/>\r
<path fill='none' stroke='#D50000' stroke-width='1.5' stroke-miterlimit='10' d='M14,6l-8,8 M6,6l8,8'/>\r
</svg>\r
`},{svgFile:"sleep.svg",name:"status_sleep",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#7590C9' cx='10' cy='10' r='10'/>\r
<path fill='#FFFFFF' d='M15,10l-2.898,3H15v2h-5v-2l2.904-3H10V8h5V10z M10,7V5H5v2h2.904L5,10v2h5v-2H7.102L10,7z'/>\r
</svg>\r
`},{svgFile:"standby.svg",name:"status_standby",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#004EFF' cx='10' cy='10' r='10'/>\r
</svg>\r
`},{svgFile:"suspended.svg",name:"status_suspended",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#3399CC' cx='10' cy='10' r='10'/>\r
<path fill='#FFFFFF' d='M9,6H7v8h2V6z M13,6h-2v8h2V6z'/>\r
</svg>\r
`},{svgFile:"testing.svg",name:"status_testing",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#D3D3D3' cx='10' cy='10' r='10'/>\r
<polyline fill='none' stroke='#646464' stroke-width='1.5' stroke-miterlimit='10' points='15,7 9,13 5,9 '/>\r
</svg>\r
`},{svgFile:"thresholds.svg",name:"thresholds",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>
<path fill='#767676' d='M39.88 49.79h-.26A3 3 0 0137.13 48L24.5 19.3l-8 12.33A3 3 0 0114 33H3a3 3 0 010-6h9.37l10.11-15.63A3 3 0 0125.24 10a3 3 0 012.51 1.78l12.66 28.77 6.09-9.21A3 3 0 0149 30h11a3 3 0 010 6h-9.39l-8.23 12.44a3 3 0 01-2.5 1.35z'/>
</svg>
`},{svgFile:"transient.svg",name:"status_transient",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#6BBAE2' cx='10' cy='10' r='10'/>\r
</svg>\r
`},{svgFile:"undefined.svg",name:"status_undefined",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#D5D5D4' cx='10' cy='10' r='10'/>\r
<path fill='#90908F' d='M8.956,11.412v-0.57c0-0.434,0.088-0.799,0.266-1.098c0.177-0.298,0.491-0.589,0.941-0.872\r
	c0.358-0.226,0.616-0.429,0.772-0.61c0.156-0.182,0.235-0.389,0.235-0.624c0-0.186-0.084-0.333-0.252-0.441\r
	c-0.167-0.108-0.386-0.163-0.656-0.163c-0.668,0-1.448,0.236-2.341,0.709L7,5.941C8.101,5.314,9.25,5,10.448,5\r
	c0.985,0,1.76,0.216,2.319,0.65c0.562,0.434,0.844,1.023,0.844,1.771c0,0.535-0.125,0.998-0.375,1.389\r
	c-0.25,0.392-0.647,0.762-1.197,1.111c-0.464,0.301-0.754,0.521-0.871,0.66c-0.117,0.14-0.176,0.304-0.176,0.494v0.338L8.956,11.412\r
	L8.956,11.412z M8.671,13.732c0-0.406,0.119-0.719,0.354-0.94C9.262,12.57,9.61,12.46,10.07,12.46c0.442,0,0.782,0.112,1.019,0.336\r
	c0.236,0.224,0.354,0.536,0.354,0.938c0,0.401-0.123,0.714-0.367,0.935C10.829,14.891,10.495,15,10.07,15\r
	c-0.438,0-0.781-0.109-1.028-0.329C8.795,14.453,8.671,14.141,8.671,13.732z'/>\r
</svg>`},{svgFile:"unknown.svg",name:"status_unknown",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#D5D5D4' cx='10' cy='10' r='10'/>\r
<path fill='#90908F' d='M8.956,11.412v-0.57c0-0.434,0.088-0.799,0.266-1.098c0.177-0.298,0.491-0.589,0.941-0.872\r
	c0.358-0.226,0.616-0.429,0.772-0.61c0.156-0.182,0.235-0.389,0.235-0.624c0-0.186-0.084-0.333-0.252-0.441\r
	c-0.167-0.108-0.386-0.163-0.656-0.163c-0.668,0-1.448,0.236-2.341,0.709L7,5.941C8.101,5.314,9.25,5,10.448,5\r
	c0.985,0,1.76,0.216,2.319,0.65c0.562,0.434,0.844,1.023,0.844,1.771c0,0.535-0.125,0.998-0.375,1.389\r
	c-0.25,0.392-0.647,0.762-1.197,1.111c-0.464,0.301-0.754,0.521-0.871,0.66c-0.117,0.14-0.176,0.304-0.176,0.494v0.338L8.956,11.412\r
	L8.956,11.412z M8.671,13.732c0-0.406,0.119-0.719,0.354-0.94C9.262,12.57,9.61,12.46,10.07,12.46c0.442,0,0.782,0.112,1.019,0.336\r
	c0.236,0.224,0.354,0.536,0.354,0.938c0,0.401-0.123,0.714-0.367,0.935C10.829,14.891,10.495,15,10.07,15\r
	c-0.438,0-0.781-0.109-1.028-0.329C8.795,14.453,8.671,14.141,8.671,13.732z'/>\r
</svg>`},{svgFile:"unmanaged.svg",name:"status_unmanaged",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#7591CA' cx='10' cy='10' r='10'/>\r
<path fill='none' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' d='M14,6l-8,8 M6,6l8,8'/>\r
</svg>\r
`},{svgFile:"unplugged.svg",name:"status_unplugged",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#3CAADD' cx='10' cy='10' r='10'/>\r
<path fill='#FFFFFF' d='M15,9h-3V7h3V9z M15,11h-3v2h3V11z M9,6c-2.21,0-4,1.79-4,4s1.79,4,4,4h2V6H9z'/>\r
</svg>\r
`},{svgFile:"unreachable.svg",name:"status_unreachable",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='utf-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.0//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>\r
<svg version='1.0' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#646464' cx='10' cy='10' r='10'/>\r
<path fill='none' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' d='M14,6l-8,8 M6,6l8,8'/>\r
</svg>\r
`},{svgFile:"up.svg",name:"status_up",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' id='Ok'\r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<circle fill='#30B230' cx='10' cy='10' r='10'/>\r
<polyline fill='none' stroke='#FFFFFF' stroke-width='1.5' stroke-miterlimit='10' points='15,7 9,13 5,9 '/>\r
</svg>`},{svgFile:"used.svg",name:"status_used",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<polygon fill='#F9C700' points='20,20 0,20 10,0 '/>\r
<path fill='#333333' fill-opacity='0.6' d='M11,17H9v-2h2V17z M11,7H9v6h2V7z'/>\r
</svg>\r
`},{svgFile:"warning.svg",name:"status_warning",cat_namespace:n.Status,category:e.HealthStatus,code:`<?xml version='1.0' encoding='UTF-8'?>\r
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\r
<svg version='1.1' \r
	 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'\r
	 x='0px' y='0px' viewBox='0 0 20 20' width='20' height='20' enable-background='new 0 0 20 20' xml:space='preserve'>\r
<polygon fill='#F9C700' points='20,20 0,20 10,0 '/>\r
<path fill='#333333' fill-opacity='0.6' d='M11,17H9v-2h2V17z M11,7H9v6h2V7z'/>\r
</svg>\r
`},{svgFile:"step-active.svg",name:"step-active",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <circle fill='#204a63' cx='10' cy='10' r='10'/>
</svg>
`},{svgFile:"step-complete.svg",name:"step-complete",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm5.53,6.53L14.47,6.47,9,11.94,5.53,8.47,4.47,9.53,9,14.06Z'/>
</svg>
`},{svgFile:"step.svg",name:"step",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#aaaaaa'
          d='M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20ZM10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Z'/>
</svg>
`},{svgFile:"table.svg",name:"table",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M0,2V17H20V2Zm7,9h6v2H7Zm6-1H7V8h6ZM6,8v2H1V8Zm0,5H1V11H6ZM1,16V14H6v2Zm6,0V14h6v2Zm12,0H14V14h5Zm0-3H14V11h5Zm0-3H14V8h5ZM14,4h4V6H14ZM8,4h4V6H8ZM2,4H6V6H2Z'/>
</svg>
`},{svgFile:"tag.svg",name:"tag",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M7.71,20H0V12.29L12.17.13A1.25,1.25,0,0,1,13-.21a1.18,1.18,0,0,1,.83.37l6,6a1.21,1.21,0,0,1,.36.88,1.18,1.18,0,0,1-.37.83ZM1,19H7.29L19.15,7.15a.22.22,0,0,0,0-.28l-6-6a.21.21,0,0,0-.28,0L12.5.5l.35.35L1,12.71Zm18.35-7.65-.71-.71-8,8,.71.71ZM13.53,5.53,12.47,4.47l-7,7,1.06,1.06Zm0,4L12.47,8.47l-5,5,1.06,1.06Zm-10,8.72A1.75,1.75,0,1,1,5.25,16.5,1.75,1.75,0,0,1,3.5,18.25Zm0-2.5a.75.75,0,1,0,.75.75A.75.75,0,0,0,3.5,15.75Z'/>
</svg>
`},{svgFile:"tools.svg",name:"tools",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M3.31,19.94A3.32,3.32,0,0,1,1,14.28L7.38,7.86A5.89,5.89,0,0,1,8.45,1.58a6,6,0,0,1,6.72-1,.5.5,0,0,1,.13.8L11.67,5,15,8.26l3.63-3.63A.5.5,0,0,1,19,4.49a.5.5,0,0,1,.37.27,5.92,5.92,0,0,1-1,6.64l0,0a5.91,5.91,0,0,1-6.32,1.12L5.66,19A3.31,3.31,0,0,1,3.31,19.94Zm9.25-19a5,5,0,0,0-3.4,1.33,4.89,4.89,0,0,0-.74,5.47.5.5,0,0,1-.09.58L1.67,15A2.32,2.32,0,0,0,5,18.26l6.66-6.66a.5.5,0,0,1,.57-.1,4.93,4.93,0,0,0,5.52-.79,4.93,4.93,0,0,0,1.06-4.85L15.31,9.32a.5.5,0,0,1-.71,0l-4-4a.5.5,0,0,1,0-.71l3.45-3.45A5,5,0,0,0,12.56.95ZM3.7,17.64l6-6a1,1,0,1,0-1.41-1.41l-6,6A1,1,0,1,0,3.7,17.64Z'/>
</svg>
`},{svgFile:"tools.svg",name:"tools",category:e.Tab,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M14,5V1H6V5H1V19H19V5ZM7,3h6V5H7ZM18,18H2V11H4v2H6V11h8v2h2V11h2Zm0-8H16V9H14v1H6V9H4v1H2V6H18Z'/>
</svg>
`},{svgFile:"triangle-down.svg",name:"triangle-down",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994' points='5 7 15 7 10 13 5 7'/>
</svg>
`},{svgFile:"triangle-left.svg",name:"triangle-left",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994' points='13 5 13 15 7 10 13 5'/>
</svg>
`},{svgFile:"triangle-right.svg",name:"triangle-right",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994' points='7 15 7 5 13 10 7 15'/>
</svg>
`},{svgFile:"triangle-up.svg",name:"triangle-up",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <polygon fill='#297994' points='15 13 5 13 10 7 15 13'/>
</svg>
`},{svgFile:"undo.svg",name:"undo",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,19a9,9,0,1,1,9-9A9,9,0,0,1,10,19Zm7-8v1H15V11a4,4,0,0,0-8-.41L8.29,9.32l1.42,1.42L7,13.44l-1,1-1-1-2.71-2.7L3.71,9.32,5,10.63A6,6,0,0,1,17,11Z'/>
</svg>
`},{svgFile:"upload.svg",name:"upload",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,19a9,9,0,1,1,9-9A9,9,0,0,1,10,19Zm5-4H5V12H7v1h6V12h2ZM13.71,7.29,12.29,8.71,11,7.41V12H9V7.41L7.71,8.71,6.29,7.29,10,3.59Z'/>
</svg>
`},{svgFile:"user.svg",name:"user",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M10,11.75C7.62,11.75,5.75,9.22,5.75,6S7.62.25,10,.25,14.25,2.83,14.25,6,12.34,11.75,10,11.75Zm0-10C8.51,1.75,7.25,3.7,7.25,6S8.51,10.25,10,10.25,12.75,8.3,12.75,6,11.49,1.75,10,1.75ZM10.34,20H10A6.79,6.79,0,0,1,5,18.22a2.3,2.3,0,0,1-.71.11A2.33,2.33,0,0,1,2,16a6.48,6.48,0,0,1,4.44-5.81L7,10l.09.59a5.24,5.24,0,0,0,.77,2A2.64,2.64,0,0,0,10,14a2.62,2.62,0,0,0,2.09-1.35,5.3,5.3,0,0,0,.78-2.07L13,10l.56.19A6.47,6.47,0,0,1,18,16v0a2.33,2.33,0,0,1-2.33,2.33,2.27,2.27,0,0,1-.71-.11A6.86,6.86,0,0,1,10.34,20ZM10,19a5.92,5.92,0,0,0,4.52-1.72l.26-.26.33.17a1.29,1.29,0,0,0,.59.14A1.33,1.33,0,0,0,17,16a5.47,5.47,0,0,0-3.23-4.67A6.24,6.24,0,0,1,13,13.17,3.61,3.61,0,0,1,10,15a3.64,3.64,0,0,1-3-1.86,6.15,6.15,0,0,1-.78-1.8A5.47,5.47,0,0,0,3,16a1.33,1.33,0,0,0,1.33,1.3,1.28,1.28,0,0,0,.59-.14L5.25,17l.26.26A5.89,5.89,0,0,0,10,19Z'/>
</svg>
`},{svgFile:"user.svg",name:"user",category:e.Tab,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M10,11.25c-2.38,0-4.25-2.53-4.25-5.75S7.62-.25,10-.25s4.25,2.58,4.25,5.75S12.34,11.25,10,11.25Zm0-10C8.51,1.25,7.25,3.2,7.25,5.5S8.51,9.75,10,9.75,12.75,7.8,12.75,5.5,11.49,1.25,10,1.25ZM10.34,20H10A6.79,6.79,0,0,1,5,18.22a2.3,2.3,0,0,1-.71.11A2.33,2.33,0,0,1,2,16a6.48,6.48,0,0,1,4.44-5.81L7,10l.09.59a5.25,5.25,0,0,0,.77,2A2.64,2.64,0,0,0,10,14a2.61,2.61,0,0,0,2.09-1.34,5.31,5.31,0,0,0,.78-2.07L13,10l.56.19A6.47,6.47,0,0,1,18,16v0a2.33,2.33,0,0,1-2.33,2.33,2.3,2.3,0,0,1-.71-.11A6.85,6.85,0,0,1,10.34,20ZM10,19a5.86,5.86,0,0,0,4.52-1.72l.26-.26.33.17a1.29,1.29,0,0,0,.59.14A1.33,1.33,0,0,0,17,16a5.47,5.47,0,0,0-3.23-4.67A6.25,6.25,0,0,1,13,13.17,3.6,3.6,0,0,1,10,15a3.64,3.64,0,0,1-3-1.85,6.17,6.17,0,0,1-.78-1.8A5.47,5.47,0,0,0,3,16a1.33,1.33,0,0,0,1.33,1.3,1.28,1.28,0,0,0,.59-.14L5.25,17l.26.26A5.87,5.87,0,0,0,10,19Z'/>
</svg>
`},{svgFile:"virtual-host.svg",name:"virtual-host",cat_namespace:n.Object,category:e.Object,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#767676'
          d='M2,18H4v2H2Zm14,2h2V18H16Zm-5-4.07V18h4v2H5V18H9V15.93a8,8,0,1,1,2,0ZM14.3,3.17,14.92,3A7,7,0,0,0,11.11,1.1c.25.33.53.74.84,1.23a2.19,2.19,0,0,1,2.36.84ZM12.75,12.5a.75.75,0,1,0,.75-.75A.75.75,0,0,0,12.75,12.5Zm-1-8a.75.75,0,1,0,.75-.75A.75.75,0,0,0,11.75,4.5ZM10.7,5.83A12.42,12.42,0,0,0,8.18,8a2.19,2.19,0,0,1,.31,2.51,11.27,11.27,0,0,0,2.95,1.08,2.25,2.25,0,0,1,2-1.35,10.59,10.59,0,0,0-.51-3.55,2.18,2.18,0,0,1-2.19-.88ZM6.5,8.75a.75.75,0,1,0,.75.75A.75.75,0,0,0,6.5,8.75ZM6,11.67a12.5,12.5,0,0,0-.52,1.62,6.94,6.94,0,0,0,7.09,1.23,2.24,2.24,0,0,1-1.27-1.93,12.33,12.33,0,0,1-3.43-1.29A2.16,2.16,0,0,1,6,11.67ZM17,8a7,7,0,0,0-1.33-4.09c-.32,0-.64.13-1,.21a2.18,2.18,0,0,1-.9,2.21,11.57,11.57,0,0,1,.57,4.11A2.26,2.26,0,0,1,15.7,12,7,7,0,0,0,17,8ZM3.32,5.92A15.43,15.43,0,0,0,5,7.87a2.24,2.24,0,0,1,2.42-.44A13.43,13.43,0,0,1,10.29,4.9a2.18,2.18,0,0,1,.76-2.11A18.1,18.1,0,0,0,9.78,1,7,7,0,0,0,3.32,5.92Zm1.3,6.56q.19-.64.44-1.26A2.2,2.2,0,0,1,4.4,8.72,17.47,17.47,0,0,1,3,7.22a6.93,6.93,0,0,0,1.58,5.25Z'/>
</svg>
`},{svgFile:"xml-file.svg",name:"xml-file",cat_namespace:n.Object,category:e.Object,code:"<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='#767676'><g id='shapes'><polygon points='4.29 8.29 0.59 12 4.29 15.71 5.71 14.29 3.41 12 5.71 9.71 4.29 8.29'/><rect x='3.61' y='11' width='10.77' height='2' transform='translate(-5.48 15.9) rotate(-68.2)'/><polygon points='13.71 15.71 17.41 12 13.71 8.29 12.29 9.71 14.59 12 12.29 14.29 13.71 15.71'/><path d='M14.71,0H3V7H4V1H14V5h4V19H4V17H3v3H19V4.29ZM15,1.71,17.29,4H15Z'/></g></svg>"},{svgFile:"zoom-in.svg",name:"zoom-in",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M18.65,19.35,15,15.71a9,9,0,1,1,.71-.71l3.65,3.65ZM9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm1,9h4V8H10V4H8V8H4v2H8v4h2Z'/>
</svg>
`},{svgFile:"zoom-out.svg",name:"zoom-out",cat_namespace:n.Command,category:e.Command,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
    <path fill='#297994'
          d='M18.65,19.35,15,15.71a9,9,0,1,1,.71-.71l3.65,3.65ZM9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm5,7H4v2H14Z'/>
</svg>
`},{svgFile:"widget_list.svg",name:"widget_list",category:e.Widget,cat_namespace:n.Widget,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
	<path fill="#767676" d="M16 7h-9v-2h9zM16 9h-9v2h9zM16 13h-9v2h9zM6 5h-2v2h2zM6 9h-2v2h2zM6 13h-2v2h2zM19 1h-18v18h18zM2 2h16v16h-16z"></path>
</svg>`},{svgFile:"widget_pie-chart.svg",name:"widget_pie-chart",category:e.Widget,cat_namespace:n.Widget,code:`<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
	<path fill="#767676" d="M9 20c-4.971 0-9-4.029-9-9s4.029-9 9-9v0 1c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8v0h1c0 4.971-4.029 9-9 9v0z"></path>
<path fill="#767676" d="M10 0c5.476 0.115 9.885 4.524 10 9.989l0 0.011h-10z"></path>
</svg>`}];var F=(()=>{class t{constructor(){this.icons=b,this.updateIconStatusesAndNames()}getIconData(s){return this.names[s]}getStatusIcon(s){return this.statuses[s]}getIconResized(s,i,a){return`<g transform="translate(-${i/2}, -${i/2})">
                    <svg height="${i}" width="${i}" viewBox="${a||"0 0 20 20"}">
                        ${s}
                    </svg>
                </g>`}registerIcons(s){this.icons.push(...s),this.updateIconStatusesAndNames()}updateIconStatusesAndNames(){this.statuses=this.icons.filter(s=>{if(s.cat_namespace===n.Status)return s}).reduce((s,i)=>(s[i.name.split(n.Status)[1]]=i.code,s),{}),this.names=this.icons.reduce((s,i)=>(s[i.name]=i,s),{})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var _=w(k()),v=w(S());var X=(()=>{class t{static{this.SIZE_MAP={medium:"nui-icon-size-md",small:"nui-icon-size-sm"}}constructor(s,i){this.iconService=s,this.sanitizer=i,this.brushType="filled",this.fillContainer=!1}getIconByStatus(s){return s?this.iconService.getStatusIcon(s):""}get iconClass(){let s=["nui-icon"];if(!this.iconFound)s.push("nui-icon-not-found");else{this.brushType&&s.push(this.brushType),this.iconColor&&s.push("custom-icon-color",`${this.iconColor}-icon`),this.iconHoverColor&&s.push(`${this.iconHoverColor}-hover-icon`);let i=t.SIZE_MAP[this.iconSize];i&&s.push(i),this.cssClass&&s.push(this.cssClass),this.fillContainer&&s.push("nui-icon--fill-container")}return s.join(" ")}set counter(s){let i;(0,v.default)(s)||(i=+s),(0,_.default)(i)?this._counter=i:this._counter=void 0}get counter(){return(0,v.default)(this._counter)?this._counter:this._counter.toString()}ngOnChanges(s){(s.status||s.childStatus||s.icon)&&this.generateIcon()}generateIcon(){this.iconData=this.iconService.getIconData(this.icon),this.iconFound=!!this.iconData;let s=`<div class='nui-icon-item'>${(this.iconData&&this.iconData.code)??""}</div>`;this.status&&(s+=`<div class="nui-icon-item nui-icon-item__child">
                                    ${this.getIconByStatus(this.status)}
                                </div>`),this.childStatus&&(s+=`<div class="nui-icon-item nui-icon-item__grand-child">
                                        ${this.getIconByStatus(this.childStatus)}
                                 </div>`),this.resultingSvg=this.sanitizer.bypassSecurityTrustHtml(s)}static{this.\u0275fac=function(i){return new(i||t)(r(F),r(y))}}static{this.\u0275cmp=x({type:t,selectors:[["nui-icon"]],hostAttrs:["role","img",1,"nui-icon-wrapper"],hostVars:1,hostBindings:function(i,a){i&2&&g("aria-label",a.icon+" icon")},inputs:{iconColor:"iconColor",brushType:"brushType",iconHoverColor:"iconHoverColor",iconSize:"iconSize",cssClass:"cssClass",fillContainer:"fillContainer",status:"status",childStatus:"childStatus",icon:"icon",counter:"counter"},standalone:!1,features:[m],decls:3,vars:7,consts:[[3,"ngClass"],[1,"nui-svg-wrapper",3,"innerHTML"]],template:function(i,a){i&1&&(u(0,"i",0),f(1,"lowercase"),H(2,"div",1),V()),i&2&&(l("ngClass",a.iconClass),g("icon",a.icon)("counter",a.counter)("status",Z(1,5,a.status)),p(2),l("innerHTML",a.resultingSvg,d))},dependencies:[C,M],styles:[`.nui-icon-wrapper{display:inline-flex}.nui-icon-wrapper .nui-svg-wrapper{position:relative}.nui-icon-wrapper .nui-icon-item{position:absolute;top:0;left:0;display:flex}.nui-icon-wrapper .nui-icon-item__child{position:absolute;top:8px;left:8px;z-index:1;transform:scale(.75) translate(-2.5px,-2.5px)}.nui-icon-wrapper .nui-icon-item__grand-child{position:absolute;top:14px;left:14px;z-index:2;transform:scale(.5) translate(-9.5px,-9.5px)}.nui-icon{width:16px;height:16px;background-size:16px;vertical-align:middle;background-repeat:no-repeat;line-height:1.66666667;position:relative}.nui-icon svg{width:16px;height:16px;display:inline-block;background-repeat:no-repeat;line-height:1.66666667}.nui-icon.nui-icon-line-height,.nui-icon.nui-icon-line-height i.nui-icon{line-height:1}.nui-icon.nui-icon-line-height svg{line-height:1}.nui-icon.nui-icon-size-sm svg{width:12px;height:12px}.nui-icon.nui-icon-size-md svg{width:20px;height:20px}.nui-icon.white-icon.stroked svg *,.nui-icon.white-hover-icon.stroked:hover svg *{stroke:var(--nui-color-bg-light,#fff)}.nui-icon.white-icon.filled svg *,.nui-icon.white-hover-icon.filled:hover svg *{fill:var(--nui-color-bg-light,#fff)}.nui-icon.gray-icon.stroked svg *,.nui-icon.gray-hover-icon.stroked:hover svg *{stroke:var(--nui-color-icon-default,rgba(17, 17, 17, .5))}.nui-icon.gray-icon.filled svg *,.nui-icon.gray-hover-icon.filled:hover svg *{fill:var(--nui-color-icon-default,rgba(17, 17, 17, .5))}.nui-icon.primary-black-icon.stroked svg *,.nui-icon.primary-black-hover-icon.stroked:hover svg *{stroke:var(--nui-color-icon-highlight-default,#111)}.nui-icon.black-icon.filled svg *,.nui-icon.black-hover-icon.filled:hover svg *{fill:var(--nui-color-icon-highlight-default,#111)}.nui-icon.primary-blue-icon.stroked svg *,.nui-icon.primary-blue-hover-icon.stroked:hover svg *{stroke:var(--nui-color-icon-active,#0079aa)}.nui-icon.primary-blue-icon.filled svg *,.nui-icon.primary-blue-hover-icon.filled:hover svg *{fill:var(--nui-color-icon-active,#0079aa)}.nui-icon.orange-icon.filled svg *,.nui-icon.orange-hover-icon.filled:hover svg *{fill:var(--nui-color-icon-highlight-platform_bar,#f99d1c)}.nui-icon.orange-icon.stroked svg *,.nui-icon.orange-hover-icon.stroked:hover svg *{stroke:var(--nui-color-icon-highlight-platform_bar,#f99d1c)}.nui-icon.red-icon.filled svg *,.nui-icon.red-hover-icon.filled:hover svg *{fill:var(--nui-color-icon-critical,#dd2c00)}.nui-icon.red-icon.stroked svg *,.nui-icon.red-hover-icon.stroked:hover svg *{stroke:var(--nui-color-icon-critical,#dd2c00)}.nui-icon.disabled-gray-icon.filled svg *,.nui-icon.red-hover-icon.filled:hover svg *{fill:var(--nui-color-icon-disabled,rgba(17, 17, 17, .3))}.nui-icon.disabled-gray-icon.stroked svg *,.nui-icon.red-hover-icon.stroked:hover svg *{stroke:var(--nui-color-icon-disabled,rgba(17, 17, 17, .3))}.nui-icon.nui-icon-not-found{background-color:#f0f}.nui-icon[status]:not([status=""]):after{content:""}.nui-icon[counter]:not([counter=""]):after{border-radius:50%;content:attr(counter);background:#0079aa no-repeat;background:var(--nui-color-active, #0079aa) no-repeat}.nui-icon:after{display:inline-block;background-repeat:no-repeat;position:relative;vertical-align:middle;text-align:center;font-style:normal;color:var(--nui-color-bg-light,#fff);width:12px;height:12px;background-size:12px;line-height:12px;font-size:8px}.nui-icon[status]:not([status=""]),.nui-icon[counter]:not([counter=""]){margin-right:10px}.nui-icon[status]:not([status=""]):after,.nui-icon[counter]:not([counter=""]):after{position:absolute;top:8px;left:8px}.nui-icon.nui-icon-size-sm{width:12px;height:12px;background-size:12px;line-height:1}.nui-icon.nui-icon-size-sm:after{width:12px;height:12px;background-size:12px;line-height:12px;font-size:8px}.nui-icon.nui-icon-size-sm[status]:not([status=""]):after,.nui-icon.nui-icon-size-sm[counter]:not([counter=""]):after{position:absolute;top:6px;left:6px}.nui-icon.nui-icon-size-md{width:20px;height:20px;background-size:20px;line-height:1}.nui-icon.nui-icon-size-md:after{width:20px;height:20px;background-size:20px;line-height:20px;font-size:16px / 2}.nui-icon.nui-icon-size-md[status]:not([status=""]):after,.nui-icon.nui-icon-size-md[counter]:not([counter=""]):after{position:absolute;top:10px;left:10px}.nui-icon.nui-icon--fill-container{display:flex;justify-content:center;align-items:center;width:100%;height:100%;margin-top:0}
`],encapsulation:2,changeDetection:0})}}return t})();export{B as a,b,F as c,X as d};
