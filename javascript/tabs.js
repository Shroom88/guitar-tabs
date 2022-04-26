import $ from "jquery";

    //jquery toggle metronome
    $(document).ready(function () {

      $("#toggleBtn").click(function () {
        $(".metrocontainer").toggle('slow', function () {
          $(".log").text('Toggle Transition Complete');
        });
      });
    });