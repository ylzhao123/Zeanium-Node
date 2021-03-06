/**
 * Created by yangyxu on 8/20/14.
 */
zn.define(function () {

    var TransactionBlock = zn.Class({
        methods: {
            init: function (){
                this._tasks = [];
            },
            insert: function (handler, before, after){
                return this._tasks.push(['insert', handler, before, after]), this;
            },
            query: function(query, before, after){
                return this._tasks.push(['query', query, before, after]), this;
            },
            each: function (handler, context){
                this._tasks.forEach(function (task, index){
                    handler && handler.call(context, task, index);
                });

                return this;
            }
        }
    });

    zn.createTransactionBlock = function (){
        return new TransactionBlock();
    }

    return TransactionBlock;
});
