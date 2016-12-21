define([],function(){
    
    var MyWidget = (function (_super) {
        __extends(MyWidget, _super);
        function MyWidget(div, model) {
            _super.call(this, div, model);
            var contentDiv = document.createElement('div');
            contentDiv.style.fontSize = "48px";
            contentDiv.style.padding = "10px";
            contentDiv.style.border = "1px solid blue";
            div.appendChild(contentDiv);

            setInterval(function(){ 
                var str = "";
                var length = Math.ceil(Math.random() * 10);
                for (var i = 0; i < length; ++i) {
                    str += i.toString();
                }
                contentDiv.textContent = str;
             }, 1000);
        }
        MyWidget.prototype.getDefinition = function () {
            // definition of parameters
            // the structure of the json parameter defintion is same as the symbol parameters in dg5
            return {
                "name": "",
                "size":"auto",
                "variables": [

                ],
                "layout": {
                    "type": "vbox",
                    "children": [] 
                }
            };
        };
        MyWidget.prototype.destroy = function () {
            this.contentDiv.remove();
        }

        return MyWidget;
    }(dgluxjs.Widget));

    function dgNewWidget(div, model) {
        return new MyWidget(div, model);
    }
    return {'dgNewWidget' : dgNewWidget};

});
