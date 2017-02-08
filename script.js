var quotesFromApi = function () {
    var $quotes = $('#quotes');
    $.ajax({
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40',
        datatype: "json",
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        success: function (data) {

            var response = data[getRndInteger(0, 40)];

            window.content = response.content;
            window.title = response.title;
            $quotes.html('<p>' + content + '</p><footer><cite>' + title + '</cite></footer');
        }
    });
}

var tweeting = function () {
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
        encodeURIComponent('"' + content + '" ' + title));
}

$(document).ready(function () {
    $("#getQuote").click(function () {
        quotesFromApi();
    });
    $("#tweet").click(function () {
        tweeting();
    })
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}