Ext.define("ssmDemo.controller.frontController",{

    extend: 'Ext.app.Controller',

    views: [

        "ssmDemo.view.collapseList",
        "ssmDemo.view.ModifyList",
        "ssmDemo.view.ArrayGrid"

    ],
    stores:["Company","Commodity","Employee","User"],
    models:["Company","Commodity","Employee","User"],
    init: function() {
        this.control({


        });

    },
})