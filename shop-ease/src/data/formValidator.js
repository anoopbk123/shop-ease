const formValidator = {
  email: function (email) {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return true;
    } else {
      return false;
    }
  },
  password: function (password) {
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      return true;
    } else {
      return false;
    }
  },
  userName: function (userName) {
    if (/^[a-zA-Z_]{3,10}$/.test(userName)) {
      return true;
    } else {
      return false;
    }
  },
  phoneNumber: function (phoneNumber) {
    if (/^\d{10}$/.test(phoneNumber)) {
      return true;
    } else {
      return false;
    }
  },
  address: function(address){
    if(/^.{10,150}$/.test(address)){
      return true
    }
    else{
      return false
    }
  },
  productName: function(productName){
    if(/^[a-zA-Z ]{3,15}$/.test(productName)){
      return true
    }
    else {return false}
  },
  productCategoryName: function(productCategoryName){
    if(/^[a-zA-Z ]{3,15}$/.test(productCategoryName)){
      return true
    }
    else {return false}
  },
  price: function(price){
    if(!/^(?!0\d)([+-]?\d*\.\d+|\d+)$/.test(price) || price === '0'){
      return false
    }
    else{
      return true
    }
  },
  quantity: function(quantity){
    if(/^0*[1-9]\d*$/.test(quantity)){
      return true
    }
    else{
      return false;
    }
  },
};
export default formValidator;
