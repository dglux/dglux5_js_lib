define([],function(){
    
    var MyWidget = (function (_super) {
        __extends(MyWidget, _super);
        function MyWidget(div) {
            _super.call(this, div);
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


        return MyWidget;
    }(dgluxjs.Widget));

    function create(div) {
        return new MyWidget(div);
    }

    return {'create' : create};

});
