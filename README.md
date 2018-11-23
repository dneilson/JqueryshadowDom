# JqueryshadowDom
* Plugin for Jquery to help with the creation of Shadow Dom elements - and manipulating the content inside of them dynamically.
----
## Usage
* ### Seperately
----
```javascript
$('<div id="boogers" style="position: fixed; width: 200px; height: 200px; bottom: 0px; right: 0px; background: transparent;"></div>').ShadowNode()
```
```javascript
$('#boogers').ShadowHead('<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet"><link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.14/css/mdb.min.css" rel="stylesheet">')
```
```javascript
$('#boogers').ShadowBody('<div class="card m-5"><div class="card-body elegant-color text-white">This Is In The Shadow</div></div>')
```
```javascript
$('#boogers2').ShadowFind('.card-body').prop('innerHTML',"This Is Also In Its Own Shadow - <i>And Stuff</i>")
```
```javascript
var buttontoggle = $('<button class="btn btn-sm p-1 w-100 btn-primary">Test</button>');
$('#boogers').ShadowFind('.card-body').append($(buttontoggle).on('click',function () { $('#boogers2').fadeToggle() }) );
```
----
* ### Chained Together
```javascript 
$('<div id="boogers2"></div>').ShadowNode().css({
position:'fixed',
width:'100vw',
height:'100vh',
top:'25%',
background:'transparent'
}).ShadowHead('<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet"><link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.14/css/mdb.min.css" rel="stylesheet">')
.ShadowBody('<div class="card m-5"><div class="card-body elegant-color text-white">This Is In The Shadow</div></div>')
```
----
* Declaring another ```$.ShadowNode()``` with the same id as any element, will remove the existing element, and append your defined node to the document body and attach the Shadow - *Regardless of the element having a Shadow Attached*.
* Check out an example on JSFiddle http://jsfiddle.net/ao4xpfws/7/
