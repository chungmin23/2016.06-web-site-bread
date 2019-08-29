$(document).ready(function(){ 
    $(window).scroll(function s(){ //백그라운드 이미지 움직임
        var w = window.innerWidth;
        var scroll = $(this).scrollTop();
        if(w>680 && w<2000){
            if(w>1400 && w<2000){       //width 값 받아서 스크롤에 따른 움직임 조정
                    $('.background').css({transform: 'translateY('+(scroll*0.4)+'px)'});
                    $('.background2').css({transform: 'translateY('+(scroll*0.4-800)+'px'});
            }else if(w>1200 && w<1400){
                    $('.background').css({transform: 'translateY('+(scroll*0.4)+'px)'});
                    $('.background2').css({transform: 'translateY('+(scroll*0.4-600)+'px'});
            }else if(w>1100 && w<1200){
                    $('.background').css({transform: 'translateY('+(scroll*0.4)+'px)'});
                    $('.background2').css({transform: 'translateY('+(scroll*0.4-455)+'px'});
            }else if(w>1040 && w<1100){
                    $('.background').css({transform: 'translateY('+(scroll*0.4)+'px)'});
                    $('.background2').css({transform: 'translateY('+(scroll*0.4-455)+'px'});
            }else if(w>980 && w<1040){
                    $('.background').css({transform: 'translateY('+(scroll*0.4)+'px)'});
                    $('.background2').css({transform: 'translateY('+(scroll*0.4-424)+'px'});
            }else if(w>900 && w<980){
                    $('.background').css({transform: 'translateY('+(scroll*0.4)+'px)'});
                    $('.background2').css({transform: 'translateY('+(scroll*0.3-270)+'px'});
            }else if(w>680 && w<900){
                $('.background').css({transform: 'translateY('+(scroll*0.4)+'px)',top: '-50px'});
                $('.background2').css({transform: 'translateY('+(scroll*0.2-100)+'px'});
            }
        }else if(w>100 && w<680){
            $('.head_area').css({height: w*0.175+'px'});
            $('.back_ani').css({transform: 'translateY('+(scroll*0.2)+'px)'});
            $('.mo_back2').css({transform: 'translateY('+(scroll*0.1-50)+'px'});
        }
    });
    window.onscroll = function(){   //스크롤 이동 시 
        var y = window.pageYOffset;
            if(y == 0){     //스크롤 최상단 일 때
                $('.head_top').stop().animate({height:'43px'},200);     //gnb 나옴
                $('.head_bt').stop().animate({top:'43px'},200);     //menu 내려옴
            }else if(y>1 && y<300){     //스크롤 최상단이 아닐 시(내리면)
                $('.head_bt').css('top','0');   //menu 상단에 고정
                $('.head_top').stop().animate({height:'0'},100);    //gnb 사라짐
            }
        };
    })
    $('.sub_menu').css('height','0');
    $('.menu').mouseover(function(){     //매뉴에 마우스 올라갈 때
        if($('.sub_menu').css('height') == '0px'){ 
            $('.sub_menu').stop().animate({height: '270px'},350)    //서브매뉴 나오게
        }
    });
    $('.menu a').focus(function(){     //매뉴에 마우스 올라갈 때
        if($('.sub_menu').css('height') == '0px'){ 
            $('.sub_menu').stop().animate({height: '270px'},350)    //서브매뉴 나오게
        }
    });
    $('.sub_menu').mouseleave(function(){   //서브 매뉴에서 마우스가 나갔을 때
        if($('.sub_menu').css('height') == '270px'){
            $('.sub_menu').stop().animate({height: '0px'},350)      //사라지게
        }
    });
    if(window.pageYOffset == 0){
        $('.head_top').stop().animate({height:'43px'},200);
        $('.head_bt').stop().animate({top:'43px'},200);
    }else if(window.pageYOffset>1 && window.pageYOffset<10000){ 
        $('.head_bt').css('top','0');
        $('.head_top').stop().animate({height:'0'},100);
    };
    //$.each($('.img_ex'),function(index){
    //    var count = 0;
    //    $('.img_ex').click(function(){
    //        img_show();
    //        exarea_img.attr({src: img_src[index] , width: '100%'});
    //    })
    //})
    var exarea_img = $('.exarea').find('img')
    var img_show = function(){
        $('.img_exarea').stop().show(400);
    }
    var img_ex = [$('.img_ex0'),$('.img_ex1'),$('.img_ex2'),$('.img_ex3'),$('.img_ex4'),$('.img_ex5')];    
    var img_src = ['./img/sub_bread0.jpg','./img/sub_bread1.jpg','./img/sub_bread2.jpg','./img/sub_bread3.jpg','./img/sub_bread4.jpg','./img/sub_bread5.jpg'];
    
    img_ex[0].click(function(){
        img_show();
        exarea_img.attr({src: img_src[0], width: '100%'})
        $('#wrap a').attr('tabindex','-1');
        $('.exarea a').attr('tabindex','1');
        $('.exarea a').focus();
    })
    img_ex[1].click(function(){
        img_show();
        exarea_img.attr({src: img_src[1], width: '100%'})
        $('#wrap a').attr('tabindex','-1');
        $('.exarea a').attr('tabindex','1');
        $('.exarea a').focus();
    })
    img_ex[2].click(function(){
        img_show();
        exarea_img.attr({src: img_src[2], width: '100%'})
        $('#wrap a').attr('tabindex','-1');
        $('.exarea a').attr('tabindex','1');
        $('.exarea a').focus();
    })
    img_ex[3].click(function(){
        img_show();
        exarea_img.attr({src: img_src[3], width: '100%'})
        $('#wrap a').attr('tabindex','-1');
        $('.exarea a').attr('tabindex','1');
        $('.exarea a').focus();
    })
    img_ex[4].click(function(){
        img_show();
        exarea_img.attr({src: img_src[4], width: '100%'})
        $('#wrap a').attr('tabindex','-1');
        $('.exarea a').attr('tabindex','1');
        $('.exarea a').focus();
    })
    img_ex[5].click(function(){
        img_show();
        exarea_img.attr({src: img_src[5], width: '100%'})
        $('#wrap a').attr('tabindex','-1');
        $('.exarea a').attr('tabindex','1');
        $('.exarea a').focus();
    })
    $('.img_exarea').click(function(){
        $('.img_exarea').stop().hide(400);
        $('#wrap a').attr('tabindex','0');
        $('.img_cont li:eq(0) a').focus();
    })
    //롤링 이미지 
    var rolling = 1;
    function c(){
        if(rolling == 1){
            $('.sec2_img').find('img:eq(0)').animate({opacity: 1},1500).delay(3000).animate({opacity: 0},1500); //1.5초동안 나오고 3초간 대기 1.5초동안 사라지고 2번 이미지로
            rolling = 2;
        }else if(rolling == 2){
            $('.sec2_img').find('img:eq(1)').animate({opacity: 1},1500).delay(3000).animate({opacity: 0},1500);
            rolling = 3;
        }else if(rolling == 3){
            $('.sec2_img').find('img:eq(2)').animate({opacity: 1},1500).delay(3000).animate({opacity: 0},1500);
            rolling = 4;
        }else if(rolling == 4){
            $('.sec2_img').find('img:eq(3)').animate({opacity: 1},1500).delay(3000).animate({opacity: 0},1500);
            rolling = 5;
        }else if(rolling == 5){
            $('.sec2_img').find('img:eq(4)').animate({opacity: 1},1500).delay(3000).animate({opacity: 0},1500);
            rolling = 1;
        };
        window.setTimeout(c, 6000)//순회시간 6초
    };c();
    $(document).ready(function() {
        var rolling = $('.rolling_banner')
        function prev() {       //다음
            rolling.stop(false, true).animate({marginLeft : "+=265.5px"}, 500,function(){ //왼쪽으로 이동 stop(false, true)는 다음 에니에이션이 시작되면 시작되던 애니메이션은 바로 최종값으로 가고 다음 에니메이션 실행
                rolling.children(":last").insertBefore($(this).children(":first")); // last 이전에 first 삽입
                $(this).css({marginLeft : "-662.5px"});
                $('.rolling_banner li:nth-child(3)').animate({opacity: '1'},'slow'); // 중간만 진하게
                $('.rolling_banner li:nth-child(3)').siblings().css('opacity','0.7'); //나머지 투명도 70%
            });
        }
        function next() {  //이전
            rolling.stop(false, true).animate({marginLeft : "-=265.5"}, 500,function(){ //오른쪽으로 이동
                rolling.children(":first").insertAfter($(this).children(":last"));// first 이전에 last 삽입
                $(this).css({marginLeft : "-662.5px"});
                $('.rolling_banner li:eq(2)').animate({opacity:'1'},'slow'); // 중간만 진하게
                $('.rolling_banner li:eq(2)').siblings().css('opacity','0.7'); //나머지 투명도 70%
            })
        }
        $(".prev").click(function() {
			prev();
		});
		
		$(".next").click(function() {
			next();
		});
    })
    function login(){
        alert("못생긴 사람만 로그인이 가능합니다.")
    }
    function signup(){
        alert("못생긴 사람만 회원가입이 가능합니다.")
    }
    $('.signup_box').click(signup);
    $('.login_box').click(login);
    
    $('.signup_box_s').click(function(){
        $('.login_cont').css('display','none');
        $('.signup_cont').css('display','block');
    })
    
    $('.login').click(function(){
        $('#gnb_cover, .login_cont').css('display','block');
        $('#gnb_cover').stop().animate({opacity: '0.6'}, '100');
        $('.login_input:eq(0)').focus();
        $('#wrap a').attr('tabindex','-1');
        $('.login_cont a').attr('tabindex','1');
    })
    $('.signup').click(function(){
        $('#gnb_cover, .signup_cont').css('display','block');
        $('#gnb_cover').stop().animate({opacity: '0.6'}, '100');
        $('.info_sec>li:eq(0) input').focus();
        $('#wrap a').attr('tabindex','-1');
        $('.signup_cont a').attr('tabindex','1');
    })
    $('.m_loginsec').click(function(){
        $('#gnb_cover').stop().animate({opacity: '0.6'}, '100');
        $('.login_cont').css('display','block');
        $('.m_menu').stop(false, true).animate({height: '0%'},'slow',function(){
            $('.m_menu').css('display', 'none');
        })
    })
    $('.m_signup').click(function(){
        $('#gnb_cover').stop().animate({opacity: '0.6'}, '100');
        $('.signup_cont').css('display','block');
        $('.m_menu').stop(false, true).animate({height: '0%'},'slow',function(){
            $('.m_menu').css('display', 'none');
        })
    })
    $('.exit').click(function(){
        $('.search, .signup_cont, .login_cont').css('display','none');
        $('#gnb_cover').stop().animate({opacity: '0'},'2000',function(){$('#gnb_cover').css('display','none');})
        $('.female').css({background: '#fff', color: '#cec9b0'})
        $('.male').css({background: '#fff', color: '#cec9b0'})
        $('#wrap a').attr('tabindex','0')
    })
    $('.male').click(function(){
        $('.male').css({background: '#cec9b0', color: '#fff'})
        $('.female').css({background: '#fff', color: '#cec9b0'})
    })
    $('.female').click(function(){
        $('.female').css({background: '#cec9b0', color: '#fff'})
        $('.male').css({background: '#fff', color: '#cec9b0'})
    })
    $('.id_search_box, .pass_search_box').click(function(){
        $('.loin_cont').css('display','none');
        $('.search').css('display','block');
    })
    $('.s_id').click(function(){
        alert("잘생기거나 예쁜 사람의 ID는 찾을 수 없습니다.")
    })
    $('.s_pass').click(function(){
        alert("잘생기거나 예쁜 사람의 비밀번호는 찾을 수 없습니다.")
    })
    $('.mail_box').click(function(){
        alert("이메일로 임시 비밀번호를 전송하려다 말았습니다.")
    })
    
    $('.gnb_more').click(function(){
        $('#gnb_cover, .m_menu').css('display','block');
        $('#gnb_cover').stop(false, true).animate({opacity: '0.6'}, '100');
        $('.m_menu').stop(false, true).animate({height: '80%'},'slow');
    })
    $('#gnb_cover, .menu_more').click(function(){
        $('.m_menu').stop(false, true).animate({height: '0%'},'slow',function(){
            $('.m_menu').css('display', 'none');
            $('#gnb_cover').css({display:'none', opacity: '0'})
        });
    })
    
    $(document).ready(function(){
        var slide = ".m_subsec > li > ul";
        var div = ".m_subsec > li > div";
        function accordion(){
            if ($(this).attr('class') != 'm_sub_w') { //div 클래스가 m_sub_w가 아닐때
                    $(slide).slideUp();                         //전체 ul슬라이드 업
                    $(this).next(slide).stop(false, true).slideDown();            //이 div 다음 ul 슬라이드 다운
                    $(div).removeClass('m_sub_w');          //전체 div m_sub_w 삭제
                    $(this).addClass('m_sub_w');            //이 div만 m_sub_w 생성
                    $('div').removeClass('arrow_black'); //전체 검은 화살표 삭제
                    $(this).find('div').addClass('arrow_black')  //이 div만 검은 화살표 생성
                    $(div).find('p').css('color','#fff');       //전체 div안 p #fff
                    $(this).find('p').css('color','#262626'); //이 div 안 p 만 #262626
                }else if($(this).next(slide).is(':hidden')){    //클릭한 div 다음 ul이 숨겨져 있을 시
                    $(slide).slideUp();                         //전체 ul 슬라이드 업
                    $(this).next(slide).stop(false, true).slideDown();            // 이 div 다음 ul만 슬라이드 다운
                }else{
                    $(this).next(slide).stop(false, true).slideUp();              //전체 슬라이드 업
                }
            }
        $(div).click(accordion).focus(accordion);
        })
        
        $('.info_sec > li:eq(2) > input').blur(function(){
            if($(this).val() != $('.info_sec > li:eq(1) > input').val()){
                alert("비밀번호가 같지 않습니다.")
            }else if($(this).val().length < 8){
                alert("비밀번호는 8자 이상이어야 합니다.")
            }
        })
        //포커스
        $('#skipnavigation a:eq(0)').click(function(){
            $('.menu a:eq(0)').focus();
        })
        $('.menu a:eq(0)').focus(function(){
            $('.sub_area a:eq(0)').focus();
        })
        $('#skipnavigation a:eq(1)').click(function(){
            $('img_cont a').focus();
        })
        $('.sec2_img a').focus(function(){
            $('.head_bt').css('top','0');
        })
        $('.img_cont li:eq(0) a').focus(function(){
            $('.head_bt').css('top','0');
        })
        
            //map
            $('.nmap').width('100%');
            $('#map').width('100%');
                var oPoint = new nhn.api.map.LatLng(35.8660515, 128.6097779);
                var oMap = new nhn.api.map.Map(document.getElementById('map'), { 
                                point : oPoint,
                                zoom : 11,
                                enableWheelZoom : false,
                                enableDragPan : true,
                                enableDblClickZoom : true,
                                mapMode : 0,
                                activateTrafficMap : false,
                                activateBicycleMap : false,
                                activateRealtyMap : true,
                                minMaxLevel : [ 1, 14 ],
                                size : new nhn.api.map.Size(1920, 1080)
                });
                
                var oSlider = new nhn.api.map.ZoomControl();  //줌 컨트롤러
                oMap.addControl(oSlider);
                oSlider.setPosition({
                        top : 10,
                        left : 10
                });
                
                var oSize = new nhn.api.map.Size(28, 37);
                var oOffset = new nhn.api.map.Size(14, 37);
                var oIcon = new nhn.api.map.Icon('http://static.naver.com/maps2/icons/pin_spot2.png', oSize, oOffset);
                
                var oMarker = new nhn.api.map.Marker(oIcon, { title : 'PAN DE PAN' }); 
                oMarker.setPoint(oPoint);
                oMap.addOverlay(oMarker);
                
                var oLabel1 = new nhn.api.map.MarkerLabel(); 
                oMap.addOverlay(oLabel1);
                oLabel1.setVisible(true, oMarker);
                //----
                var oMapTypeBtn = new nhn.api.map.MapTypeBtn();
                oMap.addControl(oMapTypeBtn);
                oMapTypeBtn.setPosition({
                        bottom : 10,
                        right : 80
                });
                
                var oThemeMapBtn = new nhn.api.map.ThemeMapBtn();
                oThemeMapBtn.setPosition({
                        bottom : 10,
                        right : 10
                });
                oMap.addControl(oThemeMapBtn);

                var trafficButton = new nhn.api.map.TrafficMapBtn(); // - 실시간 교통 지도 버튼 선언
                trafficButton.setPosition({
                        bottom:10, 
                        right:150
                }); // - 실시간 교통 지도 버튼 위치 지정
                oMap.addControl(trafficButton);
