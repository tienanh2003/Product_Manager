const Product = require("../../models/product.model");
const filterStatusHelper=require("../../helpers/filterStatusHelper")
const searchHelper=require("../../helpers/searchHelper")
const paginationHelper=require("../../helpers/paginationHelper")
// [GET] /admin/products
module.exports.index = async (req,res)=>{
    
    // Filter và bộ lọc
    const filterStatus=filterStatusHelper(req.query)

    let find={
        deleted: false
    }
    if(req.query.status)
        find.status=req.query.status
    
    const objectSearch=searchHelper(req.query)
    if (objectSearch.regex) {
        find.title = objectSearch.regex;
    }

    
    // Pagination
    const countProducts = await Product.countDocuments(find)
    let objectPagination = paginationHelper({
        currentPage: 1, 
        limitItems: 4
    },req.query,countProducts)


    // if (req.query.page) {
    //     objectPagination.currentPage = parseInt(req.query.page);
    // }
    
    // objectPagination.skip = (objectPagination.currentPage-1) * objectPagination.limitItems;

    
    // const countProducts = await Product.countDocuments(find);
    // const totalPage = Math.ceil(countProducts/objectPagination.limitItems); 
    // objectPagination.totalPage = totalPage;
    // End Pagination

    const products = await Product.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);
    res.render("admin/pages/product/index",
        {
            pageTitle : "Trang danh sách sản phẩm",
            products: products,
            filterStatus:filterStatus,
            keyword:objectSearch.keyword,
            pagination:objectPagination
        }
    )
}