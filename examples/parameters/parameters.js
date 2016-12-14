define([],function(){
    
    var MyWidget = (function (_super) {
        __extends(MyWidget, _super);
        function MyWidget(div) {
            _super.call(this, div);
        }
        MyWidget.prototype.getDefinition = function () {
            return {
                "name": "",
                "variables": [
                  { "t": "tabledata", "n": "data" },   //type and name
                  { "t": "string", "n": "str" },
                  { "t": "number", "n": "num" },
                ],
                "layout": {
                    "type": "vbox",
                    "children": ["data","str","num"]
                }
            };
        };
        MyWidget.myPropMap = {
            "data": function (widget, value) {
              if (value)
                console.log("data updated with rows: " + dgluxjs.getTableRows(value).length);
            },
            "str": function (widget, value) {
                console.log("str updated: " + value);
            },
            "num": function (widget, value) {
                console.log("num updated: " + value);
            },
        };

        MyWidget.prototype.getPropMap = function () {
            return MyWidget.myPropMap;
        };


        return MyWidget;
    }(dgluxjs.Widget));

    function create(div) {
        return new MyWidget(div);
    }

    return {'create' : create};

});
