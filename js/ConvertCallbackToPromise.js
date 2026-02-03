const apexionMethod = (callback) => {
    return setTimeout(() => {
        callback(null, {
            message: "At Apexion, we envision a future where technology and intelligence converge to create purposeful innovation."
        })
    }, 2000)
}

const apexionMethodPromise = () => {
    return new Promise((resolve, reject) => {
        apexionMethod((err, data) => {
            if(err){
                reject();
            }
            else {
                resolve(data);
            }
        })
    })
}

(async() => {
    const result = await apexionMethodPromise();
    console.log(result);
})();
