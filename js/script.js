var app = new Vue({

  el: "#bolzapp",

  data:{
    chat_index:0,
    new_mex:'',
    search_text:'',


    user:{
      avatar:'img/avatar_io.jpg',
      name: 'Omar',
      show:true,
      last_access:  '23/11/2020 17:55',
      },

    contacts:[
      {
        avatar:'img/avatar_1.jpg',
        name: 'Michele',
        show:true,
        last_access:  '23/11/2020 17:55',
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
        show:true,
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
        show:true,
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
    // *********CHECK THE INPUT AND PUSH A NEW OBJECT**********

    user_newMex(){

      if (this.new_mex != "") {
        this.contacts[this.chat_index].chat.push(
          {
            mex: this.new_mex,
            state:"sent",
            date:this.lastAccess()
          }
        );

        this.new_mex = "";
        this.reply();
      };
    },

    // *********AUTOMATIC ANSWER FROM PC**********
    reply(){
      setTimeout(() => {
        this.contacts[this.chat_index].chat.push({mex: "ok, come vuoi",state:"received",date:this.lastAccess()})
        this.updateScroll();
      }, 1000)

    },
    // *********SEARCH IN CONTACTS**********

    filteredList() {
      this.contacts.forEach(element => {
      if (element.name.toLowerCase().includes(this.search_text.toLowerCase())) {
        element.show = true;
      }else{
        element.show = false;
      };
    });
    },
      // *********GET TIME AND DATE FUNCTION**********
    lastAccess(){
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes();
      var dateTime = date +' '+ time;
      return dateTime;
    },

    // *********MANTEIN THE SCROLL DOWN TO THE LAST MESSAGE**********
    updateScroll(){
    var container = document.querySelector("#chats");
    container.scrollTop = container.scrollHeight
    },

    // *********GETTING LAST MEX AND PUT INTO SUBMEX CONTACT LIST**********
    sub_mex(i){
      let index = (this.contacts[i].chat.length) - 1;
      let text = this.contacts[i].chat[index].mex;
      let submex = text.substring(0,15) + ' ...';
      return submex;
    }



  }

});
