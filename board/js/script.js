    $(document).ready(function(){       //페이지가 열린 후.
        if(window.pageYOffset == 0){ 
            $('.head_top').stop().animate({height:'43px'},200);
            $('.head_bt').stop().animate({top:'43px'},200);
        }else if(window.pageYOffset>1 && window.pageYOffset<10000){ 
            $('.head_bt').css('top','0');
            $('.head_top').stop().animate({height:'0'},100);
        };
    })
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
    $('.sub_menu').css('height','0');
    $('.menu').mouseover(function(){     //매뉴에 마우스 올라갈 때
        if($('.sub_menu').css('height') == '0px'){ 
            $('.sub_menu').stop().animate({height: '270px'},350)    //서브매뉴 나오게
        }
    });
    $('.sub_menu').mouseleave(function(){   //서브 매뉴에서 마우스가 나갔을 때
        if($('.sub_menu').css('height') == '270px'){
            $('.sub_menu').stop().animate({height: '0px'},350)      //사라지게
        }
    });
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
    // gnb 이벤트
    $('.login').click(function(){       //메인페이지 로그인 클릭 시
        $('#gnb_cover, .login_cont').css('display','block');
        $('#gnb_cover').stop().animate({opacity: '0.6'}, '100');
    })
    $('.signup').click(function(){       //메인페이지 회원가입 클릭 시
        $('#gnb_cover, .signup_cont').css('display','block');
        $('#gnb_cover').stop().animate({opacity: '0.6'}, '100');
    })
    $('.m_loginsec').click(function(){      //모바일 로그인 클릭 시
        $('#gnb_cover').stop().animate({opacity: '0.6'}, '100');
        $('.login_cont').css('display','block');
        $('.m_menu').stop(false, true).animate({height: '0%'},'slow',function(){
            $('.m_menu').css('display', 'none');
        })
    })
    $('.m_signup').click(function(){        //모바일 회원가입 클릭 시
        $('#gnb_cover').stop().animate({opacity: '0.6'}, '100');
        $('.signup_cont').css('display','block');
        $('.m_menu').stop(false, true).animate({height: '0%'},'slow',function(){
            $('.m_menu').css('display', 'none');
        })
    })
    $('.exit').click(function(){        //X 클릭 시
        $('.search, .signup_cont, .login_cont').css('display','none');
        $('#gnb_cover').stop().animate({opacity: '0'},'2000',function(){$('#gnb_cover').css('display','none');})
        $('.female').css({background: '#fff', color: '#cec9b0'})
        $('.male').css({background: '#fff', color: '#cec9b0'})
    })
    $('.male').click(function(){        //남자 클릭 시
        $('.male').css({background: '#cec9b0', color: '#fff'})
        $('.female').css({background: '#fff', color: '#cec9b0'})
    })
    $('.female').click(function(){      //여자 클릭 시
        $('.female').css({background: '#cec9b0', color: '#fff'})
        $('.male').css({background: '#fff', color: '#cec9b0'})
    })
    $('.id_search_box, .pass_search_box').click(function(){     //ID,PASSWORD 찾기 클릭 시
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

    $('.gnb_more').click(function(){    //모바일 매뉴 클릭 시
        $('#gnb_cover, .m_menu').css('display','block');
        $('#gnb_cover').stop(false, true).animate({opacity: '0.6'}, '100');
        $('.m_menu').stop(false, true).animate({height: '80%'},'slow');
    })
    $('#gnb_cover, .menu_more').click(function(){       //모바일 매뉴에서 매인 재 클릭 or 뒷 배경 클릭 시
        $('.m_menu').stop(false, true).animate({height: '0%'},'slow',function(){
            $('.m_menu').css('display', 'none');
            $('#gnb_cover').css({display:'none', opacity: '0'})
        });
    })
    //아코디언 메뉴
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
    $('.page > p:eq(0)').css({color: '#a95001', textDecoration: 'underline'})
    
    var num = $(".page > p:eq(0)").siblings()
    var num1 = $(".page > p:eq(0)")
    var next_p = $('.page_next')
    var mesege_none = $("ol > li > p:eq(4)")
    var width = window.innerWidth;
    if(width > 680){
            function page(){
                $(this).siblings().css({color: '#262626', textDecoration: 'none'});
                $(this).css({color: '#a95001', textDecoration: 'underline'});
                $('ol > li > p').css('display','none');
                mesege_none.css('display','block')
            }
            function page1(){
                $(this).siblings().css({color: '#262626' , textDecoration: 'none'});
                $(this).css({color: '#a95001', textDecoration: 'underline'});
                $('ol > li > p').siblings().css('display','block');
                mesege_none.css('display','none')
            }
        } else if(width < 680){
            function page(){
                $(this).siblings().css({color: '#262626' , textDecoration: 'none'});
                $(this).css({color: '#a95001', textDecoration: 'underline'});
                $('ol > li > p').css('display','none');
                mesege_none.css('display','block')
            }
            function page1(){
                $(this).siblings().css({color: '#262626' , textDecoration: 'none'});
                $(this).css({color: '#a95001', textDecoration: 'underline'});
                $('ol > li > p').css('display','block');
                $('ol > li > p:nth-child(1)').css('display', 'none');
                mesege_none.css('display','none')
            }
        }
    var num_x = '.page > p';
    num1.click(page1);
    num.click(page);
    next_p.click(function(){
        if(num1.css('textDecoration') == "underline"){
        $(num1).next('p').css({color: '#a95001' , textDecoration: 'underline'})
        $(num1).css({color: '#262626' , textDecoration: 'none'});
        $('ol > li > p').css('display','none');
        mesege_none.css('display','block');
        }else if($('.page > p:eq(1)').css('textDecoration') == "underline"){
            $('.page > p:eq(1)').next('p').css({color: '#a95001' , textDecoration: 'underline'})
            $('.page > p:eq(1)').css({color: '#262626' , textDecoration: 'none'});
            $('ol > li > p').css('display','none');
        mesege_none.css('display','block');
        }else if($('.page > p:eq(2)').css('textDecoration') == "underline"){
            $('.page > p:eq(2)').next('p').css({color: '#a95001' , textDecoration: 'underline'})
            $('.page > p:eq(2)').css({color: '#262626' , textDecoration: 'none'});
            $('ol > li > p').css('display','none');
        mesege_none.css('display','block');
        }else if($('.page > p:eq(3)').css('textDecoration') == "underline"){
            $('.page > p:eq(3)').next('p').css({color: '#a95001' , textDecoration: 'underline'})
            $('.page > p:eq(3)').css({color: '#262626' , textDecoration: 'none'});
            $('ol > li > p').css('display','none');
        mesege_none.css('display','block');
        }else if($('.page > p:eq(4)').css('textDecoration') == "underline"){
            $('.page > p:eq(4)').next('p').css({color: '#a95001' , textDecoration: 'underline'})
            $('.page > p:eq(4)').css({color: '#262626' , textDecoration: 'none'});
            $('ol > li > p').css('display','none');
        mesege_none.css('display','block');
        }else if($('.page > p:eq(5)').css('textDecoration') == "underline"){
            $('.page > p:eq(5)').next('p').css({color: '#a95001' , textDecoration: 'underline'})
            $('.page > p:eq(5)').css({color: '#262626' , textDecoration: 'none'});
            $('ol > li > p').css('display','none');
        mesege_none.css('display','block');
        }else if($('.page > p:eq(5)').css('textDecoration') == "underline"){
            $('.page > p:eq(5)').next('p').css({color: '#a95001' , textDecoration: 'underline'})
            $('.page > p:eq(5)').css({color: '#262626' , textDecoration: 'none'});
            $('ol > li > p').css('display','none');
        mesege_none.css('display','block');
        }else if($('.page > p:eq(6)').css('textDecoration') == "underline"){
            $('.page > p:eq(6)').next('p').css({color: '#a95001' , textDecoration: 'underline'})
            $('.page > p:eq(6)').css({color: '#262626' , textDecoration: 'none'});
            $('ol > li > p').css('display','none');
        mesege_none.css('display','block');
        }else if($('.page > p:eq(7)').css('textDecoration') == "underline"){
            $('.page > p:eq(7)').next('p').css({color: '#a95001' , textDecoration: 'underline'})
            $('.page > p:eq(7)').css({color: '#262626' , textDecoration: 'none'});
            $('ol > li > p').css('display','none');
        mesege_none.css('display','block');
        }
    })
    