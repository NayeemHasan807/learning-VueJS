/*Here we will see Argument & Modifier use*/
new Vue({
    el: "#button",
    data: {
        name: "Nayeem",
    },
    methods: {
      updateName(replacedname, event) {
        this.name=replacedname;
        console.log(event);
      },
      handleForm(/*event*/){
        // event.preventDefault();
        console.log("Submit Form");
      }
      /*JavaScript's interaction with HTML is handled through events that occur when the user or the browser 
      manipulates a page. When the page loads, it is called an event. 
      When the user clicks a button, that click too is an event. 
      Other examples include events like pressing any key, closing a window, resizing a window, etc*/
    }
});