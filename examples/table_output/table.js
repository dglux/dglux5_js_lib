define([],function(){
    
    var MyWidget = (function (_super) {
        __extends(MyWidget, _super);
        function MyWidget(div) {
            _super.call(this, div);
            this.contentButton = document.createElement('button');
            this.contentButton.textContent = "click to generate table output";
            div.appendChild(this.contentButton);
            this.contentButton.addEventListener("click", this.onBtnClicked.bind(this));
        }
        MyWidget.prototype.onBtnClicked = function (e) {
             this.updateModelTable('output', 
                ["value1","value2"],
                [
                    [Math.random(), Math.random()],
                    [Math.random(), Math.random()],
                    [Math.random(), Math.random()]
                ]);
        }
        MyWidget.prototype.getDefinition = function () {
            // definition of parameters
            // the structure of the json parameter defintion is same as the symbol parameters in dg5
            return {
                "name": "",
                "variables": [
                  { "t": "tabledata", "n": "output" },   //type and name
                ],
                "layout": {
                    "type": "vbox",
                    "children": ["output"] // order of properties
                }
            };
        };
        MyWidget.prototype.destroy = function () {
            this.contentButton.remove();
        }

        return MyWidget;
    }(dgluxjs.Widget));

    function create(div) {
        return new MyWidget(div);
    }

    return {'create' : create};

});
