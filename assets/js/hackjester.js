 $(document).ready(function() {

     positionJester();

     $('#myTab a').click(function(e) {
         e.preventDefault();
         removeJester();

         console.log($(this));
         $(this).tab('show');

         if ($(this)[0].hash == "#about") {
             positionJester();
         }
     });

     function removeJester() {
         var jester = $('#hackjester');
         jester.remove();
     }

     function positionJester() {
         var columnHeight = $('#navigation').height();
         var jesterArea = $('#jester-space');
         jesterArea.append('<img id="hackjester" class="img-responsive" style="position: absolute; top: 0; margin-left: 5px;" src="/img/hack_jester_v1.png" />');
         var jester = $('#hackjester');
         jester.css("margin-top", columnHeight - 1360);
     }

 });