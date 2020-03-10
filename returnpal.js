function palyn(x)
{
    var y=x;
    var h=0;
    while(y>0)
    {
        h=h*10;
        h=h+(y%10);
        y=parseInt(y/10);
    }
    if(x==h)
    {
        return "paliandrome";
    }
    else{
        return "not paliondrome";
    }
}
var a=54545;
var b=palyn(a);
console.log(b);