/**
 * Created by bliss on 2018/5/13.
 */
Ext.define('ssmDemo.view.collapseList', {
    extend:"Ext.panel.Panel",
    title: 'Accordion Layout',
    width: "100%",
    height: "100%",
    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:15px'
    },
    layout: {
        // layout-specific configs go here
        type: 'accordion',
        titleCollapse: false,
        animate: true,
        activeOnTop: true
    },
    items: [{
        title: 'Panel 1',
        layout : 'vbox',
        items:[

            {
                xtype:"button",
                text:"button1",
            },
            {
                xtype:"button",
                text:"button1",
            },
            {
                xtype:"button",
                text:"button1",
            },
            {
                xtype:"button",
                text:"button1",
            },

        ]
    },
        {
        title: 'Panel 2',
        html: 'Panel content!',
            layout : 'vbox',
            items:[

                {
                    xtype:"button",
                    text:"button1",
                },
                {
                    xtype:"button",
                    text:"button1",
                },
                {
                    xtype:"button",
                    text:"button1",
                },
                {
                    xtype:"button",
                    text:"button1",
                },

            ]
    },{
        title: 'Panel 3',
        html: 'Panel content!',
            layout : 'vbox',
            items:[

                {
                    xtype:"button",
                    text:"button1",
                },
                {
                    xtype:"button",
                    text:"button1",
                },
                {
                    xtype:"button",
                    text:"button1",
                },
                {
                    xtype:"button",
                    text:"button1",
                },

            ]
    }],


    // renderTo: Ext.getBody()
});
