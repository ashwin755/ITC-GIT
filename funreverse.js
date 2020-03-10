function reverse(num)
{
   var y=num;
    var rev=0;
    while(y>0)
    {
        rev=rev*10;
        rev=rev+(y%10);
        y=parseInt(y/10);

    }
    console.log("reverse of " +num+ " is " +rev);
}
var x=52;
reverse(x);