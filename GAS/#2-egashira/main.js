function achievement(){
  let url = "https://stocks.finance.yahoo.co.jp/us/annual/TSLA";
  let html = UrlFetchApp.fetch(url).getContentText("UTF-8");
  let parent = Parser.data(html).from('<table id="annual" class="pfmListTable isYear"').to("</table>").build();


  let lists = Parser.data(parent).from('<tr class="yjMS">').to("</tr>").iterate();
  lists.forEach(function(key){
    title = replace_tag(Parser.data(key).from('<td class="first textLeft">').to("</td>").build());
    values = Parser.data(key).from("<td").to("</td>").iterate();
    values.forEach(function(value){
      let result = replace_tag("<"+value);
      Logger.log(result);
    });
    Logger.log(values);
  });
}

function replace_tag(sentence){
  let data = sentence.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').replace(/ |\n/g, "");
  return data;
}
