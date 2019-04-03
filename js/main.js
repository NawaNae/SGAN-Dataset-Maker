new ClipboardJS('.btn.copyBtn');
import {Pedestrian} from "./pedestrian.js";
import {PedestrianList} from "./pedestrianList.js";
import {Coordinate} from "./utl.js";
var pedestrains =new PedestrianList();
class View
{
    constructor()
    {
        this.inputs={};
        this.buttons={};
        this.onChange=()=>{};
    }
    init()
    {
        this.attachHTMLElements();
        this.addEventListener();
    }
    attachHTMLElements()
    {
        this.inputs.time=document.getElementById("timeInput");
        this.inputs.id=document.getElementById("idInput");
        this.inputs.x=document.getElementById("xInput");
        this.inputs.y=document.getElementById("yInput");
        this.buttons.add=document.getElementById("add");
        this.buttons.remove=document.getElementById("remove");
        this._output=document.getElementById("output");
    }
    addEventListener()
    {
        var that=this;
        for(var key in this.inputs)
        {
            this["on"+key+"Change"]=()=>{};
            this["_on"+key+"Change"]=function(e)
            {
                console.log(this)
                that["on"+key+"Change"](parseFloat(this.innerText),e);
                that._onChange();
            }
            var input=this.inputs[key];
            var func=this["_on"+key+"Change"];
            input.addEventListener("change",func);
        }
    }
    get output()
    {
        return this._output.innerText;
    }
    set output(val)
    {
        this._output.innerText=val;
    }
    _onChange()
    {
        this.onChange();
    }
}
class Controller
{
    constructor()
    {
        this.view=new View();
        this.view.init();
        this.model=pedestrains;
    }
}
window.app={}
app.controller=new Controller();

