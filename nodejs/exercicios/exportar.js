 
  
 function getFlags(flag){
    const index = Process.argv.indexOf(flag) + 1 
   return Process.argv(index)

}
module.exports = getFlags;

