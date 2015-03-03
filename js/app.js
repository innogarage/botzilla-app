(function() {


    var avatar, token, toolbar_title;



    toolbar_title = "Welcome in the Botzilla world";
    avatar = "";

    token = "385778e421960d0028c68d8cd4fdd5a22f185a6e";

    var template = document.querySelector('template[is=auto-binding]');

    template.token = token;
    template.toolbar_title = toolbar_title;
    template.avatar = avatar;


})();