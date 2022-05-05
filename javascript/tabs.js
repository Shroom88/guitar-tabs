    //jquery toggle metronome
    $(document).ready(function () {

      $("#toggleBtn").click(function () {
        $(".metrocontainer").toggle('slow', function () {
          $(".log").text('Toggle Transition Complete');
        });
      });
    });

    $(document).ready(function () {

      $("#toggleBtnChord").click(function () {
        $("#chords").toggle('slow', function () {
          $(".log").text('Toggle Transition Complete');
        });
      });
    });