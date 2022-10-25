let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };



// ladder.up().up().down().

// ladder.up();
// ladder.up();
// ladder.down();
ladder.down().up().up().down().up().up().up().up().showStep(); // 1