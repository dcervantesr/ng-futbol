(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"ct+p":function(t,e,s){"use strict";s.r(e),s.d(e,"HomeModule",(function(){return Ut}));var o=s("ofXK"),i=s("fXoL");let n=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-banner"]],decls:1,vars:0,consts:[["src","../../../assets/imganes/banner.jpeg","alt","Clara Jackson Universitario"]],template:function(t,e){1&t&&i.Lb(0,"img",0)},styles:["img[_ngcontent-%COMP%]{width:100%}"]}),t})();var r=s("Wp6s"),a=s("8LU1"),c=s("0EQZ"),l=s("cH1L"),u=s("nLfN"),d=s("XNiG"),h=s("Cfvw"),f=s("2Vo4"),m=s("7+OI"),p=s("LRne"),w=s("1G5W"),b=s("IzEk");const _=[[["caption"]],[["colgroup"],["col"]]],y=["caption","colgroup, col"];function g(t){return class extends t{constructor(...t){super(...t),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(t){const e=this._sticky;this._sticky=Object(a.c)(t),this._hasStickyChanged=e!==this._sticky}hasStickyChanged(){const t=this._hasStickyChanged;return this._hasStickyChanged=!1,t}resetStickyChanged(){this._hasStickyChanged=!1}}}const R=new i.r("CDK_TABLE");let D=(()=>{class t{constructor(t){this.template=t}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.M))},t.\u0275dir=i.Fb({type:t,selectors:[["","cdkCellDef",""]]}),t})(),C=(()=>{class t{constructor(t){this.template=t}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.M))},t.\u0275dir=i.Fb({type:t,selectors:[["","cdkHeaderCellDef",""]]}),t})(),S=(()=>{class t{constructor(t){this.template=t}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.M))},t.\u0275dir=i.Fb({type:t,selectors:[["","cdkFooterCellDef",""]]}),t})();class k{}const v=g(k);let O=(()=>{class t extends v{constructor(t){super(),this._table=t,this._stickyEnd=!1}get name(){return this._name}set name(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}get stickyEnd(){return this._stickyEnd}set stickyEnd(t){const e=this._stickyEnd;this._stickyEnd=Object(a.c)(t),this._hasStickyChanged=e!==this._stickyEnd}_updateColumnCssClassName(){this._columnCssClassName=["cdk-column-"+this.cssClassFriendlyName]}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(R,8))},t.\u0275dir=i.Fb({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,e,s){var o;1&t&&(i.Db(s,D,!0),i.Db(s,C,!0),i.Db(s,S,!0)),2&t&&(i.ic(o=i.Yb())&&(e.cell=o.first),i.ic(o=i.Yb())&&(e.headerCell=o.first),i.ic(o=i.Yb())&&(e.footerCell=o.first))},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[i.zb([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),i.xb]}),t})();class x{constructor(t,e){const s=e.nativeElement.classList;for(const o of t._columnCssClassName)s.add(o)}}let E=(()=>{class t extends x{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(O),i.Kb(i.l))},t.\u0275dir=i.Fb({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[i.xb]}),t})(),A=(()=>{class t extends x{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(O),i.Kb(i.l))},t.\u0275dir=i.Fb({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:["role","gridcell",1,"cdk-cell"],features:[i.xb]}),t})();class N{constructor(){this.tasks=[],this.endTasks=[]}}let F=(()=>{class t{constructor(t){this._ngZone=t,this._currentSchedule=null,this._destroyed=new d.a}schedule(t){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(t)}scheduleEnd(t){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(t)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new N,this._getScheduleObservable().pipe(Object(w.a)(this._destroyed)).subscribe(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){const t=this._currentSchedule;this._currentSchedule=new N;for(const e of t.tasks)e();for(const e of t.endTasks)e()}this._currentSchedule=null}))}_getScheduleObservable(){return this._ngZone.isStable?Object(h.a)(Promise.resolve(void 0)):this._ngZone.onStable.pipe(Object(b.a)(1))}}return t.\u0275fac=function(e){return new(e||t)(i.Ub(i.A))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac}),t})(),P=(()=>{class t{constructor(t,e){this.template=t,this._differs=e}ngOnChanges(t){if(!this._columnsDiffer){const e=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(e).create(),this._columnsDiffer.diff(e)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(t){return this instanceof T?t.headerCell.template:this instanceof H?t.footerCell.template:t.cell.template}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.M),i.Kb(i.t))},t.\u0275dir=i.Fb({type:t,features:[i.yb]}),t})();class M extends P{}const I=g(M);let T=(()=>{class t extends I{constructor(t,e,s){super(t,e),this._table=s}ngOnChanges(t){super.ngOnChanges(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.M),i.Kb(i.t),i.Kb(R,8))},t.\u0275dir=i.Fb({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[i.xb,i.yb]}),t})();class q extends P{}const K=g(q);let H=(()=>{class t extends K{constructor(t,e,s){super(t,e),this._table=s}ngOnChanges(t){super.ngOnChanges(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.M),i.Kb(i.t),i.Kb(R,8))},t.\u0275dir=i.Fb({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[i.xb,i.yb]}),t})(),L=(()=>{class t extends P{constructor(t,e,s){super(t,e),this._table=s}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.M),i.Kb(i.t),i.Kb(R,8))},t.\u0275dir=i.Fb({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[i.xb]}),t})(),Q=(()=>{class t{constructor(e){this._viewContainer=e,t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.Q))},t.\u0275dir=i.Fb({type:t,selectors:[["","cdkCellOutlet",""]]}),t.mostRecentCellOutlet=null,t})(),B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&i.Mb(0,0)},directives:[Q],encapsulation:2}),t})(),j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&i.Mb(0,0)},directives:[Q],encapsulation:2}),t})(),z=(()=>{class t{constructor(t){this.templateRef=t}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.M))},t.\u0275dir=i.Fb({type:t,selectors:[["ng-template","cdkNoDataRow",""]]}),t})();const U=["top","bottom","left","right"];class Y{constructor(t,e,s,o,i=!0,n=!0){this._isNativeHtmlTable=t,this._stickCellCss=e,this.direction=s,this._coalescedStyleScheduler=o,this._isBrowser=i,this._needsPositionStickyOnElement=n}clearStickyPositioning(t,e){const s=[];for(const o of t)if(o.nodeType===o.ELEMENT_NODE){s.push(o);for(let t=0;t<o.children.length;t++)s.push(o.children[t])}this._coalescedStyleScheduler.schedule(()=>{for(const t of s)this._removeStickyStyle(t,e)})}updateStickyColumns(t,e,s){if(!t.length||!this._isBrowser||!e.some(t=>t)&&!s.some(t=>t))return;const o=t[0],i=o.children.length,n=this._getCellWidths(o),r=this._getStickyStartColumnPositions(n,e),a=this._getStickyEndColumnPositions(n,s);this._coalescedStyleScheduler.schedule(()=>{const o="rtl"===this.direction,n=o?"right":"left",c=o?"left":"right";for(const l of t)for(let t=0;t<i;t++){const o=l.children[t];e[t]&&this._addStickyStyle(o,n,r[t]),s[t]&&this._addStickyStyle(o,c,a[t])}})}stickRows(t,e,s){if(!this._isBrowser)return;const o="bottom"===s?t.slice().reverse():t,i="bottom"===s?e.slice().reverse():e,n=[],r=[];for(let a=0,c=0;a<o.length;a++){if(n[a]=c,!i[a])continue;const t=o[a];r[a]=this._isNativeHtmlTable?Array.from(t.children):[t],a!==o.length-1&&(c+=t.getBoundingClientRect().height)}this._coalescedStyleScheduler.schedule(()=>{for(let t=0;t<o.length;t++){if(!i[t])continue;const e=n[t];for(const o of r[t])this._addStickyStyle(o,s,e)}})}updateStickyFooterContainer(t,e){if(!this._isNativeHtmlTable)return;const s=t.querySelector("tfoot");this._coalescedStyleScheduler.schedule(()=>{e.some(t=>!t)?this._removeStickyStyle(s,["bottom"]):this._addStickyStyle(s,"bottom",0)})}_removeStickyStyle(t,e){for(const s of e)t.style[s]="";U.some(s=>-1===e.indexOf(s)&&t.style[s])?t.style.zIndex=this._getCalculatedZIndex(t):(t.style.zIndex="",this._needsPositionStickyOnElement&&(t.style.position=""),t.classList.remove(this._stickCellCss))}_addStickyStyle(t,e,s){t.classList.add(this._stickCellCss),t.style[e]=s+"px",t.style.zIndex=this._getCalculatedZIndex(t),this._needsPositionStickyOnElement&&(t.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(t){const e={top:100,bottom:10,left:1,right:1};let s=0;for(const o of U)t.style[o]&&(s+=e[o]);return s?""+s:""}_getCellWidths(t){const e=[],s=t.children;for(let o=0;o<s.length;o++)e.push(s[o].getBoundingClientRect().width);return e}_getStickyStartColumnPositions(t,e){const s=[];let o=0;for(let i=0;i<t.length;i++)e[i]&&(s[i]=o,o+=t[i]);return s}_getStickyEndColumnPositions(t,e){const s=[];let o=0;for(let i=t.length;i>0;i--)e[i]&&(s[i]=o,o+=t[i]);return s}}function V(t){return Error(`Could not find column with id "${t}".`)}let $=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.Q),i.Kb(i.l))},t.\u0275dir=i.Fb({type:t,selectors:[["","rowOutlet",""]]}),t})(),J=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.Q),i.Kb(i.l))},t.\u0275dir=i.Fb({type:t,selectors:[["","headerRowOutlet",""]]}),t})(),G=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.Q),i.Kb(i.l))},t.\u0275dir=i.Fb({type:t,selectors:[["","footerRowOutlet",""]]}),t})(),W=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.Q),i.Kb(i.l))},t.\u0275dir=i.Fb({type:t,selectors:[["","noDataRowOutlet",""]]}),t})(),Z=(()=>{class t{constructor(t,e,s,o,i,n,r,a){this._differs=t,this._changeDetectorRef=e,this._coalescedStyleScheduler=s,this._elementRef=o,this._dir=n,this._platform=a,this._onDestroy=new d.a,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this.viewChange=new f.a({start:0,end:Number.MAX_VALUE}),i||this._elementRef.nativeElement.setAttribute("role","grid"),this._document=r,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(t){Object(i.W)()&&null!=t&&"function"!=typeof t&&console&&console.warn&&console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}.`),this._trackByFn=t}get dataSource(){return this._dataSource}set dataSource(t){this._dataSource!==t&&this._switchDataSource(t)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(t){this._multiTemplateDataRows=Object(a.c)(t),this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((t,e)=>this.trackBy?this.trackBy(e.dataIndex,e.data):e)}ngAfterContentChecked(){if(this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&!this._rowDefs.length)throw Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");const t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():t&&this.updateStickyColumnStyles(),this._checkStickyStates()}ngOnDestroy(){this._rowOutlet.viewContainer.clear(),this._noDataRowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),Object(c.d)(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const t=this._dataDiffer.diff(this._renderRows);if(!t)return void this._updateNoDataRow();const e=this._rowOutlet.viewContainer;t.forEachOperation((t,s,o)=>{if(null==t.previousIndex)this._insertRow(t.item,o);else if(null==o)e.remove(s);else{const t=e.get(s);e.move(t,o)}}),this._updateRowIndexContext(),t.forEachIdentityChange(t=>{e.get(t.currentIndex).context.$implicit=t.item.data}),this._updateNoDataRow(),this.updateStickyColumnStyles()}addColumnDef(t){this._customColumnDefs.add(t)}removeColumnDef(t){this._customColumnDefs.delete(t)}addRowDef(t){this._customRowDefs.add(t)}removeRowDef(t){this._customRowDefs.delete(t)}addHeaderRowDef(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0}removeHeaderRowDef(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0}addFooterRowDef(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0}removeFooterRowDef(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0}updateStickyHeaderRowStyles(){const t=this._getRenderedRows(this._headerRowOutlet),e=this._elementRef.nativeElement.querySelector("thead");e&&(e.style.display=t.length?"":"none");const s=this._headerRowDefs.map(t=>t.sticky);this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,s,"top"),this._headerRowDefs.forEach(t=>t.resetStickyChanged())}updateStickyFooterRowStyles(){const t=this._getRenderedRows(this._footerRowOutlet),e=this._elementRef.nativeElement.querySelector("tfoot");e&&(e.style.display=t.length?"":"none");const s=this._footerRowDefs.map(t=>t.sticky);this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,s,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,s),this._footerRowDefs.forEach(t=>t.resetStickyChanged())}updateStickyColumnStyles(){const t=this._getRenderedRows(this._headerRowOutlet),e=this._getRenderedRows(this._rowOutlet),s=this._getRenderedRows(this._footerRowOutlet);this._stickyStyler.clearStickyPositioning([...t,...e,...s],["left","right"]),t.forEach((t,e)=>{this._addStickyColumnStyles([t],this._headerRowDefs[e])}),this._rowDefs.forEach(t=>{const s=[];for(let o=0;o<e.length;o++)this._renderRows[o].rowDef===t&&s.push(e[o]);this._addStickyColumnStyles(s,t)}),s.forEach((t,e)=>{this._addStickyColumnStyles([t],this._footerRowDefs[e])}),Array.from(this._columnDefsByName.values()).forEach(t=>t.resetStickyChanged())}_getAllRenderRows(){const t=[],e=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let s=0;s<this._data.length;s++){let o=this._data[s];const i=this._getRenderRowsForData(o,s,e.get(o));this._cachedRenderRowsMap.has(o)||this._cachedRenderRowsMap.set(o,new WeakMap);for(let e=0;e<i.length;e++){let s=i[e];const o=this._cachedRenderRowsMap.get(s.data);o.has(s.rowDef)?o.get(s.rowDef).push(s):o.set(s.rowDef,[s]),t.push(s)}}return t}_getRenderRowsForData(t,e,s){return this._getRowDefs(t,e).map(o=>{const i=s&&s.has(o)?s.get(o):[];if(i.length){const t=i.shift();return t.dataIndex=e,t}return{data:t,rowDef:o,dataIndex:e}})}_cacheColumnDefs(){this._columnDefsByName.clear(),X(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{if(this._columnDefsByName.has(t.name))throw Error(`Duplicate column definition name provided: "${t.name}".`);this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=X(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=X(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=X(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const t=this._rowDefs.filter(t=>!t.when);if(!this.multiTemplateDataRows&&t.length>1)throw Error("There can only be one default row without a when predicate function.");this._defaultRowDef=t[0]}_renderUpdatedColumns(){const t=(t,e)=>t||!!e.getColumnsDiff(),e=this._rowDefs.reduce(t,!1);e&&this._forceRenderDataRows();const s=this._headerRowDefs.reduce(t,!1);s&&this._forceRenderHeaderRows();const o=this._footerRowDefs.reduce(t,!1);return o&&this._forceRenderFooterRows(),e||s||o}_switchDataSource(t){this._data=[],Object(c.d)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=t}_observeRenderChanges(){if(!this.dataSource)return;let t;if(Object(c.d)(this.dataSource)?t=this.dataSource.connect(this):Object(m.a)(this.dataSource)?t=this.dataSource:Array.isArray(this.dataSource)&&(t=Object(p.a)(this.dataSource)),void 0===t)throw Error("Provided data source did not match an array, Observable, or DataSource");this._renderChangeSubscription=t.pipe(Object(w.a)(this._onDestroy)).subscribe(t=>{this._data=t||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((t,e)=>this._renderRow(this._headerRowOutlet,t,e)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((t,e)=>this._renderRow(this._footerRowOutlet,t,e)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(t,e){const s=Array.from(e.columns||[]).map(t=>{const e=this._columnDefsByName.get(t);if(!e)throw V(t);return e}),o=s.map(t=>t.sticky),i=s.map(t=>t.stickyEnd);this._stickyStyler.updateStickyColumns(t,o,i)}_getRenderedRows(t){const e=[];for(let s=0;s<t.viewContainer.length;s++){const o=t.viewContainer.get(s);e.push(o.rootNodes[0])}return e}_getRowDefs(t,e){if(1==this._rowDefs.length)return[this._rowDefs[0]];let s=[];if(this.multiTemplateDataRows)s=this._rowDefs.filter(s=>!s.when||s.when(e,t));else{let o=this._rowDefs.find(s=>s.when&&s.when(e,t))||this._defaultRowDef;o&&s.push(o)}if(!s.length)throw function(t){return Error("Could not find a matching row definition for theprovided row data: "+JSON.stringify(t))}(t);return s}_insertRow(t,e){this._renderRow(this._rowOutlet,t.rowDef,e,{$implicit:t.data})}_renderRow(t,e,s,o={}){t.viewContainer.createEmbeddedView(e.template,o,s);for(let i of this._getCellTemplates(e))Q.mostRecentCellOutlet&&Q.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,o);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const t=this._rowOutlet.viewContainer;for(let e=0,s=t.length;e<s;e++){const o=t.get(e).context;o.count=s,o.first=0===e,o.last=e===s-1,o.even=e%2==0,o.odd=!o.even,this.multiTemplateDataRows?(o.dataIndex=this._renderRows[e].dataIndex,o.renderIndex=e):o.index=this._renderRows[e].dataIndex}}_getCellTemplates(t){return t&&t.columns?Array.from(t.columns,e=>{const s=this._columnDefsByName.get(e);if(!s)throw V(e);return t.extractCellTemplate(s)}):[]}_applyNativeTableSections(){const t=this._document.createDocumentFragment(),e=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(const s of e){const e=this._document.createElement(s.tag);e.setAttribute("role","rowgroup");for(const t of s.outlets)e.appendChild(t.elementRef.nativeElement);t.appendChild(e)}this._elementRef.nativeElement.appendChild(t)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const t=(t,e)=>t||e.hasStickyChanged();this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&this.updateStickyColumnStyles()}_setupStickyStyler(){this._stickyStyler=new Y(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement),(this._dir?this._dir.change:Object(p.a)()).pipe(Object(w.a)(this._onDestroy)).subscribe(t=>{this._stickyStyler.direction=t,this.updateStickyColumnStyles()})}_getOwnDefs(t){return t.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){if(this._noDataRow){const t=0===this._rowOutlet.viewContainer.length;if(t!==this._isShowingNoDataRow){const e=this._noDataRowOutlet.viewContainer;t?e.createEmbeddedView(this._noDataRow.templateRef):e.clear(),this._isShowingNoDataRow=t}}}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.t),i.Kb(i.h),i.Kb(F),i.Kb(i.l),i.Vb("role"),i.Kb(l.b,8),i.Kb(o.c),i.Kb(u.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,e,s){var o;1&t&&(i.Db(s,z,!0),i.Db(s,O,!0),i.Db(s,L,!0),i.Db(s,T,!0),i.Db(s,H,!0)),2&t&&(i.ic(o=i.Yb())&&(e._noDataRow=o.first),i.ic(o=i.Yb())&&(e._contentColumnDefs=o),i.ic(o=i.Yb())&&(e._contentRowDefs=o),i.ic(o=i.Yb())&&(e._contentHeaderRowDefs=o),i.ic(o=i.Yb())&&(e._contentFooterRowDefs=o))},viewQuery:function(t,e){var s;1&t&&(i.oc($,!0),i.oc(J,!0),i.oc(G,!0),i.oc(W,!0)),2&t&&(i.ic(s=i.Yb())&&(e._rowOutlet=s.first),i.ic(s=i.Yb())&&(e._headerRowOutlet=s.first),i.ic(s=i.Yb())&&(e._footerRowOutlet=s.first),i.ic(s=i.Yb())&&(e._noDataRowOutlet=s.first))},hostAttrs:[1,"cdk-table"],inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows"},exportAs:["cdkTable"],features:[i.zb([{provide:R,useExisting:t},F])],ngContentSelectors:y,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,e){1&t&&(i.dc(_),i.cc(0),i.cc(1,1),i.Mb(2,0),i.Mb(3,1),i.Mb(4,2),i.Mb(5,3))},directives:[J,$,W,G],encapsulation:2}),t})();function X(t,e){return t.concat(Array.from(e))}let tt=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(e){return new(e||t)}}),t})();var et=s("FKr1");s("quSY"),s("VRyK"),s("itXk"),s("lJxs");const st=[[["caption"]],[["colgroup"],["col"]]],ot=["caption","colgroup, col"];let it=(()=>{class t extends Z{constructor(){super(...arguments),this.stickyCssClass="mat-table-sticky",this.needsPositionStickyOnElement=!1}}return t.\u0275fac=function(e){return nt(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-table"],exportAs:["matTable"],features:[i.zb([{provide:Z,useExisting:t},{provide:R,useExisting:t},F]),i.xb],ngContentSelectors:ot,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,e){1&t&&(i.dc(st),i.cc(0),i.cc(1,1),i.Mb(2,0),i.Mb(3,1),i.Mb(4,2),i.Mb(5,3))},directives:[J,$,W,G],styles:['mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:""}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky;position:sticky}\n'],encapsulation:2}),t})();const nt=i.Sb(it);let rt=(()=>{class t extends D{}return t.\u0275fac=function(e){return at(e||t)},t.\u0275dir=i.Fb({type:t,selectors:[["","matCellDef",""]],features:[i.zb([{provide:D,useExisting:t}]),i.xb]}),t})();const at=i.Sb(rt);let ct=(()=>{class t extends C{}return t.\u0275fac=function(e){return lt(e||t)},t.\u0275dir=i.Fb({type:t,selectors:[["","matHeaderCellDef",""]],features:[i.zb([{provide:C,useExisting:t}]),i.xb]}),t})();const lt=i.Sb(ct);let ut=(()=>{class t extends O{_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push("mat-column-"+this.cssClassFriendlyName)}}return t.\u0275fac=function(e){return dt(e||t)},t.\u0275dir=i.Fb({type:t,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[i.zb([{provide:O,useExisting:t},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),i.xb]}),t})();const dt=i.Sb(ut);let ht=(()=>{class t extends E{}return t.\u0275fac=function(e){return ft(e||t)},t.\u0275dir=i.Fb({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-header-cell"],features:[i.xb]}),t})();const ft=i.Sb(ht);let mt=(()=>{class t extends A{}return t.\u0275fac=function(e){return pt(e||t)},t.\u0275dir=i.Fb({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:["role","gridcell",1,"mat-cell"],features:[i.xb]}),t})();const pt=i.Sb(mt);let wt=(()=>{class t extends T{}return t.\u0275fac=function(e){return bt(e||t)},t.\u0275dir=i.Fb({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[i.zb([{provide:T,useExisting:t}]),i.xb]}),t})();const bt=i.Sb(wt);let _t=(()=>{class t extends L{}return t.\u0275fac=function(e){return yt(e||t)},t.\u0275dir=i.Fb({type:t,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[i.zb([{provide:L,useExisting:t}]),i.xb]}),t})();const yt=i.Sb(_t);let gt=(()=>{class t extends B{}return t.\u0275fac=function(e){return Rt(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-header-row"],exportAs:["matHeaderRow"],features:[i.zb([{provide:B,useExisting:t}]),i.xb],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&i.Mb(0,0)},directives:[Q],encapsulation:2}),t})();const Rt=i.Sb(gt);let Dt=(()=>{class t extends j{}return t.\u0275fac=function(e){return Ct(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-row"],exportAs:["matRow"],features:[i.zb([{provide:j,useExisting:t}]),i.xb],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&i.Mb(0,0)},directives:[Q],encapsulation:2}),t})();const Ct=i.Sb(Dt);let St=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(e){return new(e||t)},imports:[[tt,et.a],et.a]}),t})();function kt(t,e){1&t&&(i.Qb(0,"mat-header-cell"),i.tc(1," Posici\xf3n "),i.Pb())}function vt(t,e){if(1&t&&(i.Qb(0,"mat-cell"),i.tc(1),i.Pb()),2&t){const t=e.$implicit;i.Ab(1),i.vc(" ",t.posicion," ")}}function Ot(t,e){1&t&&(i.Qb(0,"mat-header-cell"),i.tc(1," Equipo "),i.Pb())}function xt(t,e){if(1&t&&(i.Qb(0,"mat-cell"),i.tc(1),i.Pb()),2&t){const t=e.$implicit;i.Ab(1),i.vc(" ",t.equipo," ")}}function Et(t,e){1&t&&(i.Qb(0,"mat-header-cell"),i.tc(1," Ganados "),i.Pb())}function At(t,e){if(1&t&&(i.Qb(0,"mat-cell"),i.tc(1),i.Pb()),2&t){const t=e.$implicit;i.Ab(1),i.vc(" ",t.g," ")}}function Nt(t,e){1&t&&(i.Qb(0,"mat-header-cell"),i.tc(1," Perdidos "),i.Pb())}function Ft(t,e){if(1&t&&(i.Qb(0,"mat-cell"),i.tc(1),i.Pb()),2&t){const t=e.$implicit;i.Ab(1),i.vc(" ",t.p," ")}}function Pt(t,e){1&t&&(i.Qb(0,"mat-header-cell"),i.tc(1," Empatados "),i.Pb())}function Mt(t,e){if(1&t&&(i.Qb(0,"mat-cell"),i.tc(1),i.Pb()),2&t){const t=e.$implicit;i.Ab(1),i.vc(" ",t.e," ")}}function It(t,e){1&t&&(i.Qb(0,"mat-header-cell"),i.tc(1," PTS "),i.Pb())}function Tt(t,e){if(1&t&&(i.Qb(0,"mat-cell"),i.tc(1),i.Pb()),2&t){const t=e.$implicit;i.Ab(1),i.vc(" ",t.puntos," ")}}function qt(t,e){1&t&&i.Lb(0,"mat-header-row")}function Kt(t,e){1&t&&i.Lb(0,"mat-row")}let Ht=(()=>{class t{constructor(){this.displayedColumns=["posicion","equipo","g","p","e","puntos"],this.dataSource=[{posicion:1,equipo:"KENNEDY UNIVERSITARIO",g:1,p:0,e:0,puntos:3},{posicion:2,equipo:"ESPARTA UNIVERSITARIO",g:1,p:0,e:0,puntos:3},{posicion:3,equipo:"GOMENSORO",g:1,p:0,e:0,puntos:3},{posicion:4,equipo:"SAN AGUSTIN",g:1,p:0,e:0,puntos:3},{posicion:5,equipo:"OLD SAMPA",g:1,p:0,e:0,puntos:3},{posicion:6,equipo:"CLUB BIGUA V.B",g:1,p:0,e:0,puntos:3},{posicion:7,equipo:"SAGRADA FAMILIA",g:1,p:0,e:0,puntos:3},{posicion:8,equipo:"TACUAREMB\xd3",g:1,p:0,e:0,puntos:3},{posicion:9,equipo:"EL REJUNTE",g:0,p:1,e:0,puntos:0},{posicion:10,equipo:"CLARA JACKSON",g:0,p:1,e:0,puntos:0},{posicion:11,equipo:"INGLES",g:0,p:1,e:0,puntos:0},{posicion:12,equipo:"EL CHORRO F.C",g:0,p:1,e:0,puntos:0},{posicion:13,equipo:"SAN EUGENIO",g:0,p:1,e:0,puntos:0},{posicion:14,equipo:"BODY FACTORY",g:0,p:1,e:0,puntos:0},{posicion:15,equipo:"DEPORTIVO MATADERO",g:0,p:1,e:0,puntos:0},{posicion:16,equipo:"FLORES UNIVERSITARIO",g:0,p:1,e:0,puntos:0}],this.posiciones=[]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-tabla-posiciones"]],decls:22,vars:3,consts:[[1,"mat-elevation-z8"],[3,"dataSource"],["matColumnDef","posicion"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","equipo"],["matColumnDef","g"],["matColumnDef","p"],["matColumnDef","e"],["matColumnDef","puntos"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"]],template:function(t,e){1&t&&(i.Qb(0,"mat-card",0),i.Qb(1,"mat-table",1),i.Ob(2,2),i.sc(3,kt,2,0,"mat-header-cell",3),i.sc(4,vt,2,1,"mat-cell",4),i.Nb(),i.Ob(5,5),i.sc(6,Ot,2,0,"mat-header-cell",3),i.sc(7,xt,2,1,"mat-cell",4),i.Nb(),i.Ob(8,6),i.sc(9,Et,2,0,"mat-header-cell",3),i.sc(10,At,2,1,"mat-cell",4),i.Nb(),i.Ob(11,7),i.sc(12,Nt,2,0,"mat-header-cell",3),i.sc(13,Ft,2,1,"mat-cell",4),i.Nb(),i.Ob(14,8),i.sc(15,Pt,2,0,"mat-header-cell",3),i.sc(16,Mt,2,1,"mat-cell",4),i.Nb(),i.Ob(17,9),i.sc(18,It,2,0,"mat-header-cell",3),i.sc(19,Tt,2,1,"mat-cell",4),i.Nb(),i.sc(20,qt,1,0,"mat-header-row",10),i.sc(21,Kt,1,0,"mat-row",11),i.Pb(),i.Pb()),2&t&&(i.Ab(1),i.ec("dataSource",e.dataSource),i.Ab(19),i.ec("matHeaderRowDef",e.displayedColumns),i.Ab(1),i.ec("matRowDefColumns",e.displayedColumns))},directives:[r.a,it,ut,ct,rt,wt,_t,ht,mt,gt,Dt],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-card[_ngcontent-%COMP%]{margin:20px}"]}),t})();function Lt(t,e){if(1&t&&(i.Qb(0,"mat-card",2),i.Qb(1,"mat-card-header"),i.Qb(2,"mat-card-title"),i.tc(3),i.Pb(),i.Qb(4,"mat-card-subtitle"),i.tc(5),i.ac(6,"date"),i.Pb(),i.Pb(),i.Lb(7,"img",3),i.Qb(8,"mat-card-content"),i.Qb(9,"p",4),i.tc(10),i.Pb(),i.Qb(11,"p",5),i.tc(12),i.Pb(),i.Pb(),i.Pb()),2&t){const t=e.$implicit;i.Ab(3),i.vc(" ",t.titulo," "),i.Ab(2),i.vc(" ",i.bc(6,6,t.fecha)," "),i.Ab(2),i.gc("src","../../../assets/imganes/",t.imagen,"",i.mc),i.fc("alt",t.titulo),i.Ab(3),i.vc(" ",t.subtitulo," "),i.Ab(2),i.vc(" ",t.texto," ")}}let Qt=(()=>{class t{constructor(){this.noticias=[{titulo:"Nuevos fichajes",fecha:new Date("2020/05/15"),subtitulo:"El Jasson arranca la pretemporada con nuevos fichajes",imagen:"1.jpeg",texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada leo. Cras fermentum quam ac enim finibus, quis egestas augue tincidunt. In pharetra mauris porta magna sollicitudin pharetra. Sed sodales lorem malesuada, faucibus odio at, varius metus. Mauris arcu dolor, eleifend a tortor eget, volutpat aliquet odio. Phasellus non volutpat sapien. Nunc tincidunt efficitur nisi, id molestie turpis. Duis interdum felis nisl, vitae tincidunt risus sagittis quis. Proin vel fringilla turpis, sed ultrices arcu. Fusce blandit nunc vel nisi placerat suscipit. Curabitur eget molestie nibh. Praesent sit amet sollicitudin orci. In vitae ex metus. Sed feugiat diam sed ante auctor auctor. Nunc a velit at odio tincidunt dictum quis ut nulla. Mauris tristique justo vel rhoncus tincidunt. Duis sodales tempor luctus. Integer elit dolor, convallis in pharetra feugiat, efficitur nec risus. Fusce ultricies massa ipsum, eu accumsan nisl tempor sit amet."},{titulo:"Arranca la Liga",fecha:new Date("2020/06/18"),subtitulo:"La liga arranca a mediados de julio y el Jasson ya se prepara para eso",imagen:"2.jpeg",texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada leo. Cras fermentum quam ac enim finibus, quis egestas augue tincidunt. In pharetra mauris porta magna sollicitudin pharetra. Sed sodales lorem malesuada, faucibus odio at, varius metus. Mauris arcu dolor, eleifend a tortor eget, volutpat aliquet odio. Phasellus non volutpat sapien. Nunc tincidunt efficitur nisi, id molestie turpis. Duis interdum felis nisl, vitae tincidunt risus sagittis quis. Proin vel fringilla turpis, sed ultrices arcu. Fusce blandit nunc vel nisi placerat suscipit. Curabitur eget molestie nibh. Praesent sit amet sollicitudin orci. In vitae ex metus. Sed feugiat diam sed ante auctor auctor. Nunc a velit at odio tincidunt dictum quis ut nulla. Mauris tristique justo vel rhoncus tincidunt."},{titulo:"Nueva cancha",fecha:new Date("2020/07/15"),subtitulo:"La nueva cancha que el Jasson usara de local ser\xe1: La Academia, ya que la del colegio no cumple con las medidas que pide la liga",imagen:"3.jpeg",texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada leo. Cras fermentum quam ac enim finibus, quis egestas augue tincidunt. In pharetra mauris porta magna sollicitudin pharetra. Sed sodales lorem malesuada, faucibus odio at, varius metus. Mauris arcu dolor, eleifend a tortor eget, volutpat aliquet odio. Phasellus non volutpat sapien. Nunc tincidunt efficitur nisi, id molestie turpis. Duis interdum felis nisl, vitae tincidunt risus sagittis quis. Proin vel fringilla turpis, sed ultrices arcu. Fusce blandit nunc vel nisi placerat suscipit. Curabitur eget molestie nibh. Praesent sit amet sollicitudin orci. In vitae ex metus"}]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-noticias"]],decls:2,vars:1,consts:[[1,"noticias"],["class","mat-elevation-z8",4,"ngFor","ngForOf"],[1,"mat-elevation-z8"],["mat-card-image","",3,"src","alt"],[1,"subtitulo"],[1,"texto"]],template:function(t,e){1&t&&(i.Qb(0,"div",0),i.sc(1,Lt,13,8,"mat-card",1),i.Pb()),2&t&&(i.Ab(1),i.ec("ngForOf",e.noticias))},directives:[o.i,r.a,r.d,r.h,r.g,r.e,r.c],pipes:[o.d],styles:[".mat-card[_ngcontent-%COMP%]{max-width:300px;margin:10px;max-height:500px}.noticias[_ngcontent-%COMP%]{margin:20px;display:flex;flex-wrap:wrap;justify-content:space-around}.mat-card-subtitle[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:290px}.texto[_ngcontent-%COMP%]{height:100px;overflow:auto}.subtitulo[_ngcontent-%COMP%]{font-style:italic;font-weight:500;font-size:small}"]}),t})(),Bt=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-home"]],decls:3,vars:0,template:function(t,e){1&t&&(i.Lb(0,"app-banner"),i.Lb(1,"app-tabla-posiciones"),i.Lb(2,"app-noticias"))},directives:[n,Ht,Qt],styles:[""]}),t})();var jt=s("tyNb");const zt=[{path:"",component:Bt},{path:"**",component:Bt}];let Ut=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(e){return new(e||t)},imports:[[o.b,jt.c.forChild(zt),St,r.f]]}),t})()}}]);