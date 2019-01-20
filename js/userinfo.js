$.get(HOST + '/api/user', result => {
    $('#avatar').attr('src', HOST + result.data.avatar)
    $('#username').html(result.data.username)
    $('#sum-blog').html(result.data.blogCount)
    $('#sum-label').html(result.data.labelCount)
    $('#sum-cls').html(result.data.clsCount)
    var linkHtml = ''
    result.data.links.forEach(element => {
        linkHtml += '<a class="author-info-links__name text-center" href="' + element.address + '" target="_blank">'
        linkHtml += element.name
        linkHtml += '</a>'
    })
    $('#link-container').html(linkHtml)
})