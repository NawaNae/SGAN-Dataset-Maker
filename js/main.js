new ClipboardJS('.btn.copyBtn');
import {Pedestrian} from "./pedestrian.js";
import {PedestrianList} from "./pedestrianList.js";
import {Coordinate,isset,isnotset} from "./utl.js";

class View
{
    constructor()
    {
        this.inputs={};
        this.buttons={};
        this.data={};
        this.onChange=()=>{};
        this.onDataChanged=()=>{};
        this._onInputParseError=sender=>this.onInputParseError(sender);
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
        this.buttons.edit=document.getElementById("edit");
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
                var key=this.dataset.key;
                var val=undefined;
                try{
                    val=parseFloat(this.value);
                }
                catch(e)
                {that._onInputParseError(this);}
                that.data[key]=val;
                that["on"+key+"Change"](val,e);
                that._onChange();
            }
            var input=this.inputs[key];
            input.dataset.key=key;
            var func=this["_on"+key+"Change"];
            input.addEventListener("change",func);
        }
        for(var key in this.buttons)
        {
            var button=this.buttons[key];
            //button.dataset.key=key;
            this["on"+key+"Click"]=()=>{};
            this["_on"+key+"Click"]=function(e)
            {
                var key=this.dataset.key;
                that["on"+this.dataset.key+"Click"](e);
                that._onDataChanged();
            }
            button.addEventListener("click",this["_on"+key+"Click"]);
            button.dataset.key=key;
        }
    }
    onInputParseError(sender)
    {

    }
    get output()
    {
        return this._output.value;
    }
    set output(val)
    {
        this._output.value=val;
    }
    _onChange()
    {
        this.onChange();
    }
    _onDataChanged()
    {
        this.onDataChanged();
    }
    
}
class Controller
{
    constructor()
    {
        this.view=new View();
        this.view.init();
        this.model= this.pedestrains =new PedestrianList();
        this.init();
    }
    init()
    {
        this.attachEventListener();
    }
    attachEventListener()
    {
        this.view.onaddClick=()=>this.onAdd();
        this.view.onremoveClick=()=>this.onRemove();
        this.view.oneditClick=()=>this.onEdit();
        this.view.onDataChanged=()=>this.onDataChanged();
    }
    addPedestrianFromData()
    {
        var p=new Pedestrian(this.view.data);
        if(this.model.findIndexOf(p)===-1)
            this.model.push(p);
    }
    removePedestrianViaData()
    {
        var p=new Pedestrian(this.view.data);
        var index=this.model.findIndexOf(p);
        if(index!==-1)
            this.model.splice(index,1);
    }
    editPedestrianToData()
    {
        this.removePedestrianViaData();
        this.addPedestrianFromData();
    }
    onAdd()
    {
        this.addPedestrianFromData();
    }
    onRemove()
    {
        this.removePedestrianViaData();
    }
    onEdit()
    {
        this.editPedestrianToData();
    }
    onDataChanged()
    {
        this.view.output=this.model.outputString;
    }

    
}
window.app={}
app.controller=new Controller();

