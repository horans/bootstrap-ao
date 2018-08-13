# Bootstrap AO

Customized __Bootstrap__ __A__dd __O__n styles for common use.
(Compatible with [Bootstrap](https://github.com/twbs/bootstrap) v4.x)

## Usage

* browser:
  1. import `bootstrap-ao.min.css` in page `head`
* compile:
  1. put `_add-on.scss` in bootstrap "scss" folder
  1. add `@import "add-on";` at the end of `bootstrap.scss`
  1. compile with `npm run css-main`

## Classes

### Condition

* hide/show elements under condition:

```html
<div data-dev="desktop">
  <button class="dev-desktop">show</button>
  <button class="dev-mobile">hide</button>
</div>
```

```html
<div data-dev="win">
  <button class="dev-win">show</button>
  <button class="dev-mac">hide</button>
</div>
```

```html
<div data-dev="ios">
  <button class="dev-ios">show</button>
  <button class="dev-andriod">hide</button>
</div>
```

```html
<div data-dev="nor">
  <button class="dev-nor">show</button>
  <button class="dev-alt">hide</button>
</div>
```

### Animation

* `.transition`: element with transition
  * `.transition.linear`: transition with linear timing function
  * `.transition.slow`: transition in 0.4s
  * `a`: transition as default
* `spin`: keyframe that rotates

### Layout

* container: different sizes base on your `$container-max-widths`
  * `container-sm`: container with max width of 540px
  * `container-md`: container with max width of 720px
  * `container-lg`: container with max width of 960px
  * `container-xl`: container with max width of 1140px
* flex reverse: reverse direction of flex items
  * `.flex-row-reverse`
  * `.flex-col-reverse`
* centered item:
  * `.center-absolute`: center item with absolute position
  * other combinations:

```html
<div class="center-h">
  <div class="center-e">horizontal centered</div>
</div>
```

```html
<div class="center-v">
  <div class="center-e">vertical centered</div>
</div>
```

```html
<div class="center-a">
  <div class="center-e">all centered</div>
</div>
```

### Display

* `.inline-block`: display as "inline-block" and vertical-align to "top"
* `.empty-holder`: invisible square that always occupy space
* `.transparent`: zero opacity
* `.translucent`: half opacity
* `.shrink`: container with zero height and zero opacity
  * `.shrink.active`: give 400px max height and full opacity
  * `.shrink.transition`: animate the change
  * `.shrink.shrink-partial`: with 200px max height
* `.with-full`: an absolute full size elment, same size as its parent
* `.with-back`: container has background

```html
<div class="with-back">
  <div class="with-full">full size background</div>
  <div>foreground</div>
</div>
```

### Shadow

* `.with-text-shadow`: add shadow to text
* `.with-box-shadow`: add shadow to container

### Cursor

* `.with-hand`: hover with "pointer" cursor
* `.with-arrow`: hover with "default" cursor
* `.with-stop`: hover with "not-allowed" cursor

### User

* `.no-interaction`: pointer-events is set to "none"
* `.no-selection`: user-select is set to "none"

### Media

* background:
  * `.bg-center`: background is "center" and "no-repeat"
  * `.bg-cover`: background-size is "cover"
  * `.bg-contain`: background-size is "contain"
* image/video:
  * `.with-media`: contain image/video element
  * `.media-center`: centered and with cropped top and bottom content
  * `.media-center.media-center-vertical`: with cropped left and right content
* mask:
  * `.with-mask`: add 25% dark mask
  * `.with-mask.with-mask-light`: add 15% dark mask
  * `.with-mask`.with-mask-dark: add 50% dark mask

### Color

* gray:
  * `.bg-gray-1` to `.bg-gray-9`
  * `.text-gray-1` to `.text-gray-9`
  * `.border-gray-1` to `.border-gray-9`
* brightness:
  * primary:
    * `.bg-primary-darker`, `bg-primary-dark`, `bg-primary-light` and `bg-primary-lighter`
    * `.text-primary-darker`, `text-primary-dark`, `text-primary-light` and `text-primary-lighter`
  * secondary:
    * `.bg-secondary-darker`, `bg-secondary-dark`, `bg-secondary-light` and `bg-secondary-lighter`
    * `.text-secondary-darker`, `text-secondary-dark`, `text-secondary-light`, `text-secondary-lighter`

### Font and Text

* font weight:
  * `.font-weight-extra-light`
  * `.font-weight-extra-bold`
* font size:
  * `.font-size-normal`
  * `.font-size-large`, `.font-size-huge`
  * `.font-size-small`, `.font-size-tiny`
* link color inherit:

```html
<div class="text-info link-inherit">
  <a>with info color</a>
  <a class="text-success">with success color</a>
</div>
```

## Change Log

__180813__

* major update for bt4
