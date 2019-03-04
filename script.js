$(document).ready(function () {
    $("#scopeVideo").css("display", "none");
    $('#btnCal').click(function () {
        let numberNotChecked = $('input:checkbox:not(":checked")').length;
        let correctAns = 40 - numberNotChecked;
        let bandScore = 4;
        let zero = "? out of band score"
        let minScore = 11;
        //calculate minScore+++ , bandScore = 4 +.5
        if (12 < correctAns) {
            bandScore = 4.5
        }
        if (15 < correctAns) {
            bandScore = 5
        }
        if (17 < correctAns) {
            bandScore = 5.5
        }
        if (22 < correctAns) {
            bandScore = 6
        }
        if (25 < correctAns) {
            bandScore = 6.5
        }
        if (29 < correctAns) {
            bandScore = 7
        }
        if (31 < correctAns) {
            bandScore = 7.5
        }
        if (34 < correctAns) {
            bandScore = 8
        }
        if (36 < correctAns) {
            bandScore = 8.5
        }
        if (38 < correctAns) {
            bandScore = 9
        }
        if (correctAns < 11) {
            bandScore = 0 + zero
        }
        alert(correctAns + " answers is correct. Your band score is: " + bandScore);

    });

    $('#clear').click(function () {
        $('input:checkbox').prop('checked', false);;
    });

    //iframe src
    let uri_src = "https://www.youtube.com/embed/";
    //user put link, convert it to iframe src  

    $('#link_ytu').keyup(function (e) {
        if (e.keyCode == 13) {
            let p = $(this).val();
            var matches = p.match(/http:\/\/(?:www\.)?youtube.*watch\?v=([a-zA-Z0-9\-_]+)/);
            if (!matches) {
                alert('Please, check your link again and folowing its format ');
            }
            else {
                let code = $(this).val().slice($(this).val().lastIndexOf("=") + 1)
                let url = 'https://www.googleapis.com/youtube/v3/videos?id=' + code + '&key=' + config.API_KEY + '&part=snippet';

                $.get(url, function (response) {
                    let status = response.pageInfo.totalResults;
                    if (status) {
                        $('iframe').attr('src', uri_src + code)
                        window.location.href = "#practice";
                        $('#scopeVideo').show();
                    } else {
                        alert("Your youtube link is not exists. Please check it again!")
                    }
                })
            }
        }
    });

    //author put link code here        
    //can be array when it become crowded. To avoid repeat code 
    let code_ytu = [
        'klXN_cXTMLE', 'Q51QkJjxUD0'
    ]

    $("select").on("change", function (index) {
        //value isSelect,youtube will get src=uri_src + code
        let id = document.getElementById("opt").selectedIndex
        console.log(uri_src)
        $('iframe').attr('src', uri_src + code_ytu[id - 1])
        $('#scopeVideo').show();
    });


});

// When the user clicks on the button, scroll to the top page
function goUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $('#scopeVideo').hide();
}