var x=1121;
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
        console.log("THE NO IS PALIONDROME")
    
    }
    else
    {
        console.log("THE NO IS NOT PALIONDROME")
    }