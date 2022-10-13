class ApiFeature{
    constructor(query,quaryStr){
this.query=query,
this.quaryStr=quaryStr
    }
    search(){
        const keyword = this.quaryStr ? {
            name :{
                $regex:this.quaryStr.keyword,
                $options : "i"
            }
        }:{
        }

console.log(keyword);

        this.query = this.query.find({...keyword})

        return this
    }
}






// class ApiFeature {
//     constructor(quary,quaryStr){
// this.quary = quary;
// this.quaryStr = quaryStr
//     }

//     search(){
//         let keyword = this.quaryStr ? {
//             name:{
//                 $regex:this.quaryStr.keyword,
//                 $options :"i"
//             }
//         }:{}
// console.log(keyword);

// this.quary = this.quary.find({...keyword})

// return this

//     }
// }






module.exports = ApiFeature