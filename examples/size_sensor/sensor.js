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
                "size":"sensor",
                "variables": [

                ],
                "layout": {
                    "type": "vbox",
                    "children": [] 
                }
            };
        };
        MyWidget.prototype.onResize = function () {
          // when "size":"sensor" in the definition, dglux will update the widget on size change
          this.contentDiv.textContent = "width: " + this.parentDiv.offsetWidth + "  height: " + this.parentDiv.offsetWidth;
        }
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
