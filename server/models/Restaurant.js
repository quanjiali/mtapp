const { default: mongoose } = require("mongoose");
//利用schema方法创建数据模型
const restaurantSchema = mongoose.Schema({
        name: {
            type: String,
            require: true,
            default: '餐馆名称待定'
        },
        image: {
            type: String,
            require: true,
            default: 'restaurant.jpg'
        },
        stars: {
            type: Number,
            require: false,
            default: '4.0'
        },
        averageCost: {
            type: Number,
            require: true,
            default: '100'
        },
        distance: {
            type: Number,
            require: false,
            default: '2.1'
        },
        location: {
            type: String,
            require: true,
        },
        featured: {
            type: String,
            require: true,
        },
        promotion: {
            type: String,
            require: false,
        },
        desc: {
            type: String,
            require: true,
        },
        category: {
            type: String,
            catearr: ['火锅', '海鲜', '烤肉', '甜点', '西餐', '饮品', '自助', '快餐'],
            require: true
        }
    })
    //创建索引
restaurantSchema.index({ name: 'text', desc: 'text' })
    //参数1就是构造函数：构造一个数据对象
module.exports = mongoose.model('Restaurant', restaurantSchema)