import * as utl from "./utl.js";
/**
 * @class Pedestrian
 * 用來儲存某時間的一個行人物件，用來放置於PedestrianList中
 * @param {double} id 行人編號
 * @param {double} t 時間
 * @param {utl.Coordinate} coordinate 行人座標
 * @getter outputString()->string 取得該物件檔案字串
 */
export class Pedestrian
{
    constructor(id,time,coordinate)
    {
        this.coordinate=new utl.Coordinate(coordinate);
        this.t=time;
        this.id=id;
    }
    set x(val){this.coordinate.x=val;}
    get x(){return this.coordinate.x;}
    set y(val){this.coordinate.y=val;}
    get y(){return this.coordinate.y;}
    get outputString()
    {
        const tab='\t',newline='\n';
        return  this.t.toString()+tab+
        this.id.toString()+tab+
        this.coordinate.x+tab+
        this.coordinate.y+newline;
    }
}