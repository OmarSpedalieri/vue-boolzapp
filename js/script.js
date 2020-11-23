var app = new Vue({

  el: "#bolzapp",

  data:{
    chat_index:0,


    user:{
      avatar:'img/avatar_io.jpg',
      name: 'Omar',
      last_access:  '23/11/2020 17:55',
      },

    contacts:[
      {
        avatar:'img/avatar_1.jpg',
        name: 'Michele',
        last_access: '23/11/2020 17:55',
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
        last_access: '23/11/2020 17:55',
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

    select_chat: function(index){
      alert("ciao");

        // this.active_chat = this.contacts[index];
        // // setto su false attivo per tutti i contatti
        // this.contacts.forEach((contact, i) => {
        //   contacts.active_chat=false;
        // });
        // // setto su true attivo per il contatto corrente
        // this.active_chat = true;
      }



  }

});
