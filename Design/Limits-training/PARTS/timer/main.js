new Vue({
  el: "#timer",
  data:{
    param_min:1,
    param_sec:0,
    min: 0,
    sec: 1,
    timerOn: false,
    timerObj: null,
    timeupflag: false,
  },
  methods: {
    count: function() {
      if (this.sec <= 0 && this.min >= 1) {
        this.min --;
        this.sec = 59;
      } else if(this.sec <= 0 && this.min <= 0) {
        this.complete();
      } else {
        this.sec --;
      }
    },
    start: function() {
      let self = this;
      this.timerObj = setInterval(function() {self.count()}, 1000)
      this.timerOn = true;
      this.timeupflag = false;
    },
    stop: function() {
      clearInterval(this.timerObj);
      this.timerOn = false;
      this.timeupflag = false;
    },
    reset: function(){
      this.stop();
      this.min = this.param_min;
      this.sec = this.param_sec;
    },
    complete: function() {
      clearInterval(this.timerObj);
      this.timeupflag = true;
    }
  },
  computed: {
    formatTime: function() {
      let timeStrings = [
        this.min.toString(),
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ":" + timeStrings[1]
    }
  }
})
