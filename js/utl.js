
export function isset(variable)
{
    return (typeof variable!=="undefined");
}
export function isnotset(variable)
{
    return !isset(variable)
}
export class Coordinate
{
    constructor(x,y)
    {
        this.x=x.x||x._x||x||0;
        this.y=x.y||x._y||y||0;
    }
    equalTo(rhs)
    {
        return rhs.x==this.x&&rhs.y==this.y;
    }
}