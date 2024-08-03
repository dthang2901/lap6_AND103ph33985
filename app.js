Router.get('/search-distributor' ,async (req,res)=>{
    try{
        const key = req.query.key;
        const data = await Distributors.find({name :{"$regex": key, "$options": "i"}}).sort({createdAt: -1});
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