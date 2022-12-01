/*Creating multiple instance and accesing one instance from another one*/
//To get an access of an instance we have to keep that instance in a veriable
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