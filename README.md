# JqueryshadowDom
* Plugin for Jquery to help with the creation of Shadow Dom elements - and manipulating the content inside of them dynamically.
----
## Usage
```javascript
      Id: 'D_Shadow', //Id of the Element in the Body
      Loc: $('body'), //Where it will be Appended
      Resources: [
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.14/css/mdb.min.css'
      ], //Linksheet that will be appended to the Shadow's Dom
      Style: {
        position: 'fixed',
        width: '95vw',
        height: '95vh',
        top: '2.5vh',
        left: '2.5vw',
        background: 'transparent'
      }, //Div appended to Body will have these styles
      Header: 'Default Title', //Card Header Text
      Body: '', //Card Body Content
      Footer: '', //Card Footer That Will Be Next To The Close Button
      Animation: {
        In: 'bounceIn .8s linear',
        Out: 'bounceOut .8s linear'
      }, //Render Animation
      DarkTheme: false, //Dark Card or Not
      CallBack: function () {} //Optional Callback Function
```
----
```javascript
var options = {
  Id: "Main_Panel",
  Header: 'Bigger Dark One',
  Style: {
    "position": "fixed",
    "width": "calc((100vw - 300px) - 1.5vw)",
    "height": "98vh",
    "top": "1vh",
    "right": "0.5vw",
    "background": "transparent"
  },
  Body: '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.google.com"></iframe></div>',
  DarkTheme: true
  };
}
$.Shadow(options)
```
----
```javascript
$.Shadow({
  Id: "Main_Panel",
  Header: 'Bigger Dark One',
  Style: {
    "position": "fixed",
    "width": "calc((100vw - 300px) - 1.5vw)",
    "height": "98vh",
    "top": "1vh",
    "right": "0.5vw",
    "background": "transparent"
  },
  Body: '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.google.com"></iframe></div>',
  DarkTheme: true
})
```
----

* Check out Some Examples --> http://jsfiddle.net/wczjrtv8/8/
