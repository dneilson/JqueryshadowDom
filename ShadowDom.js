(function () {
  $.fn.ShadowFind = function (Target) {
    return $($(this).prop('shadowRoot')).find(Target);
  };
  $.Shadow = function (defaults) {
    this.defaults = {
      Id: 'D_Shadow',
      Loc: $('body'),
      Resources: [
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.14/css/mdb.min.css'
      ],
      Style: {
        position: 'fixed',
        width: '95vw',
        height: '95vh',
        top: '2.5vh',
        left: '2.5vw',
        background: 'transparent'
      },
      Header: 'Default Title',
      Body: '',
      Footer: '',
      Animation: {
        In: 'bounceIn .8s linear',
        Out: 'bounceOut .8s linear'
      },
      DarkTheme: false,
      CallBack: function () {}
    };
    $.extend(this.defaults, defaults);
    this(defaults);
    var DomNode = $('<div id="' + this.defaults.Id + '"></div>');
    var ShadowID = $(DomNode).prop('id');
    var AnimationOut = this.defaults.Animation.Out;
    if ($(document.children).contents().children().is('#' + this.defaults.Id) === true) {
      var CurrentBody = $('#' + this.defaults.Id);
      $(CurrentBody).removeAttr('style');
      $(CurrentBody).css(this.defaults.Style);
      $(CurrentBody).ShadowFind('.card-title').prop('innerText', this.defaults.Header);
      $(CurrentBody).ShadowFind('.card-footer').prop('innerHTML', this.defaults.Footer + '<button class="ShadowClose btn btn-danger float-right m-0 p-2">Close</button>');
      if (this.defaults.DarkTheme === true) {
        $(CurrentBody).ShadowFind('.card-header,.card-footer').addClass('text-white elegant-color-dark');
        $(CurrentBody).ShadowFind('.card-body').addClass('text-white elegant-color');
      } else {
        $(CurrentBody).ShadowFind('.card-header,.card-footer').removeClass('text-white elegant-color-dark');
        $(CurrentBody).ShadowFind('.card-body').removeClass('text-white elegant-color');
      }
      $(CurrentBody).ShadowFind('.ShadowClose').on('click', function () {
        $(CurrentBody).css({
          animation: AnimationOut
        });
        setTimeout(function () {
          $(CurrentBody).remove();
        }, 800);
      });
      $('#' + this.defaults.Id).ShadowFind('.card-body').prop('innerHTML', this.defaults.Body);
    } else {
      $(DomNode).appendTo(this.defaults.Loc).css('animation', this.defaults.Animation.In);
      DomNode['0'].attachShadow({ mode: 'open' });
      $($(DomNode).prop('shadowRoot')).append('<div/>');
      $($(DomNode).prop('shadowRoot')).wrapInner('<body/>');
      $($(DomNode).prop('shadowRoot')).wrapInner('<html/>');
      $(DomNode).ShadowFind('html').prop('innerHTML', '<head></head><body></body>');
      $(DomNode).css(this.defaults.Style);
      $.each(this.defaults.Resources, function (i, item) {
    	  $('<link href="' + item + '" rel="stylesheet">').appendTo($(DomNode).ShadowFind('head'));
      });
      $(DomNode).ShadowFind('body').append('<div class="card h-100 position-absolute shadow w-100">' +
    '<div class="card-header p-1 font-italic"><h3 class="text-center mb-0 card-title">' + this.defaults.Header + '</h3><i class="ShadowClose fa fa-2x fa-close text-danger" style="cursor: pointer;position: absolute;top: 5px;right: 5px;"></i></div>' +
    '<div class="card-body p-2" style="overflow-y: overlay;">' + this.defaults.Body + '</div>' +
    '<div class="card-footer p-1">' + this.defaults.Footer + '<button class="ShadowClose btn btn-danger float-right m-0 p-2">Close</button></div>' +
    '</div>').find('.ShadowClose').on('click', function () {
        $(DomNode).css({
          animation: AnimationOut
        });
        setTimeout(function () {
          $(DomNode).remove();
        }, 800);
      });
      if (this.defaults.DarkTheme === true) {
        $(DomNode).ShadowFind('.card-header,.card-footer').addClass('text-white elegant-color-dark');
        $(DomNode).ShadowFind('.card-body').addClass('text-white elegant-color');
      } else {
        $(DomNode).ShadowFind('.card-header,.card-footer').removeClass('text-white elegant-color-dark');
        $(DomNode).ShadowFind('.card-body').removeClass('text-white elegant-color');
      }
    }
    this.defaults.CallBack.call(this);
    return $(DomNode);
  };
})(jQuery);
