/*Here we will see Event Use: V-on builtin directives on button element*/
new Vue({
    el: "#button",
    data: {
        name: "Nayeem",
        x: 0,
        y: 0
    },
    methods: {
      updateName() {
        this.name="Nayeem Hasan Moon"
      },//main data will not be changed just the change will be shown on the display.
      getCoord(event){
        this.x = event.clientX;
        this.y = event.clientY;
      },//event parameter can give clints mouse pointer axis and other action informations
    },

});