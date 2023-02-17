// * DESCRIZIONE: 
    // Attraverso l'apposita API di Boolean
    // https://flynn.boolean.careers/exercises/api/random/mail
    // generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// * BONUS: 
    // far comparire gli indirizzi email solamente quando sono stati tutti generati.




// * un, due, tre, prova.. genero un indirizzo e-mail random
// axios
//     .get("https://flynn.boolean.careers/exercises/api/random/mail")
//     .then(function (result) {
//         console.log(result.data);
//         console.log(result.data.response);
//     })



// * ok, genero 10 indirizzi e-mail
// email_list = [];
// for (let i = 0; i < 10; i++) {
//     axios
//         .get("https://flynn.boolean.careers/exercises/api/random/mail")
//         .then((result) => {
//             email_list.push(result.data.response);
//         })
// }
// console.log(email_list);


// * bueno, stampali in pagina
const app = Vue.createApp({
    data() {
        return {
            email : [],
        }
    },
    methods: {
        generateEmailAddress() {
            for (let i = this.email.length; i < 3; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((result) => {
                    // console.log(result.data.response);

                    this.email = result.data.response;
                    
                    })
            }
            console.log(this.email);
        }
    }
})
app.mount("#my-app");






