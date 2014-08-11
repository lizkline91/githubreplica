$(document).ready(function() {
  var homePage = {

      init: function() {
        homePage.initStyling();
        homePage.initEvents();
      },
      initStyling: function() {
        homePage.renderProfile($("aside"));
        homePage.renderRepos($(".tab2"));
        homePage.renderEvents($(".tab3"));


      },
      initEvents: function() {
          $("#repos").click(function(event){
            event.preventDefault();
            $(".events").addClass("hide");
            $(".repos").removeClass("hide");


          });
          $("#events").click(function(event){
            event.preventDefault();
            $(".events").removeClass("hide");
            $(".repos").addClass("hide");
          });
      },
      render: function(template, data, $target) {
          var tmpl = _.template(template, data);

          $target.append(tmpl);

      },
      renderProfile: function($target){
        homePage.render($("#profTmpl").html(), githubData, $target);
      },
      renderRepos: function($target) {
        homePage.render($("#reposTmpl").html(), reposData, $target);

      },
      renderEvents: function($target) {
        homePage.render($("#eventsTmpl").html(), eventsData, $target);

      },

  };

homePage.init();


});
