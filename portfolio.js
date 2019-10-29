//FUNCTION PRELOADER

$(window).load(()=> {
    $(".loading").addClass("spin");

    setTimeout(()=> {
        const currentPositon = $(".loading").css("transform");
        console.log(currentPositon)
        $(".loading").addClass("class").css("transform", currentPositon).css("transform", "none")
        $(".loading").animate({

        }, 500, ()=> {
            increaseWidth();
        });
    }, 500);

    const increaseWidth =()=> {
        $(".loading").animate({

            width: "+=100%",
        }, 1500, ()=>{
            slide();
            removeLine();
            moveTextRight();
            moveTextLeft();
        });
    };

    const removeLine =()=> {
        $(".loading").animate({

            width: "0%",
        }, 1500, ()=> {});
    };

    const goUp =()=> {
        $(".up").show();
        $(".up").animate({
            top: "-=50%"
        }, 1500, ()=> {
            $(this).hide();
        });
    };

    const goDown =()=>  {
        $(".down").show();
        $(".down").animate({
            bottom: "-=50%"
        }, 1500, ()=> {
            $(this).hide();
        });
    };

    const slide =()=> {
        goUp();
        goDown();
    };

});


//FUNCTION CHANGE COLOR
const toggleDarkLight =()=> {
    const body = document.getElementById("body");
    const currentClass = body.className;
    body.className = currentClass === "dark-mode" ? "light-mode" : "dark-mode";
};


//NAVBAR
$(document).ready(()=> {

    $('span').click(()=> {
        $('.overlay').toggleClass('anim');
    });

    $('.animation').click(()=>{
        $('.anim').toggleClass('reverse-animation');
    })
});
