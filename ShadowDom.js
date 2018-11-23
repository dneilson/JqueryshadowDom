(function () {
 $.fn.ShadowNode = function () {
   var id = $(this).prop('id');
   if ( $('body').children().is('#'+id) === false ) {
      $(this).css('display','none')
      this["0"].attachShadow({mode:'open'});
    $(this).appendTo('body')
    $($(this).prop('shadowRoot')).append('<div/>')
    $($(this).prop('shadowRoot')).wrapInner('<body/>')
    $($(this).prop('shadowRoot')).wrapInner('<html/>')
    $($(this).prop('shadowRoot')).find('html').prop('innerHTML', '<head></head><body></body>');
   } else {
    $('#'+id).remove()
      $(this).css('display','none')
      this["0"].attachShadow({mode:'open'});
    $(this).appendTo('body')
    $($(this).prop('shadowRoot')).append('<div/>')
    $($(this).prop('shadowRoot')).wrapInner('<body/>')
    $($(this).prop('shadowRoot')).wrapInner('<html/>')
    $($(this).prop('shadowRoot')).find('html').prop('innerHTML', '<head></head><body></body>');
     }
     $(this).fadeIn()
     return this
 }
 $.fn.ShadowBody = function (NewContent) {
  $($(this).prop('shadowRoot')).find('body').prop('innerHTML',NewContent)
   return this
 }
 $.fn.ShadowHead = function (NewContent) {
  $($(this).prop('shadowRoot')).find('head').prop('innerHTML',NewContent)
   return this
 }
 $.fn.ShadowFind = function (Target) {
   return $($(this).prop('shadowRoot')).find(Target)
 }
 })(jQuery)
