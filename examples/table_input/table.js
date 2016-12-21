define([],function(){
    
    var MyWidget = (function (_super) {
        __extends(MyWidget, _super);
        function MyWidget(div, model) {
            _super.call(this, div, model);
            this.contentTable = document.createElement('table');
            this.contentTable.style.cssText="border: 1px solid blue;";
            div.appendChild(this.contentTable);
        }
        MyWidget.prototype.getDefinition = function () {
            // definition of parameters
            // the structure of the json parameter defintion is same as the symbol parameters in dg5
            return {
                "name": "",
                "variables": [
                  { "t": "tabledata", "n": "data" },   //type and name
                ],
                "layout": {
                    "type": "vbox",
                    "children": ["data"] // order of properties
                }
            };
        };
        MyWidget.myPropMap = {
            // parameter change callback
            "data": function (widget, value) {
              if (value) {
                while (widget.contentTable.firstChild) {
                    widget.contentTable.removeChild(widget.contentTable.firstChild);
                }
                var rows =  dgluxjs.getTableRows(value);
                var columns = dgluxjs.getTableColumns(value);
                var tr = document.createElement('tr');
                for (var i = 1; i < columns.length; ++i) {
                    var th = document.createElement('th');
                    th.textContent = columns[i];
                    tr.appendChild(th);
                }
                widget.contentTable.appendChild(tr);
                for (var j = 0; j < rows.length; ++j) {
                    tr = document.createElement('tr');
                    var row = rows[j];
                    for (var i = 1; i < row.length; ++i) {
                        var td = document.createElement('td');
                        td.textContent = row[i].toString();
                        tr.appendChild(td);
                    }
                    widget.contentTable.appendChild(tr);
                }
              }
            },

        };

        MyWidget.prototype.getPropMap = function () {
            return MyWidget.myPropMap;
        };

        MyWidget.prototype.destroy = function () {
            this.contentTable.remove();
        }

        return MyWidget;
    }(dgluxjs.Widget));

    function dgNewWidget(div, model) {
        return new MyWidget(div, model);
    }
    return {'dgNewWidget' : dgNewWidget};

});
