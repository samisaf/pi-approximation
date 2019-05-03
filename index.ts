import Vue from 'vue';

let pi = new Vue({
  el: "#pi",
  data: {
    iterations: 1000,
  },
  computed: {
    pi: function() {
      let value = 1.0;
      for (let i = 0; i < this.iterations; i++) {
        let denom = 2 * i + 3;
        if (i % 2 == 0) value -= 1.0 / denom;
        else value += 1.0 / denom;
      }
      return 4 * value;
    }
  }
});