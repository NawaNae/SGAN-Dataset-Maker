/**
 * @class PedestrianList
 * 用來儲存每個瞬間Pedestrian的List
 * @extends Array
 * @getter outputString()->string 排序並取得檔案應該有的輸出字串
 */
export class PedestrianList extends Array
{
    get outputString()
    {
        this.sort(this.cmp)
        var ans=""
        if(this.length===0)
            return "";
        for(var pedestrian of this)
            str+=pedestrian.outputString;
        return str;
    }
    /**
     * @description 用來排序的私有方法
     */
    cmp(a,b)
    {
        return a.t-b.t||a.id-b.id;
    }
}