# bootstrap-ao
(bootstrap) (a)dd (o)n components for common use

## js: variables and functions
### variables
* `bWidth`  
type: *variable (interger, get on load, resize)*  
description: current browser width  
related: `bHeight` `isMobile` `isTablet` `isDesktop`

* `bHeight`  
type: *variable (interger, get on load, resize)*  
description: current browser height  
related: `bWidth` `isMobile` `isTablet` `isDesktop`

* `bAgent`  
type: *variable (string, get on load)*  
description: current browser user-agent  
related: `bWidth` `isMobile` `isTablet` `isDesktop`

* `isMobile`  
type: *variable (boolean, calculate on load, resize)*  
description: whether current browser width <800px *(change to your break point)*  
related: `bWidth` `bHeight` `isTablet` `isDesktop`

* `isTablet`  
type: *variable (boolean, calculate on load, resize)*  
description: whether current browser width <1200px *(change to your break point)*  
related: `bWidth` `bHeight` `isTablet` `isDesktop`

* `isDesktop`  
type: *variable (boolean, calculate on load, resize)*  
description: whether current browser width >=1200px *(change to your break point)*  
related: `bWidth` `bHeight` `isMobile` `isTablet`

* `sMode.noback`  
type: *variable (boolean, set by user)*  
description: no backward mode ("false" as default) 

* `sMode.refresh`  
type: *variable (boolean, set by user)*  
description: refresh page on orientation change ("false" as default) 

### functions
* `toggleMask(switch)`  
description: show translucent mask above page (forbid other action)  
dependency: none  
return: none  
parameter:
  * switch, string ('on/off', toggle without it)  

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

### other
* scroll to in page anchor, and prevent hash change

## css: style classes and tweaks
### custom component
#### container
* `container-full`  
description: always occupies 100% width of its parent element, similar to `container-fluid`, but ignore container size and grid gutter width  
related: `container` `container-fluid`

* `container-sm`  
description: a centered container with max width of 800px, work with `container`(with gutter) or `container-full`(no gutter)  
related: `container` `container-full`

* `container-md`  
description: a centered container with max width of 1000px, work with `container`(with gutter) or `container-full`(no gutter)  
related: `container` `container-full`

* `container-lg`  
description: a centered container with max width of 1200px, work with `container`(with gutter) or `container-full`(no gutter)  
related: `container` `container-full`

* `container-xl`  
description: a centered container with max width of 1400px, work with `container`(with gutter) or `container-full`(no gutter)  
related: `container` `container-full`

* `col-xl-`  
description: expand grid system to `col-xl-` version (browser width >1400px)  
related: `container-xl`

#### layout
* `border-box`  
description: set element and its children "box-sizing: border-box"  

* `clear-both`  
description: add clearfix for element  
related: `grid`

* `inline`  
description: set element to inline  

* `inline-block`  
description: set element to inline block and align to its top  

* `a-block`  
description: set anchor or anchors in element to block  

* `grid`  
description: simple half size grid on desktop  
related: `clear-both`

* `flex-box`  
description: flex item container  
related: `flex-item` `flex-reverse`

* `flex-item`  
description: flex item  
related: `flex-box` `flex-reverse`

* `flex-reverse`  
description: flex item display in reverse order 
related: `flex-box` `flex-reverse`

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
description: hide element when browser width <1200px *(change to your break point)*  
related: `hidden` `hide-desktop`

* `hide-desktop`
description: hide element when browser width >1200px *(change to your break point)*  
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

* `shrink`  
description: hidden element, add `active` to slide down.  
related: `transition` `shrink-part`

* `shrink-part`  
description: half hidden element, add `active` to slide down.  
related: `transition` `shrink`

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

* `img-center`  
description: image cropped to center of its container  
related: `img-center-v`

* `img-center-v`  
description: image height is large than width, work with `img-center`  
related: `img-center`

* `bg-cover`  
description: background image is "center" and "cover", with "no-repeat"  
related: `bg-contain`

* `bg-contain`  
description: background image is "center" and "contain", with "no-repeat"  
related: `bg-cover`

* `bg-center`  
description: background image is "center" and "no-repeat"  
related: `bg-cover`

* `bg-responsive`  
description: background image is responsive, cropped to center  
related: `bg-16x9` `bg-4x1` `bg-3x1`

* `bg-16x9`  
description: background image is 16x9, work with `bg-responsive`  
related: `bg-responsive` `bg-4x1` `bg-3x1`

* `bg-4x1`  
description: background image is 4x1, work with `bg-responsive`  
related: `bg-responsive` `bg-16x9` `bg-3x1`

* `bg-3x1`  
description: background image is 3x1, work with `bg-responsive`  
related: `bg-responsive` `bg-16x9` `bg-4x1`

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

* `bg-white`  
description: element with white background  

* `underline`  
description: text with underline (like traditional link)  

#### button
* `btn-round`  
description: button with round border (border radius to max)  
related: `btn` `btn-ghost` `btn-white` `btn-square`

* `btn-square`  
description: button with square border (remove border radius)  
related: `btn` `btn-ghost` `btn-white` `btn-round`

* `btn-ghost`  
description: button with tansparent background and colored border *(change to your color scheme)*  
related: `btn` `btn-round` `btn-white`

* `btn-white`  
description: button with tansparent background and white text/border color  
related: `btn` `btn-round` `btn-ghost`

#### row
* `col`  
description: extra class for column  
related: `row`

* `row-table`  
description: item of the row will share same height, and centered vertically, work with `row` *(will made row become non-floating)*  
related: `row-xs` `row-sm` `row-md` `row-lg`

* `row-xs`  
description: row fallback to normal when browser width <800px, work with `row-table`  
related: `row-sm` `row-md` `row-lg`

* `row-sm`  
description: row fallback to normal when browser width <1000px, work with `row-table`  
related: `row-xs` `row-md` `row-lg`

* `row-md`  
description: row fallback to normal when browser width <1200px, work with `row-table`  
related: `row-xs` `row-sm` `row-lg`

* `row-lg`  
description: row fallback to normal when browser width <1400px, work with `row-table`  
related: `row-xs` `row-sm` `row-md`

* `row-compact`  
description: remove margin of the row, and remove padding of its children, work with `row`  

#### modal
* `modal-full`  
description: a full page modal when browser width <1200px *(change to your break point)*, works with `modal`  
related: `modal`

#### carousel
* `carousel-fade`  
description: carousel slide fadeout when switch to another, works with `carousel`. ([source](http://stackoverflow.com/questions/18548731/))  
related: `carousel`

#### input
* `fa-input`  
description: use [Font Awesome](https://github.com/FortAwesome/Font-Awesome) to style checkbox/radio input. (example code: `<label class="fa-input"><input type="checkbox"><span>check me</span></label>`)  
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

#### browser
* remove yellow background for input autofill
* remove input/select round style
* remove select arrow, change cursor style
* remove list padding
* remove focus ring
* hide scroll bar
* forbid textarea resize