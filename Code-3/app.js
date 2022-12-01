/*Here we will see V-model to dynamically get the value from a html form*/
new Vue({
    el: "#form",
    data: {
        formData:{
            firstName: '',
            lastName: '',
        },
    },
    methods: {
        handleForm(){
            console.log(this.formData);
        },
    },
});