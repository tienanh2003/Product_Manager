module.exports.index = (req,res)=>{
    res.render("admin/pages/product/index",
        {pageTitle : "Trang danh sách sản phẩm"}
    )
}