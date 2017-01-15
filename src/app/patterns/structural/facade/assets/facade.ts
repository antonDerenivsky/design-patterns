var Mortgage = function(name) {
  this.name = name;
}

Mortgage.prototype = {
  applyFor: function(amount) {
    // access multiple subsystems...
    var result = "approved";
    if (!new Bank().verify(this.name, amount)) {
        result = "denied";
    } else if (!new Credit().get(this.name)) {
        result = "denied";
    }
    return this.name + " has been " + result +
           " for a " + amount + " mortgage";
  }
}

var Bank = function() {
  this.verify = function(name, amount) {
    // complex logic ...
    return true;
  }
}

var Credit = function() {
  this.get = function(name) {
    // complex logic ...
    return true;
  }
}

var mortgage = new Mortgage("Captain Pronin");

export const output = [mortgage.applyFor("$100,000")];
