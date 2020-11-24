var app = new Vue({

  el: "#bolzapp",

  data:{
    chat_index:0,
    new_mex:'',

    user:{
      avatar:'img/avatar_io.jpg',
      name: 'Omar',
      last_access:  '23/11/2020 17:55',
      },

    contacts:[
      {
        avatar:'img/avatar_1.jpg',
        name: 'Michele',
        last_access: '',
        chat:
          [
            {mex:"ciao test prova",state:"sent",date: "19/11/20 16:48"},
            {mex:"ma che fai",state:"received",date: "19/11/20 16:48"},
            {mex:"daje",state:"received",date: "19/11/20 16:48"}
          ]
      },
      {
        avatar:'img/avatar_2.jpg',
        name: 'Sara',
        last_access: '23/11/2020 17:32',
        chat:
          [
            {mex:"hei",state:"sent",date: "19/11/20 16:48"},
            {mex:"che vuoi?",state:"received",date: "19/11/20 16:48"},
            {mex:"ammazzati",state:"received",date: "19/11/20 16:48"}
          ]
      },

      {
        avatar:'img/avatar_3.jpg',
        name: 'Fabio',
        last_access: '23/11/2020 17:55',
        chat:
          [

            {mex:"andiamo al cinema",state:"sent",date: "19/11/20 16:48"},
            {mex:"perchè?",state:"received",date: "19/11/20 16:48"},
            {mex:"io non ti parlo",state:"received",date: "19/11/20 16:48"},
            {mex:"sparati",state:"sent",date: "19/11/20 16:48"}
          ]
      }
    ]
  },
  methods:{

    user_newMex:function(){
      // prendo cosa c'è in new mex e lo pusho
      // alert("ciao");
      this.contacts[this.chat_index].chat.state ="sent";
      this.contacts[this.chat_index].chat.push(this.new_mex);


      // this.date = lastAccess();
      this.new_mex = "";

    },

    // lastAccess:function(){
    //
    //   const today = new Date();
    //   const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //   const time = today.getHours() + ":" + today.getMinutes();
    //   const dateTime = date +' '+ time;
    //   this.last_access = dateTime;
    // }

  }

   //  filteredContact() {
   //   return this.contacts.filter(post => {
   //     return post.title.toLowerCase().includes(this.search.toLowerCase())
   //   })




});
