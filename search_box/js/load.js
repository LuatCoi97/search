$(document).ready(function() {

    $('#submit').click(function() {

        

        var key_search = $("#search").val();
        if (key_search == '' ) {
        } else {
        // $.ajax({
        //     type: "post",
        //     processData: false,
        //     contentType: false,
        //     data: key_search,
        //     url: "#",
        //     success: function(res) {

                var res = [{ "title":"Doi tuyen viet Nam ve nuoc 1",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 2",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 3",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 4",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                }, 
                { "title":"Doi tuyen viet Nam ve nuoc 5",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 6",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 7",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 8",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 9",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 10",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 11",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                }

            ]

            var htmlPagtination = ""
            htmlPagtination  += '<a class="a-pagination" id="pagination-left" name=1>&laquo;</a>'
            for (i=1; i <= res.length / 10 + 1; i ++) {
                htmlPagtination  += '<a class="a-pagination" name="'+i+'">'+i+'</a>'
            }
            htmlPagtination  += '<a class="a-pagination" id="pagination-right" name=2>&raquo;</a>'
            document.getElementById('pagination').innerHTML = htmlPagtination

            $('.a-pagination').click(function(){
                pagination(this.name)
            })

            function pagination(value){
                loadSearch(value)
               if(parseInt(value)==1){
                    $("#pagination-left").attr("name", 1);
                    $('#pagination-right').attr("name", 2);
               }else if(parseInt(value) == parseInt(res.length)){
                $("#pagination-left").attr("name", parseInt(res.length)-1);

                $('#pagination-right').attr("name", parseInt(res.length));
               }else {
                $("#pagination-left").attr("name", parseInt(value)-1);

                $('#pagination-right').attr("name", parseInt(value)+1);
               }
            }

            function loadSearch(value){
                var html = ''
                value = value*10 -10
                if(value+10<res.length){
                    for (i = value; i < value + 10; i ++) {

                        html += '<div id="item'+ i + '">'
                        html += '<div id="title-result" ><a href="#">' + res[i].title + '</a></div>'
                        html += '<div class="content-result">' + res[i].content + '</div>'
                        html += '<div class="space-result"><br></div></div>'
                    }
                }else {
                    for (i = value; i < res.length; i ++) {

                        html += '<div id="item'+ i + '">'
                        html += '<div id="title-result" ><a href="#">' + res[i].title + '</a></div>'
                        html += '<div class="content-result">' + res[i].content + '</div>'
                        html += '<div class="space-result"><br></div></div>'
                    }
                }
                
                document.getElementById('list-result').innerHTML = html
                
            }
            
            loadSearch(2)


                res.forEach(function(element, i) {
                    $('#item' + i).click(function() {
                
                        document.getElementById('detail-title').innerHTML = res[i].title
                        document.getElementById('detail-content').innerHTML = res[i].content
                    })
                })
                


        //     },
        //     error: function() {
        //         console.log("error")
        //     },
        // })
        }
    })

    // $(window).scroll(function(){
    //     var scroll = $(window).scrollTop();
    //       if (scroll > 30) {
    //         $(".header").css("position;" , "fixed"); 
    //       }
    //       else{
    //         $(".header").css("position;" , "fixed");    
    //       }
    //   })

})