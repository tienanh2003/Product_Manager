const Product = require("../../models/product.model");
// [GET] /products
module.exports.index=async(req,res)=>{
    const products = await Product.find({
        status: "active",
        deleted: false
      })
    for(const item of products) {
        item.priceNew = item.price * (1 - item.discountPercentage/100);
        item.priceNew = item.priceNew.toFixed(0);
    }
    // console.log(products);
    res.render("client/pages/products/index",
        {pageTitle : "Trang Sản Phẩm",
        // Có thể tạo 1 mảng newProducts để tính giá trả về giao diện
        products : products}
    )
}