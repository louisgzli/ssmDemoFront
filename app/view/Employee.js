/**
 * Created by Administrator on 2018/5/14 0014.
 */
Requires:[
    "ssmDemo.view.CommodityChange"
]

Ext.define('ssmDemo.view.Employee', {
    extend: 'Ext.grid.Panel',
    id: "employee",
    requires: [
        'Ext.grid.column.Action',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',
    ],
    alias: "widget.employee",
    store: "Employee",
    stateful: true,
    // collapsible: true,
    multiSelect: true,
    stateId: 'employee',
    width: "100%",
    height: "100%",
    title: 'Employee Grid',
    //分页
    /*dockedItems: [{
     xtype: 'pagingtoolbar',
     store: "Company",   // same store GridPanel is using
     dock: 'bottom',
     displayInfo: true
     }],*/


    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },


    dockedItems: [{
        dock: "top",
        xtype: "toolbar",
        items: [

            {
                xtype: 'button',
                text: '添加',
                tooltip: '添加',
                id: "add",
                listeners: {
                    click: {
                        fn: function () {
                            // alert("add button has been clicked");
                            Ext.create('ssmDemo.view.EmployeeChange', {
                                dockedItems: [{
                                    xtype: 'toolbar',
                                    dock: 'bottom',
                                    ui: 'footer',
                                    layout: {
                                        pack: 'center'
                                    },
                                    items: [{
                                        minWidth: 80,
                                        text: '保存',
                                        handler: function () {
                                            var form = this.up("window").down("form");
                                            values = form.getValues();
                                            console.log(values);
                                            Ext.getCmp("employee").getStore().insert(0, values);
                                            this.up("window").hide();


                                        }
                                    }, {
                                        minWidth: 80,
                                        text: '取消',
                                        handler: function () {
                                            this.up("window").hide();
                                            this.up("window").hide();

                                        }
                                    }]
                                }]
                            }).show();

                        }
                    }
                }
            },
            {
                xtype: 'button',
                text: '修改',
                id: "modify",
                tooltip: '修改',
                listeners: {
                    click: {
                        fn: function () {
                            var modify = Ext.create('ssmDemo.view.EmployeeChange', {
                                dockedItems: [{
                                    xtype: 'toolbar',
                                    dock: 'bottom',
                                    ui: 'footer',
                                    layout: {
                                        pack: 'center'
                                    },
                                    items: [{
                                        minWidth: 80,
                                        text: '保存',
                                        handler: function () {

                                            var win = this.up("window");

                                            var form = win.down("form");
                                            record = form.getRecord();
                                            values = form.getValues();
                                            record.set(values);
                                            win.destroy();
                                        }
                                    }, {
                                        minWidth: 80,
                                        text: '取消',
                                        handler: function () {
                                            this.up("window").destroy();
                                        }
                                    }]
                                }]
                            })
                            form = modify.down("form");
                            record = Ext.getCmp("employee").getSelectionModel().getLastSelected(),

                            form.loadRecord(record);
                            modify.show();

                        }

                    }

                },

            },
            {
                xtype: 'button',
                text: "删除",
                tooltip: '删除',
                id: "delete",
                handler: function () {
                    Ext.create("Ext.window.Window",{
                        title:"确定要删除该记录",
                        width:300,
                        height:150,
                        dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            ui: 'footer',
                            layout: {
                                pack: 'center'
                            },
                            items: [{
                                minWidth: 80,
                                text: '删除',
                                handler: function () {
                                    record = Ext.getCmp("employee").getSelectionModel().getSelection();
                                    console.log(record);
                                    Ext.getCmp("employee").getStore().remove(record);
                                    this.up("window").close();



                                }
                            }, {
                                minWidth: 80,
                                text: '取消',
                                handler: function () {
                                    this.up("window").close();


                                }
                            }]
                        }]

                    }).show();

                }
            },
            {
                xtype: 'button',
                text: "查询",
                id: "query",
                tooltip: '查询',
                handler: function () {

                    Ext.create('ssmDemo.view.EmployeeChange', {
                        dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            ui: 'footer',
                            layout: {
                                pack: 'center'
                            },
                            items: [
                                {
                                    text: "查询",
                                    handler:function(){
                                        var form = this.up("window").down("form");
                                        values = form.getValues();
                                        var nameKey = values.name;
                                        var comKey = values.company;



                                        //正则表达式匹配公司名
                                        if(nameKey==="")var regexName = new RegExp("[\s\S]*");
                                        else  var regexName = new RegExp("("+nameKey+")+");

                                        if(comKey==="")var regexCom = new RegExp("[\s\S]*");
                                        else var regexCom = new RegExp("("+comKey+")+");


                                        var store  = Ext.getCmp("employee").getStore();



                                        var count = store.getCount();
                                        var record_temp=[];
                                        for(var i = 0;i<count;i++){
                                            var strName = store.getAt(i).get("name").toString();
                                            var strCom = store.getAt(i).get("company").toString();


                                            //正则表达式匹配company

                                            if(regexName.test(strName)&&regexCom.test(strCom)){
                                                record_temp.push(store.getAt(i));
                                            }
                                        }
                                        store.loadRecords(record_temp);
                                        this.up("window").destroy();
                                    }
                                }
                            ]
                        }
                        ],
                    }).show();
                }
            },
        ],
    }],

    initComponent: function () {
        this.columns = [

            {
                text: '员工姓名',
                flex: 1,
                sortable: false,
                dataIndex: 'name'
            },
            {
                text: '所属公司',
                flex: 1,
                sortable: false,
                dataIndex: 'company'
            },
            {
                text: '年龄',
                flex: 1,
                sortable: false,
                dataIndex: 'age'
            },
        ];

        this.callParent();

    },

})