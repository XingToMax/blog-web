$(function() {
    // Add copy icon
    // var $copyIcon = $('<i class="fa fa-clipboard" aria-hidden="true"></i>')
    // var $notice = $('<div class="copy-notice"></div>')
    // $('figure.highlight').prepend($copyIcon)
    // $('figure.highlight').prepend($notice)
    // copy function
    function copy(text, ctx) {
        if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
            try {
                document.execCommand('copy') // Security exception may be thrown by some browsers.
                $(ctx).prev('.copy-notice')
                    .text('Copy successfully')
                    .velocity({
                        translateX: -30,
                        opacity: 1
                    }, {
                        loop: 1,
                        duration: 750,
                        easing: 'easeOutQuint'
                    })
            } catch (ex) {
                $(ctx).prev('.copy-notice')
                    .text('Copy error')
                    .velocity({
                        translateX: -30,
                        opacity: 1
                    }, {
                        loop: 1,
                        duration: 750,
                        easing: 'easeOutQuint'
                    })
                return false
            }
        } else {
            $(ctx).prev('.copy-notice').text('not support')
        }
    }
    // click events
    $('.fa-clipboard').on('click', function() {
        copy('123', this)

    })
})