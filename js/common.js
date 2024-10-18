$(document).ready(function () {


  $('.mgnb_bg').hide();
  $('.mgnb_wrap').hide();

  $('.hg_but').click(function () {
    $('.mgnb_bg').fadeIn();
    $('.mgnb_wrap').slideDown();
  });


  $('header .mgnb_wrap .close').click(function () {
    $('.mgnb_bg').fadeOut();
    $('.mgnb_wrap').slideUp();
  });


  $('header .mgnb li').click(function () {
    $('.mgnb_bg').fadeOut();
    $('.mgnb_wrap').fadeOut();
  });






  //스크롤 시 fix class로 바뀌는 //
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 700) {
      $('#header').addClass('fix');
      $("#header .inner").css({
        "border": "none"
      });
    }
    else {
      $('#header').removeClass('fix');
      $("#header .inner").css({
        "border-bottom": "1px solid #000"
      });
    }
  })


  $('.button_posi p').hide();

  $('.grid_depth li').mouseenter(function () {
    $(this).find('.button_posi p').fadeIn();
  });
  $('.grid_depth li').mouseleave(function () {
    $(this).find('.button_posi p').fadeOut();
  });



  $('#web_project .content_wrap .button_txt').hide();

  $('#web_project li').mouseenter(function () {
    $(this).find('.button_txt').fadeIn();
  });
  $('#web_project li').mouseleave(function () {
    $(this).find('.button_txt').fadeOut();
  });


  $('#about_me .progress_bar').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1100) {
      $('#about_me .progress_bar').fadeIn();
      $('#about_me .bar1 , #about_me .bar2').animate({
        width: '95%'
      }, 1000);
      $('#about_me .bar3').animate({
        width: '80%'
      }, 1000);
      $('#about_me .bar4').animate({
        width: '70%'
      }, 1000);
      $('#about_me .bar5').animate({
        width: '80%'
      }, 1000);
    }
  });






//  내가 작성
  $(".mvis_slick").slick({
        // lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows : true,
        // dots : true,
        // autoplay:true,
        // speed : 800,
        // autoplaySpeed : 2000, 
        pauseOnHover : true,
        prevArrow : "<button type='button' class='slick-prev'>이전</button>",
				nextArrow : "<button type='button' class='slick-next'>다음</button>",
        initialSlide : 0,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 960, //화면 사이즈 960px
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:1 
						} 
					},
					{ 
						breakpoint: 768, //화면 사이즈 768px
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:1 
						} 
					}
				]
    });
    $('.mvis_slick').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){ 
      var i = (currentSlide ? currentSlide : 0) + 1;
      $('.sPage1').html("<span class='now'>"+i+"</span><span> / "+slick.slideCount+"</span>");
      });

      // ***************** nav 부드러운 움직임
      document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 동작 방지
    
            const target = document.querySelector(this.getAttribute('href'));
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // 부드러운 스크롤
            });
        });
      });

      // ************* 과정안내 탭
      // 패널과 탭의 연결을 설정하는 함수
      function setupTabs() {
        $('#main_edu .innerLong').each(function() {
            var $this = $(this);
            var $anchors = $this.find('.tab a');
            var $panels = $this.find('.panels_set article');
            var $activePanel = $this.find('.tab a.on').attr('href');

            $($activePanel).show(); // 초기 패널 표시

            $anchors.click(function(event) {
                event.preventDefault(); // 기본 동작 방지
                var href = $(this).attr('href');

                $panels.hide(); // 모든 패널 숨기기
                $anchors.removeClass('on'); // 모든 탭 비활성화
                $(href).show(); // 선택한 패널 표시
                $(this).addClass('on'); // 현재 탭 활성화
                changeBackground(href); // 배경 이미지 변경
            });
        });
      }

      // 배경 이미지를 변경하는 함수
      function changeBackground(href) {
          var bgImageMap = {
              '#panel_pro': '/images/edubg1.jpg',
              '#panel_di': '/images/edubg2.jpg',
              '#panel_net': '/images/edubg3.jpg',
              '#panel_el': '/images/edubg4.jpg',
              '#panel_5': '/images/edubg5.jpg'
          };
          $('#main_edu').css('background-image', 'url(' + bgImageMap[href] + ')');
      }

      setupTabs(); // 탭 설정 함수 호출

      // ********footer 팝업
      const modal = document.getElementById("myModal");
      const modalContent = document.getElementById("modalContent");
      const closeBtn = document.querySelector(".close");

      document.querySelectorAll('.modal-link').forEach(link => {
          link.addEventListener('click', function(e) {
              e.preventDefault(); // 기본 동작 방지
              const targetId = this.getAttribute('data-target'); // data-target에서 ID 가져오기
              const content = document.getElementById(targetId).innerHTML; // 해당 ID의 내용 가져오기
              modalContent.innerHTML = content; // 모달 내용 설정
              modal.style.display = "block"; // 모달 보이기
          });
      });

      // 모달 닫기 버튼 클릭 시
      closeBtn.onclick = function() {
          modal.style.display = "none"; // 모달 숨기기
      }

      // 모달 외부 클릭 시 모달 닫기
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none"; // 모달 숨기기
          }
      }

}); // ready End