//常量类
export default class ConstVariable {
    private static readonly DOMAIN = "http://localhost:8081/product";
    //获取商品列表
    public static readonly PRODUCT_LIST = ConstVariable.DOMAIN + "/api/productList";
    //获取单一商品
    public static readonly PRODUCT_DETAIL = ConstVariable.DOMAIN + "/api/product";
    //获取全部种类（下拉菜单搜索用）
    public static readonly CATEGORIES = ConstVariable.DOMAIN + "/api/all.categories";
}