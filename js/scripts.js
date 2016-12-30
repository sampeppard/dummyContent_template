$(document).ready(function() {
    var rand = Math.floor(Math.random() * 15) + 5;
    console.log(rand);
    for (i = 0; i < rand; i++) {
        $(".main").append('<div class="item"> \
                            <div class="content-wrapper"> \
                                <div class="avatar"></div> \
                                <div class="text-wrapper"> \
                                    <div class="text-block"></div> \
                                    <div class="text-block"></div> \
                                    <div class="text-block"></div> \
                                    <div class="text-block"></div> \
                                    <div class="text-block"></div> \
                                </div> \
                                <div class="button"></div> \
                            </div> \
                          </div>')
    }
    $(".text-wrapper div").each(function() {
        var rand = Math.floor(Math.random() * 9) + 2;
        $(this).css("width", rand + "0%");
    });
}); // end ready
