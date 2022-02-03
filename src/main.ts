function doPost(e) {
  console.log("hello");
  console.log(e.postData.contents);
  const contents = JSON.parse(e.postData.contents);
  return ContentService.createTextOutput(contents.challenge);
}

function doGet(e) {
  console.log(e);
}
