export default {
  jsonCrawler(file) {
    //NATHAN: Code goes here in the jsonCrawler function! You'll need to return an array which ive declared as array so just return that - DG xx
    let array = [];
    console.log(file); //Ignore this line its just using the file variable as to stop an error
    return array;
  },
  jsonPrettifier(file) {
    return JSON.stringify(file, null, 2); //Just doing the prettifying of the json file in the backend as opposed to in the vue file - DG xx
  },
};
