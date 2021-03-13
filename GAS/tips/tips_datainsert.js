function GAS_(){
  let path = "1gt6tgqvCzODV3bk5TLTj5idrV1EfwPVoJAPYW3w6z7w";
  let page = SpreadsheetApp.openById(path);
  let sheet = page.getSheetByName("シート1");
  let last_column = sheet.getLastRow() + 1;

  sheet.getRange(last_column , i).setValue(sentence);
  let value = sheet.getRange(column, row).getValue();
}
