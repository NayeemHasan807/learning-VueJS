/*Here we will see V-model to dynamically get the value from a html form*/
new Vue({
    el: "#form",
    data: {
        formData:{
            firstName: '',
            lastName: '',
        }
    },
    methods: {
        handleForm(){
            console.log(this.formData);
        }
    }
});

/*Here we will see computed property and we will talk about the difference between method and computed properties*/
new Vue({
    el: "#cp",
    data: {
        link: 'https://v2.vuejs.org/',
        text: 'Using computed property instade of methods property',
        a: 0,
        b: 0,
        salary: 10
    },
    methods: {
        // addToA(){
        //     console.log('add a');
        //     return this.salary+this.a;
        // },
        // addToB(){
        //     console.log('add b')
        //     return this.salary+this.b;
        // }
    },
    computed: {
        addToA(){
            console.log('add a');
            return this.salary+this.a;
        },
        addToB(){
            console.log('add b')
            return this.salary+this.b;
        }
    },
    /*We had seen using console log that the DOM render all the functions in methods property
    whenever a function is called. Because methods property don't know how to render a perticular function.
    So, In big projects when there is a lot of big functions, it will be a huge waste of time is we use 
    the methods property and the DOM start rendering all the functions when a perticular function is called.
    To prevent this we use computed property because computed property only render the function which is called*/
});