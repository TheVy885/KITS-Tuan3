class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  isInStock() {
    let i = Math.random();
    i = Math.round(i * 100);
    if (i % 2 == 0) {
      console.log("Còn hàng");
    } else {
      console.log("hết hàng");
    }
  }
  showData() {
    console.log("tên sp: ", this.name);
    console.log("giá: ", this.price);
  }
}

var product1 = new Product("sản phẩm a", "5000");
console.log(product1.showData());
console.log(product1.isInStock());

class Mobile extends Product {
  constructor(name, price, brand) {
    super(name, price);
    this.brand = brand;
  }

  getBrand() {
    return this.brand;
  }
}
var mobile1 = new Mobile("Iphone 14 Promax 128GB", "26.440.000", "Apple");

console.log(mobile1.getBrand());
