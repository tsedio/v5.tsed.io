(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{750:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"routeservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routeservice"}},[t._v("#")]),t._v(" RouteService "),a("Badge",{attrs:{text:"Class",type:"class"}}),t._v(" "),a("Badge",{attrs:{text:"deprecated",title:"Use Platform instead",type:"deprecated"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { RouteService } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/tsedio/tsed/blob/v5.67.2/packages/common/src/platform/services/RouteService.ts#L0-L0"}},[t._v("/packages/common/src/platform/services/RouteService.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" RouteService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[t._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>platform<span class="token punctuation">:</span> <a href="/api/common/platform/services/Platform.html"><span class="token">Platform</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\nget <span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/interfaces/IRouteController.html"><span class="token">IRouteController</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token function">addRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">:</span> <a href="/api/common/platform/interfaces/IRoute.html"><span class="token">IRoute</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n * Add a new route in the route registry\n * @param endpoint\n * @param token\n */\n<span class="token function">addRoute</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> token<span class="token punctuation">:</span> <a href="/api/di/interfaces/TokenProvider.html"><span class="token">TokenProvider</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/services/Platform.html"><span class="token">Platform</span></a><span class="token punctuation">;</span>\n/**\n * <a href="/api/common/mvc/decorators/method/Get.html"><span class="token">Get</span></a> all routes built by TsExpressDecorators and mounted on Express application.\n * @returns <span class="token punctuation">{</span><a href="/api/common/platform/interfaces/IRouteDetails.html"><span class="token">IRouteDetails</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n */\n<span class="token function">getRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/interfaces/IRouteDetails.html"><span class="token">IRouteDetails</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n/**\n * @deprecated <a href="/api/common/mvc/decorators/method/Use.html"><span class="token">Use</span></a> getRoutes instead of\n */\n<span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/interfaces/IRouteDetails.html"><span class="token">IRouteDetails</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[a("code",[t._v("RouteService")]),t._v(" is used to provide all routes collected by annotation "),a("code",[t._v("@Controller")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/interfaces/IRouteController.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("IRouteController")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRoutes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/interfaces/IRoute.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("IRoute")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/interfaces/TokenProvider.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("TokenProvider")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/Platform.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Platform")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Add a new route in the route registry")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRoutes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/interfaces/IRouteDetails.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("IRouteDetails")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Get all routes built by TsExpressDecorators and mounted on Express application.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang deprecated "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/interfaces/IRouteDetails.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("IRouteDetails")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);