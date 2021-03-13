function GAS_() {
  let path = "1gt6tgqvCzODV3bk5TLTj5idrV1EfwPVoJAPYW3w6z7w";
  let page = SpreadsheetApp.openById(path);
  let sheet = page.getSheetByName("シート1");
  let last_column = sheet.getLastRow() + 1;

  let url = "https://stocks.finance.yahoo.co.jp/us/detail/TSLA";
  let html = UrlFetchApp.fetch(url).getContentText("UTF-8");
  let lists = Parser.data(html).from('<dl class="tseDtlDelay">').to("</dl>").iterate();

  let i = 1;
  lists.forEach(function(key){
    let data = Parser.data(key).from('<dd class="ymuiEditLink mar0">').to("</dd>").build();
    let sentence = data.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').replace(/ |\n/g, "");
    sheet.getRange(last_column , i).setValue(sentence);
    i++;
  });
}
