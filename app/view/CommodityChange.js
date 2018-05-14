/**
 * Created by Administrator on 2018/5/14 0014.
 */
Ext.define('ssmDemo.view.CommodityChange', {

    extend:"Ext.window.Window",
    alias:"widget.commoditychange",

    width: 650,

    items:[ {
        xtype:"form",
        bodyPadding: 55,
        defaultType: 'textfield',
        layout:"anchor",
        defaults: {
            anchor: '90%',

        },

        items:[
            {fieldLabel:"商品名称",name:"name",allowBanks:false},
            {fieldLabel:"商品大类",name:"pType",allowBanks:false},
            {fieldLabel:"商品小类",name:"aType",allowBanks:false},
        ],

    },

    ]
})
