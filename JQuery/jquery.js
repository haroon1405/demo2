// heading = document.querySelector('h1');
// buttons = document.querySelectorAll('button');

// buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         heading.style.color = "red";
//     })
// })


$('h1').css('color','red');        //to style elmnt

$('h1').addClass('bigHead');       //separation of concerns
// $('h1').removeClass('bigHead');
// $('h1').hasClass('bigHead');

$('h1').text("World");            //changes text of elmnt
$('button').text('Click Here');
$('h1').html('<em>Nice</em>');         //changes html of elmnt

$('a').attr('href','https://www.youtube.com/');    //set attribute of elmnt

$('button').click(()=>{            //adds click eventlistener to all the buttons
    $('h1').css('color','green');
});

$(document).keydown((event)=>{         //document eventlistener
    $('h1').text(event.key);
});

$('button').on('click',()=>{       //diff method
    console.log('hello');
})

$('h1').before("<em>Before</em>");          //before the tag
$('h1').prepend("<strong>Pre </strong>");          //start of the tag
$('button').append('<span>Text</span>');    //end of the tag
$('button').after('<button style="color:red">After</button>');    //after the tag
// $('button').remove();      removes all btn elmnts
