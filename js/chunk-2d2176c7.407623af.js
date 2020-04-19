(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2176c7"],{c752:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"content-wrap"},[t._m(0),a("el-card",[a("div",{staticClass:"button-wrapper"},[a("el-button",{staticStyle:{float:"right"},on:{click:function(e){return t.handleCreate()}}},[a("i",{staticClass:"el-icon-plus"}),t._v("添加 ")])],1),a("div",{staticClass:"table-wrap"},[a("el-table",{attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"name",label:"班级",width:"180"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.getStudent(e.row)}}},[t._v("详情")]),a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{layout:"prev,pager,next","current-page":t.currentPage,total:t.total,background:"","page-size":t.pageSize},on:{"current-change":t.currentChange}})],1)])],1),a("el-dialog",{attrs:{visible:t.dialogFormShow,title:t.dialogStatus[t.flag],width:"500px",center:""},on:{"update:visible":function(e){t.dialogFormShow=e}}},[a("el-form",{ref:"dialog",attrs:{model:t.dialog,size:"mini",rules:t.checkRule()}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{maxlength:"10"},model:{value:t.dialog.name,callback:function(e){t.$set(t.dialog,"name",e)},expression:"dialog.name"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){"edit"===t.flag?t.editGrade():t.CreateGrade()}}},[t._v("提交")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormShow=!1}}},[t._v("取消")])],1)],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-wrap"},[a("h2",[t._v("班级管理")])])}],r=(a("a4d3"),a("e01a"),a("d28b"),a("c975"),a("a434"),a("d3b7"),a("3ca3"),a("ddb0"),a("982e")),l=a("4360"),s={name:"GradeManage",data:function(){var t=function(t,e,a){var i=/^[a-zA-Z0-9-\u4e00-\u9fa5]+$/;i.test(e)?a():a(""===e?new Error("请输入名称"):new Error("名称中不能包括特殊符号"))};return{tableData:[],dialogFormShow:!1,dialog:{id:void 0,name:""},dialogStatus:{create:"添加班级",edit:"修改班级"},flag:"",total:0,pageSize:5,currentPage:1,rule_create:{name:[{validator:t,trigger:"blur"}]},rule_edit:{name:[{validator:t,trigger:"change"}]}}},created:function(){this.getClassByPage()},methods:{getClassByPage:function(){var t=this;Object(r["d"])(this.currentPage,this.pageSize).then((function(e){e&&(t.tableData=e.data.data,t.total=e.data.total)})).catch((function(e){t.$message(e)}))},currentChange:function(t){this.currentPage=t,this.getClassByPage()},resetDialog:function(){this.dialog={id:void 0,name:""}},handleCreate:function(){var t=this;this.flag="create",this.dialogFormShow=!0,this.resetDialog(),this.$nextTick((function(){t.$refs["dialog"].clearValidate()}))},checkRule:function(){return"create"===this.flag?this.rule_create:this.rule_edit},CreateGrade:function(){var t=this;this.$refs["dialog"].validate((function(e){if(!e)return!1;Object(r["a"])(t.dialog).then((function(e){200===e.status&&(t.dialogFormShow=!1,t.$message({type:"success",message:"添加成功"}),t.dialog.id=e.data.obj,t.total%t.pageSize==0&&(t.total+=1),t.tableData.unshift(t.dialog),l["a"].dispatch("grade/getClasses"))})).catch((function(){t.$message.error("添加失败")}))}))},getStudent:function(t){this.$router.push("/manage/class/"+t.id)},handleEdit:function(t){var e=this;this.dialogFormShow=!0,this.flag="edit",this.dialog=Object.assign({},t),this.$nextTick((function(){e.$refs["dialog"].clearValidate()}))},editGrade:function(){var t=this;this.$refs["dialog"].validate((function(e){if(!e)return!1;var a=Object.assign({},t.dialog);Object(r["e"])(a).then((function(e){if(200===e.status){var a=!0,i=!1,n=void 0;try{for(var r,s=t.tableData[Symbol.iterator]();!(a=(r=s.next()).done);a=!0){var o=r.value;if(o.id===t.dialog.id){var c=t.tableData.indexOf(o);t.tableData.splice(c,1,t.dialog);break}}}catch(d){i=!0,n=d}finally{try{a||null==s.return||s.return()}finally{if(i)throw n}}t.dialogFormShow=!1,t.$message({message:"修改成功",type:"success"}),l["a"].dispatch("grade/editClasses",t.dialog)}})).catch((function(){t.$message.error("添加失败")}))}))},handleDelete:function(t){var e=this;this.$confirm("是否删除","提示",{comfirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["b"])(t.id).then((function(a){if(200===a.status){var i=e.tableData.indexOf(t);e.tableData.splice(i,1),e.$message({message:"删除成功",type:"success"}),0==e.tableData.length&&(e.currentPage=e.currentPage-1,e.getClassByPage()),l["a"].dispatch("grade/deleteClasses",t)}})).catch((function(){e.$message("删除失败")}))})).catch((function(){}))}}},o=s,c=a("2877"),d=Object(c["a"])(o,i,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d2176c7.407623af.js.map