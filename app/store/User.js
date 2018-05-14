/**
 * Created by Administrator on 2018/5/14 0014.
 */
Ext.define("ssmDemo.store.User",{
    extend:"Ext.data.Store",
    model:"ssmDemo.model.User",
    autoLoad:true,
    filterOnLoad:true,
    proxy:{
        type:"pagingmemory",
        // type:"ajax",
        /*api:{
         read:"data/company.json"
         },*/
        reader:{
            type:"json",
            // root:"company",
            totalProperty:"totalCount",
        },
        filterParam: 'query',

        // The PHP script just use query=<whatever>
        encodeFilters: function(filters) {
            return filters[0].value;
        }

    },


    remoteFilter: true,

})