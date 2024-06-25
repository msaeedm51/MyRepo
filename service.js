let fetchRes = fetch(
    "https://localhost:44301/api/Products");
        
    // FetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        })