/*Creating multiple instance and accesing one instance from another one
To get an access of an instance we have to keep that instance in a veriable. 
Then we can call theat instance by using that veriables.
*/

const i1 = new Vue({
    el: "#i1",
    data: {
        value: '1st',
    },
    methods: {
        changeValueOfSecondInstance(){
            i2.value='Changed';
        }
    }
});

const i2 = new Vue({
    el: "#i2",
    data: {
        value: '2nd'
    },
});

const temp =`<p>My name is {{name}}</p>`;

const i3 = new Vue({
    // el: "#i3", //unmounted this instace from its element div
    data: {
        name: 'Nayeem'
    },
    //template: `<p>My name is {{name}}</p>`, 
    //This is a new property named template where we can write our html using Backtag(``). 
    template: temp,
    //We can also use a variable to write our html if its too large. Then just simpally call the variable.
});

setTimeout(()=>{
    i3.$mount('#i3');
},3000)

/*Now we will see how to use basic components.
Inside the component we cant use the data as we used in the instance. In instance we used data as an object.
But in component we have to use the data as a function and it will return object. Then we will use the template.
In html file we just have to use the name of the component as a tag apply it.
Main advantage of the component is we can re-use the component as many time as we want. It will increase the 
flexibility and save our time.*/
Vue.component('paragraph',{
    data(){
        return{
            degree: 'BSc.CSE'
        }
    },
    template: `<p>My undergraduation degree is : {{degree}}</p>`
});

/*Inside the component we wont use any el property.*/
new Vue({
    el: '#i4',
});
