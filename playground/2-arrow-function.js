const event = {
  name: 'Birthday Party',
  guestList: ['Saeid', 'Mahatir', 'Mojo'],
  printGuestList() {
    //method defination
    // for using shortand form of function we use alternative syntax by set up methods on object
    console.log('Guest list for ' + this.name); //arrow function dont bind this element
    this.guestList.forEach(guest => {
      console.log(guest + 'is joining' + this.name); // arrow function bind 'this' only which elements generate in same scope
    });
  },
};

event.printGuestList();
