// original nepal object using traditional function definition
//let nepal = {
  //// add property
  //mountains: ['Everest', 'Fish Tail', 'Annapurna'],
  //// add method
  //printWithDash: function() {
    ////console.log('Inside printWithDash', this); // this refers to the nepal object
    //setTimeout(function() {
      ////console.log('Inside setTimeout', this); // this refers to window object
      //console.log(this.mountains.join(' - '));
    //}, 3000)
  //}
//};

// nepal object using arrow function

let nepal = {
  // add property
  mountains: ['Everest', 'Fish Tail', 'Annapurna'],
  // add method
  printWithDash: function() {
    //console.log('Inside printWithDash', this); // this refers to the nepal object
    setTimeout(() =>
      //console.log('Inside setTimeout', this); // this refers to nepal object
      console.log(this.mountains.join(' - ')), 3000);
  }
};

nepal.printWithDash();
