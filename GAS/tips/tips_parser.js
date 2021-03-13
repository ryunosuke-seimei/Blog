function GAS_(){
  let item = Parser.data(html).from('<dl class="tseDtlDelay">').to("</dl>").build();
  let lists = Parser.data(html).from('<dl class="tseDtlDelay">').to("</dl>").iterate();

  
}
