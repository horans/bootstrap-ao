# bootstrap-ao
[bootstrap] [a]dd [o]n components for common use.

### functions

### style classes
#### custom component
##### container
*container-full*
description: always occupies 100% width of its parent element, similar to `container-fluid`, but ignore container size.
related: `container` `container-fluid`

##### position
*fixed*
description: fixed position, top of the browser
related: `fixed-bottom`

*fixed-bottom*
description: fixed postion, bottom of the brower
related: `fixed`

*center-h*
description: direct children elements with `center-e` are horizontal centered.
related: `center-v` `center-e`

*center-v*
description: direct children elements with `center-e` are vertical centered.
related: `center-h` `center-e`

*center-e*
description: horizontal or/and vertical centered to its parent element with `center-h` or/and `center-v`
related: `center-h` `center-v` `center-a`

##### display
`transparent`
description: transparent (not hidden)
related: `translucent` `hidden`

*translucent*
description: translucent
related: `transparent` `hidden`

*parameter*
description: hidden parameter
related: `hidden`

*hide-mobile*
description: hide element when browser is smaller than 1024px
related: `hide-desktop` `hidden`

*hide-desktop*
description: hide element when browser is larger than 1024px
related: `hide-mobile` `hidden`

##### animation
*transition*
description: elements has 0.5 second transition for all properties
related: `slow` `fast`

*slow*
description: elements has 0.7 second transition for all properties, works with `transition`
related: `transition` `fast`

*fast*
description: elements has 0.3 second transition for all properties, works with `transition`
related: `transition` `slow`

*squeeze*
description: element can be vertical squeezed
related: `squeezed`

*squeezed*
description: element is vertical squeezed, works with `squeezed` and squeeze()
related: `squeeze`

##### image
*image*
description: container for image element

*img-full*
description: image element occupes full width of its parent;
related: `img-responsive`

*img-gray*
description: image become gray

*img-zoom*
description: image become a bit larger while hovering

##### text
*text-compact*
description: text has less line height

*text-gray*
description: text become gray
related: `text-white`

*text-white*
description: text become white
related: `text-gray`

*link-primary*
description: link with primary color *change to your color scheme*
related: `link-alt` `link-white`

*link-alt*
description: link with info color *change to your color scheme*
related: `link-primary` `link-white`

*link-white*
description: link with white color
related: `link-primary` `link-alt`

*hide-overflow*
description: hide overflow text with ellipsis for single line

##### button
*btn-round*
description: button with round border
related: `btn-ghost`

*btn-ghost*
description: button with tansparent background and colored border *change to your color scheme*
related: `btn-round`

##### row
*row-table*
description: item of the row will share same height, and centered vertically
related: `row` `row-compact`

*row-compact*
description: remove margin of the row, and remove padding of its children
related: `row` `row-table`

##### modal
*modal-full*
description: works with `modal`
related: `modal`

#### tweak
##### bootstrap
remove list margin
remove label margin
white text while hover on link with brand color background
add left margin to caret
making responsive image occupy 100% width to its parent
showing "not-allowed" cursor for hoving disabled links
add transition to buttons

##### font awesome
add right margin to icon
style checkbox

##### browser
remove yellow background for input autofill;
remove list padding
remove focus ring
hide scroll bar
forbid textarea resize