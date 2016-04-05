# bootstrap-ao
(bootstrap) (a)dd (o)n components for common use

## js: varibles and functions
### varibles
* `bWidth`  
type: *varible (interger, get on load)*  
description: current browser width  
related: `bHeight` `isMobile` `isTablet` `isDesktop`

* `bHeight`  
type: *varible (interger, get on load)*  
description: current browser height  
related: `bWidth` `isMobile` `isTablet` `isDesktop`

* `isMobile`  
type: *varible (boolean, calculate on load)*  
description: whether current browser width is less than 800px *(change to your break point)*  
related: `bWidth` `bHeight` `isTablet` `isDesktop`

* `isTablet`  
type: *varible (boolean, calculate on load)*  
description: whether current browser width is less than 1200px *(change to your break point)*  
related: `bWidth` `bHeight` `isTablet` `isDesktop`

* `isDesktop`  
type: *varible (boolean, calculate on load)*  
description: whether current browser width is equal to/larger than 1200px *(change to your break point)*  
related: `bWidth` `bHeight` `isMobile` `isTablet`

* `sMode.noback`  
type: *varible (boolean, set by user)*  
description: no backward mode (default value is "false") 

### functions
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
  * type, string (`primary`/default `success` `info` `warning` `danger`)  
  * status, string (current status)  
  * action, string (suggested action)  
  * index, interger (`notice()` return value)  

* `element.lazy(icon)`  
description: load image when its fully loaded  
dependency: add `lazy` class to `img` element, and set `src` for placeholder image, `data-src` for true image url, and advanced `data-mobile`/`data-tablet` can be set for image for mobile/tablet device. (a: image will apply to `background-image` for a "non-img" element; b: animated placeholder icon needs [Font Awesome](https://github.com/FortAwesome/Font-Awesome))  
return: none  
parameter:
  * element, jQuery object  
  * icon, boolean (true/with placeholder icon)  

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
  * speed, string (`fast` `slow`)  

### other
* auto reload on orientation change (for mobile device)
* add tooltip to links with `inactive` class, and stop page jumping

## css: style classes and tweaks
### custom component
#### container
* `container-full`  
description: always occupies 100% width of its parent element, similar to `container-fluid`, but ignore container size and grid gutter width  
related: `container` `container-fluid`

* `small`  
description: a centered container with max width of 800px, work with `container`(with gutter) or `container-full`(no gutter)  
related: `container` `container-full`

* `medium`  
description: a centered container with max width of 1000px, work with `container`(with gutter) or `container-full`(no gutter)  
related: `container` `container-full`

* `large`  
description: a centered container with max width of 1200px, work with `container`(with gutter) or `container-full`(no gutter)  
related: `container` `container-full`

* `x-large`  
description: a centered container with max width of 1400px, work with `container`(with gutter) or `container-full`(no gutter)  
related: `container` `container-full`

#### position
* `fixed`  
description: fixed position, top of the browser   
related: `bottom`

* `bottom`  
description: fixed position, bottom of the brower, works with `fixed`  
related: `fixed`

* `center-h`  
description: children elements with `center-e` are horizontal centered  
related: `center-v` `center-a` `center-e`

* `center-v`  
description: children elements with `center-e` are vertical centered  
related: `center-h` `center-a` `center-e`

* `center-a`  
description: children elements with `center-e` are both horizontal and vertical centered  
related: `center-h` `center-v` `center-e`

* `center-e`
description: horizontal or/and vertical centered to its parent element with `center-h` or/and `center-v`  
related: `center-h` `center-v` `center-a`

#### display
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
description: hide element when browser's width is smaller than 1200px *(change to your break point)*  
related: `hidden` `hide-desktop`

* `hide-desktop`
description: hide element when browser's width is larger than 1200px *(change to your break point)*  
related: `hidden` `hide-mobile`

#### animation
* `transition`  
description: elements has 0.5 second transition for all properties  
related: `slow` `fast` `delay` `ease`

* `slow`  
description: elements has 0.7 second transition for all properties, works with `transition`  
related: `transition` `fast` `delay` `ease`

* `fast`  
description: elements has 0.3 second transition for all properties, works with `transition`  
related: `transition` `slow` `delay` `ease`

* `delay`  
description: elements has 0.5 second transition delay, works with `transition` and `fast`(0.3s) / `slow`(0.7s)  
related: `transition` `fast` `slow` `ease`

* `ease`  
description: transition with "ease" rather than "linear", works with `transition`  
related: `transition` `fast` `slow` `delay`

#### image
* `image`  
description: container for image element

* `img-full`  
description: image element occupes full width of its parent  
related: `img-responsive`

* `img-gray`  
description: image become gray  

* `img-zoom`  
description: image become a bit larger while hovering

* `bg-cover`  
description: background image is "center" and "cover", with "no-repeat"

#### text
* `text-compact`  
description: text has less line height  

* `text-gray`  
description: text become gray  
related: `text-white`

* `text-white`  
description: text become white  
related: `text-gray`

* `text-light`  
description: text become light  
related: `text-bold`

* `text-bold`  
description: text become bold  
related: `text-thin`

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

* `bg-shadow`  
description: adding gradiant shadow background to text (ideal for white text on image)  

#### button
* `btn-round`  
description: button with round border  
related: `btn` `btn-ghost` `btn-white`

* `btn-ghost`  
description: button with tansparent background and colored border *(change to your color scheme)*  
related: `btn` `btn-round` `btn-white`

* `btn-white`  
description: button with tansparent background and white text/border color  
related: `btn` `btn-round` `btn-ghost`

#### row
* `row-table`  
description: item of the row will share same height, and centered vertically *(will made row become non-floating)*  
related: `row` `row-compact`

* `row-compact`  
description: remove margin of the row, and remove padding of its children  
related: `row` `row-table`

#### modal
* `modal-full`  
description: a full page modal when browser width is less than 1200px *(change to your break point)*, works with `modal`  
related: `modal`

#### carousel
* `carousel-fade`  
description: carousel slide fadeout when switch to another, works with `carousel`. ([source](http://stackoverflow.com/questions/18548731/))  
related: `carousel`

#### input
* `fa-input`  
description: use [Font Awesome](https://github.com/FortAwesome/Font-Awesome)) to style checkbox/radio input. (example code: `<label class="fa-input"><input type="checkbox"><span>check me</span></label>`)  
related: `form-control`


### tweak
#### bootstrap
* remove list margin
* remove label margin
* white text while hover on link with brand color background
* add left margin to caret
* making responsive image occupy 100% width to its parent
* showing "not-allowed" cursor for hoving disabled links
* add transition to buttons

#### font awesome
* add right margin to icon
* style checkbox

#### browser
* remove yellow background for input autofill;
* remove list padding
* remove focus ring
* hide scroll bar
* forbid textarea resize