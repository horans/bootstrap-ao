# bootstrap-ao
(bootstrap) (a)dd (o)n components for common use.

### varibles and functions
#### varibles
* `bWidth`  
type: *varible (interger, get on load)*  
description: current browser width  
related: `isMobile` `bHeight`

* `bHeight`  
type: *varible (interger, get on load)*  
description: current browser height  
related: `isMobile` `bWidth`

* `isMobile`  
type: *varible (boolean, calculate on load)*  
description: whether current browser width is less than 1024px  
related: `bWidth` `bHeight`

* `modeNoBk`  
type: *varible (boolean, set by user)*  
description: no backward mode (default value is "false") 

#### functions
* `notice(type, status, action, stay)`  
description: display notices on top of screen, hide in 3.5 seconds  
dependency: `#shoulder` on page  
return: current notice index, worked with `notice_change()`
parameter:
  * type, string (`primary`/default `success` `info` `warning` `danger`)  
  * status, string (current status)  
  * action, string (suggested action)  
  * stay, boolean (hide in 3.5 second if not set)  

* `notice_change(type, status, action, index)`  
description: change notice content  
dependency: `#shoulder` on page, `notice()` return value  
return: none  
parameter:
  * 
  * type, string (`primary`/default `success` `info` `warning` `danger`)  
  * status, string (current status)  
  * action, string (suggested action)  
  * index, interger (`notice()` return value)  

* `imgLazy(type)`  
description: load image when its fully loaded  
dependency: add `lazy` class to `img` elements, and set `src` for placeholder,  `data-src` for true image url  
return: none  
parameter:
  * type, interger (1/general, 2/`body`, 3/no placeholder)  

* `toggleMask()`  
description: show translucent mask above page (forbid other action)  
dependency: none  
return: none  
parameter: none  

* `gotoTop()`
description: scroll to page top  
dependency: none  
return: none  
parameter: none  

* `urlChng(param, value, push)`  
description: update url query string
dependency: [url()](https://github.com/websanova/js-url)  
return: none  
parameter:
  * param, string  
  * value, string (set '' to remove param)  
  * push, boolean (add browser history if set)  

* `element.squeeze(speed)`  
description: squeeze or expand element  
dependency: element with `squeeze` class  
return: none  
parameter:
  * element, jQuery object  
  * speed, string (`fast` or `slow`)  

#### other
* auto reload on orientation change (for mobile device)
* add tooltip to links with `inactive` class, and stop page jumping

### style classes and tweaks
#### custom component
##### container
* `container-full`  
description: always occupies 100% width of its parent element, similar to `container-fluid`, but ignore container size  
related: `container` `container-fluid`

##### position
* `fixed`  
description: fixed position, top of the browser   
related: `fixed-bottom`

* `fixed-bottom`  
description: fixed postion, bottom of the brower  
related: `fixed`

* `center-h`  
description: children elements with `center-e` are horizontal centered  
related: `center-v` `center-e`

* `center-v`  
description: children elements with `center-e` are vertical centered  
related: `center-h` `center-e`

* `center-e`
description: horizontal or/and vertical centered to its parent element with `center-h` or/and `center-v`  
related: `center-h` `center-v` `center-a`

##### display
* `transparent`  
description: element is transparent (not hidden)  
related: `translucent` `hidden`

* `translucent`  
description: element is translucent  
related: `transparent` `hidden`

* `parameter`  
description: hidden parameter  
related: `hidden`

* `hide-mobile`  
description: hide element when browser is smaller than 1024px  
related: `hidden` `hide-desktop`

* `hide-desktop`
description: hide element when browser is larger than 1024px  
related: `hidden` `hide-mobile`

##### animation
* `transition`  
description: elements has 0.5 second transition for all properties  
related: `slow` `fast`

* `slow`  
description: elements has 0.7 second transition for all properties, works with `transition`  
related: `transition` `fast`

* `fast`  
description: elements has 0.3 second transition for all properties, works with `transition`  
related: `transition` `slow`

##### image
* `image`  
description: container for image element

* `img-full`  
description: image element occupes full width of its parent  
related: `img-responsive`

* `img-gray`  
description: image become gray  

* `img-zoom`  
description: image become a bit larger while hovering

##### text
* `text-compact`  
description: text has less line height  

* `text-gray`  
description: text become gray  
related: `text-white`

* `text-white`  
description: text become white  
related: `text-gray`

* `link-primary`  
description: link with primary color *(change to your color scheme)*  
related: `link-alt` `link-white`

* `link-alt`  
description: link with info color *(change to your color scheme)*  
related: `link-primary` `link-white`

* `link-white`  
description: link with white color  
related: `link-primary` `link-alt`

* `hide-overflow`  
description: hide overflow text with ellipsis for single line  

##### button
* `btn-round`  
description: button with round border  
related: `btn` `btn-ghost`

* `btn-ghost`  
description: button with tansparent background and colored border *(change to your color scheme)*  
related: `btn` `btn-round`

##### row
* `row-table`  
description: item of the row will share same height, and centered vertically  
related: `row` `row-compact`

* `row-compact`  
description: remove margin of the row, and remove padding of its children  
related: `row` `row-table`

##### modal
* `modal-full`  
description: a full page modal when browser width is less than 1024px, works with `modal`  
related: `modal`

#### tweak
##### bootstrap
* remove list margin
* remove label margin
* white text while hover on link with brand color background
* add left margin to caret
* making responsive image occupy 100% width to its parent
* showing "not-allowed" cursor for hoving disabled links
* add transition to buttons

##### font awesome
* add right margin to icon
* style checkbox

##### browser
* remove yellow background for input autofill;
* remove list padding
* remove focus ring
* hide scroll bar
* forbid textarea resize