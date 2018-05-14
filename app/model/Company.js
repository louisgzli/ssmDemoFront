/**
 * Created by Administrator on 2018/5/14 1003
 */
Ext.define("ssmDemo.model.Company",{
    extend:"Ext.data.Model",

    fields: [
        {name:'company', type:"string"},
        {name: 'staff', type: 'int'},
        {name: 'type', type: 'string'},
        {name: 'area', type: 'string'},
    ],
})
