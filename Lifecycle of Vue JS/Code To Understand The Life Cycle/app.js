/*Here we will try to see the Lifecycle of Vue JS using code and console*/
new Vue({
    el: "#lifecycle",
    data: {
        name: "Nayeem",
    },
    methods: {
        updateName(){
          this.name='Nayeem Hasan Moon'
        },
        killIt(){
          this.$destroy()
        },//destroy is a builtin method of vue js which can end the lifecycle of a instance. 
        //After destroying an instance it won't work.

    },
    beforeCreate() {
      console.log('Running Before Create')
    },
    created() {
      console.log('Running Created')
    },
    beforeMount() {
      console.log('Running Before Mount')
    },
    mounted() {
      console.log('mounted')
    },
    beforeUpdate() {
      console.log('Before Update')
    },
    updated() {
      console.log('Updated')
    },
    beforeDestroy() {
      console.log('Before destroy')
    },
    destroyed() {
      console.log('destroyed')
    },
});