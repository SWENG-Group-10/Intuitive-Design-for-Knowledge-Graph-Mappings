export default {
  jsonCrawler(file) {
    //NATHAN: Code goes here in the jsonCrawler function! You'll need to return an array which ive declared as array so just return that - DG xx
    console.log(file);
    let array = [];
    var text;

     

    const reader = new FileReader();

    reader.readAsText(file);
    
    
    reader.onload = (e) => {
      console.log(e.target.result);
      console.log(reader.result);    
    }


  
    return array;
  }, 
  jsonPrettifier(file) {
    return JSON.stringify(file, null, 2); //Just doing the prettifying of the json file in the backend as opposed to in the vue file - DG xx
  },
};
