/**
 * Created by Administrator on 2018/5/14 0014.
 */
Ext.define('ssmDemo.view.EmployeeChange', {

    extend:"Ext.window.Window",
    alias:"widget.employeechange",

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
            {fieldLabel:"职员姓名",name:"name",allowBanks:false},
            {fieldLabel:"所属公司",name:"company",allowBanks:false},
            {xtype:"numberfield",fieldLabel:"年龄",name:"age",allowBanks:false},


        ],

    },

    ]
})
