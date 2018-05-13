/**
     * Created by Administrator on 2018/4/3 0003.
     */
    Ext.application({

        name: 'ssmDemo',

        appFolder: 'app',
        controllers: [
            'frontController'
        ],
        launch: function() {
            //初始化左列表
            Ext.create("ssmDemo.view.collapseList",{
                renderTo:Ext.get("grid-left"),
            })






        }

    });