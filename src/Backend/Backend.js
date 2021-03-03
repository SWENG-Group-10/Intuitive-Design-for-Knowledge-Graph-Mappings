export default {
  jsonCrawler(file) {
    //NATHAN: Code goes here in the jsonCrawler function! You'll need to return an array which ive declared as array so just return that - DG xx

    let array = [];


    //loading json file into text to make it 
    const reader = new FileReader();
    reader.onload = e => console.log(e.target.result)
    let text = reader.readAsText(file);
    console.log(text);

    //layout for code 

    //going to be something like,

    //for(i in length of JSON file)
    //{
    //  .... 
    //        todo 
    //}

    return array;
  }, 
  jsonPrettifier(file) {
    return JSON.stringify(file, null, 2); //Just doing the prettifying of the json file in the backend as opposed to in the vue file - DG xx
  },
};
