(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{405:function(e,t,a){"use strict";a.r(t);var r=[{name:"原神",tagList:[""],developer:"mihoyo",summary:"",details:"",owned:"1",cleared:"1"},{name:"崩坏三",tagList:[""],developer:"mihoyo",summary:"",details:"",owned:"1",cleared:"1"},{name:"命运－冠位指定",tagList:[""],developer:"DELiGHTWorks",summary:"",details:"",owned:"1",cleared:"1"},{name:"明日方舟",tagList:[""],developer:"鹰角网络",summary:"",details:""},{name:"战双帕弥什",tagList:[""],developer:"库洛游戏",summary:"",details:""},{name:"公主连结！Re:Dive",tagList:[""],developer:"Cygames",summary:"",details:"",owned:"1"},{name:"阴阳师",tagList:["半即时回合制","RPG","卡牌","角色扮演"],developer:"网易移动游戏",summary:"",details:""},{name:"永远的7日之都",tagList:["文字冒险RPG"],developer:"网易移动游戏",summary:"",details:""},{name:"王者荣耀",tagList:["推塔","MOBA","即时对战","英雄对战"],developer:"腾讯游戏, 天美工作室群",summary:"",details:""},{name:"绝地求生：刺激战场",tagList:["射击"],developer:"腾讯光子工作室群",summary:"",details:""},{name:"碧蓝航线",tagList:["模拟养成"],developer:"上海蛮啾，厦门勇仕",summary:"",details:""}];function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var i={data:function(){return{searchForm:{name:"",owned:"",cleared:""},gameList:[],pageSize:10,pageSizes:[10,20,30],total:0,currentPage:1}},created:function(){this.getGameList()},methods:{getGameList:function(){var e=l(l({},this.searchForm),{},{pageSize:this.pageSize,currentPage:this.currentPage});Object.keys(e).forEach((function(t){e[t]||delete e[t]}));var t=["name","owned","cleared"],a=r.filter((function(a){return t.every((function(t){var r=e[t],n=!1;return r?"name"===t&&a.name.indexOf(r)>-1?n=!0:"owned"!==t&&"cleared"!==t||(n=!!(a[t]&&a[t]===r||!a[t]&&"0"===r)):n=!0,n}))})),n=a.length,o=e.currentPage,i=e.pageSize,s=(Math.ceil(n/i),a.slice(i*(o-1),i*o));s.forEach((function(e){e.tagName=e.tagList.join(","),e.ownedText="1"===e.owned?"是":"否",e.clearedText="1"===e.cleared?"是":"否"})),this.total=n,this.gameList=s},handleSizeChange:function(e){this.pageSize=e,this.getGameList()},handleCurrentChange:function(e){this.currentPage=e,this.getGameList()},showDetail:function(e){console.log(e)},beforeUpdateDetail:function(e){console.log(e)}}},s=a(1),c=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap-content"},[a("el-form",{staticClass:"search-form",attrs:{model:e.searchForm,inline:"","label-width":"80px","label-suffix":":"}},[a("el-form-item",{attrs:{label:"作品名称"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入作品名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否持有"}},[a("el-select",{attrs:{clearable:""},model:{value:e.searchForm.owned,callback:function(t){e.$set(e.searchForm,"owned",t)},expression:"searchForm.owned"}},[a("el-option",{attrs:{label:"是",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"0"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"是否通关"}},[a("el-select",{attrs:{clearable:""},model:{value:e.searchForm.cleared,callback:function(t){e.$set(e.searchForm,"cleared",t)},expression:"searchForm.cleared"}},[a("el-option",{attrs:{label:"是",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"0"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getGameList}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{attrs:{stripe:"",data:e.gameList}},[a("el-table-column",{attrs:{prop:"name",label:"作品名","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tagName",label:"标签","min-width":"260"}}),e._v(" "),a("el-table-column",{attrs:{prop:"developer",label:"开发商","min-width":"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ownedText",label:"是否持有","min-width":"90",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"clearedText",label:"是否通关","min-width":"90",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.showDetail(t,t.row)}}},[e._v("详情")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.beforeUpdateDetail(t.row)}}},[e._v("修改")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","page-size":e.pageSize,"page-sizes":e.pageSizes,total:e.total,"current-page":e.currentPage},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)}),[],!1,null,null,null);t.default=c.exports}}]);