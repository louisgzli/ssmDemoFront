/**
 * Created by Administrator on 2018/5/14 0014.
 */
Ext.define("ssmDemo.model.Commodity",{
    extend:"Ext.data.Model",
    fields: [
        {name: 'name', type: 'string'},
        {name:'pType', type:"string"},
        {name: 'aType', type: 'string'},
    ],
})