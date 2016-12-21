define([],function(){
    
    var MyWidget = (function (_super) {
        __extends(MyWidget, _super);
        function MyWidget(div) {
            _super.call(this, div);
            this.contentDiv = document.createElement('div');
            div.appendChild(this.contentDiv);
        }
        MyWidget.prototype.getDefinition = function () {
            // definition of parameters
            // the structure of the json parameter defintion is same as the symbol parameters in dg5
            return {
                "name": "",
                "variables": [
                  { "t": "tabledata", "n": "data" },   //type and name
                  { "t": "string", "n": "str" },
                  { "t": "number", "n": "num" },
                  { "t": "string", "n": "colorStr" },
                  { "t": "string", "n": "outputStr" } 
                ],
                "layout": {
                    "type": "vbox",
                    "children": ["data","str","num","colorStr","outputStr"] // order of properties
                }
            };
        };
        MyWidget.myPropMap = {
            // parameter change callback
            "data": function (widget, value) {
              if (value)
                widget.contentDiv.textContent  = "data updated with rows: " + dgluxjs.getTableRows(value).length;
            },
            "str": function (widget, value) {
                widget.contentDiv.textContent  = "str updated: " + value;
                widget.updateModelValue('outputStr', 'out:' + value);
            },
            "num": function (widget, value) {
                widget.contentDiv.textContent  = "num updated: " + value;
            },
            "colorStr": function (widget, value) {
                widget.contentDiv.style.color = value;
            },
        };

        MyWidget.prototype.getPropMap = function () {
            return MyWidget.myPropMap;
        };

        MyWidget.prototype.destroy = function () {
        	this.contentDiv.remove();
        }

        return MyWidget;
    }(dgluxjs.Widget));

    function dgNew(div) {
        return new MyWidget(div);
    }
    return {'dgNew' : dgNew};

});
