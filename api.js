Router.get('/get-list-distributor' ,async (req,res)=>{
    try{
        const data = await Distributors.find().sort({createdAt: -1});
        if(data){
            res.json({
                "status" : 200,
                "messenger" : "thanh cong",
                "data" : data
            })
        }else{
            res.json({
                "status" : 400,
                "messenger" : "Loi, khong thanh cong",
                "data" : []
            })
        }
    }catch(error){
        console.log(error)
    }
});