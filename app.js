let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net', '.us', '.io']

//generar combinaciones de nombres de dominio 

pronoun.forEach((Firstarray) => {
    adj.forEach((SecondArray) => {
        noun.forEach((ThirdArray) => {
            domain.forEach((FourthArray) => {
                console.log(Firstarray + SecondArray + ThirdArray + FourthArray + '.es')
            })  
        })
    } )
})