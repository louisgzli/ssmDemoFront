/**
 * Created by Administrator on 2018/5/14 0014.
 */

Ext.define("ssmDemo.model.Employee",{
    extend:"Ext.data.Model",
    fields:[
        {name:"name",type:"string"},
        {name:"age",type:"int"},
        {name:"company",type:"string"}
    ]
})