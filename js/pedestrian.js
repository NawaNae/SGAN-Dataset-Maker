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
        if(utl.isset(id)&&utl.isnotset(time)&&utl.isnotset(coordinate)&&utl.isset(id.time))
        {
            var object=id;
            coordinate=new utl.Coordinate(object||object.coordinate);
            time=object.time;
            id=object.id;
        }
        this.coordinate=new utl.Coordinate(coordinate);
        this.t=time;
        this.id=id;
    }
    isEqualto(pedestrian)
    {
        return this.isSameAtMonent(pedestrian)&&this.coordinate.isEqualto(pedestrian.coordinate);
    }
    isSameAtMoment(pedestrian)
    {
        return pedestrian.t==this.t&&pedestrian.id==this.id;
    }
    set x(val){this.coordinate.x=val;}
    get x(){return this.coordinate.x;}
    set y(val){this.coordinate.y=val;}
    get y(){return this.coordinate.y;}
    get outputString()
    {
        const tab='\t';
        return  this.t.toString()+tab+
        this.id.toString()+tab+
        this.coordinate.x+tab+
        this.coordinate.y;
    }
}