import {request} from "./request"

export function getDetail(iid){
    return request({
        url:'detail',
        params:{
            iid
        }
    })
}

export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.highPrice
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}
export class GoodsParam{
    constructor(info,rule){
        //images可能没有值
        this.image = info.image ? info.image[0] : '';
        this.paramset = info.set;
        this.sizes = rule.tables;
    }
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}