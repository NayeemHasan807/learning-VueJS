//Creating a Vue Instance
//We will always work with vue instance

new Vue({
    el: "#title", //el is basically the elemant. Here we used the div elemant in home.html which has id named title. 
    data: {
        content: "Here we will learn how to use Vue JS:" //String value
    } //we will use this data in home.html page on div elemant containing the id titel.
});

//There are many data types and we can use all of them in this data portion of the instance
new Vue({
    el: "#myself", //Here we used the div elemant in home.html which has id named myself.
    data: {
        name: "Nayeem Hasan", //string value
        gender: true, //boolian valuw
        language: ['Bangla','English'], //array
        undergraduation: {
            program: "CSE",
            faculty: "FST"
        }, //object
        /*degree: ()=>{
            return "BSC.CSE"
        } //method //we wont use mathod in data property instade we will use method property*/
    },
    methods: {
        //two ways to use method property one is the old way and another one is the ES6 way
        
        // degree: function(){
        //     return "BSC.CSE"
        // }//old way
        
        degree(){
            return "BSC.CSE"
        },//ES6 way

        getname(){
            return this.name //by using this keyword we can send any value inside the data property.
        }
    }
});

/* Now we will see the works of directives
there are two types of directives one is built-in and another is custom
here we will see V-bind builtin directives on image element*/

new Vue({
    el: "#imageandhref",
    data: {
        src: "https://media-exp1.licdn.com/dms/image/D5603AQFf4IcLjPqeAA/profile-displayphoto-shrink_800_800/0/1667525364059?e=1675296000&v=beta&t=5U6Ez2rObCYekfLZSkt_IYg4H3NyNzYj5OY_ZBmJMiQ",
        alt: "This is me",
        heightandwidth: "300",
        linkedinlink: "https://www.linkedin.com/in/nayeemhasan807/",
        click: "CLick the link to visit my Linkedin profile"
    }
});