

module.exports={
     apicall:(simbols,base)=>{
        let simbols='INR,EUR,AED,CAD'
        let base='USD'
        axios.get(`https://api.apilayer.com/exchangerates_data/latest?symbols=${simbols}&base=${base}`,{headers:{apikey:`${process.env.API_LEYER_KEY}`}})
        .then((data) => {
            console.log(data)
        })
    }
}