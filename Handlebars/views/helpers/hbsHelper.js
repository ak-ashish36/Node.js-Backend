var helpers = {
    conf : "abcdef",
    multiple : function(x){
        return x*2;
    },
    ucase:(string)=>string.toUpperCase(),
    check : (a,b,options)=>{
        return (a===b) ? options.fn(this ): options.inverse(this);
    }

}
module.exports = helpers;