document.addEventListener('DOMContentLoaded', function() {
    var a = function () {
        let b = document.querySelector('.chat-input .community-points-summary button[class*="ScCoreButtonSuccess-sc-"]');

        if (!b) {
            return;
        }

        var c = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });

        // If cancelled, don't dispatch our event
        b.dispatchEvent(c);
    }

    setInterval(a, 500);
});

document.addEventListener("DOMContentLoaded",function(){setInterval(function(){let e=document.querySelector('.chat-input .community-points-summary button[class*="ScCoreButtonSuccess-sc-"]');var t;e&&(t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}),e.dispatchEvent(t))},500)});
