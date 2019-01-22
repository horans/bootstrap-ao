# Bootstrap AO

Customized **Bootstrap** **A**dd **O**n styles for common use.
(Compatible with [Bootstrap](https://github.com/twbs/bootstrap) v4.x)

## Usage

* browser:
  1. import `bootstrap-ao.min.css` in page `head`
* compile:
  1. put `_add-on.scss` in bootstrap "scss" folder
  1. add `@import "add-on";` at the end of `bootstrap.scss`
  1. compile with `npm run css-main`

## Classes

### Layout

* container: different sizes base on your `$container-max-widths`
  * `container-sm`: container with max width of 540px
  * `container-md`: container with max width of 720px
  * `container-lg`: container with max width of 960px
* centered item:
  * `.center-absolute`: center item with absolute position, width/height needed
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

* `.parameter`: hide element as ".d-none"
* `.hide-overflow`: set overflow as "none"
* `.inline-block`: display as "inline-block" and vertical-align to "top"
* `.empty-holder`: invisible square that always occupy space
* `.transparent`: zero opacity
* `.translucent`: half opacity
* `.shrink`: element with zero height and zero opacity
  * `.shrink.active`: give 400px max height and full opacity
  * `.shrink.transition`: animate the change
  * `.shrink.shrink-partial`: with 200px max height
* `.with-full`: an absolute full size element, same size as its parent
* `.with-back`: element has background

```html
<div class="with-back">
  <div class="with-full">full size background</div>
  <div>foreground</div>
</div>
```

### Condition

* hide/show elements under conditions:

```html
<div data-dev="desktop">
  <button class="dev-desktop">show</button>
  <button class="dev-mobile">hide</button>
</div>
```

```html
<div data-sys="win">
  <button class="sys-win">show</button>
  <button class="sys-mac">hide</button>
</div>
```

```html
<div data-sys="ios">
  <button class="sys-ios">show</button>
  <button class="sys-android">hide</button>
</div>
```

```html
<div data-tar="nor">
  <button class="tar-nor">show</button>
  <button class="tar-alt">hide</button>
</div>
```

### Animation

* `.transition`: element with transition
  * `.transition.linear`: transition with linear timing function
  * `.transition.slow`: transition in 0.4s
  * `a`: transition as default
* `spin`: keyframe that rotates

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
* brightness: (+-10%/20%/35%)
  * primary:
    * `.bg-primary-dark`, `bg-primary-darker`, `bg-primary-darkest`,
    * `.bg-primary-light`, `bg-primary-lighter`, `bg-primary-lightest`.
    * `.text-primary-dark`, `text-primary-darker`, `.text-primary-darkest`,
    * `.text-primary-light`, `.text-primary-lighter`, `.text-primary-lightest`.
    * `.border-primary-dark`, `border-primary-darker`, `.border-primary-darkest`,
    * `.border-primary-light`, `.border-primary-lighter`, `.border-primary-lightest`.
  * secondary:
    * `.bg-secondary-dark`, `bg-secondary-darker`, `bg-secondary-darkest`,
    * `.bg-secondary-light`, `bg-secondary-lighter`, `bg-secondary-lightest`.
    * `.text-secondary-dark`, `text-secondary-darker`, `.text-secondary-darkest`,
    * `.text-secondary-light`, `.text-secondary-lighter`, `.text-secondary-lightest`.
    * `.border-secondary-dark`, `border-secondary-darker`, `.border-secondary-darkest`,
    * `.border-secondary-light`, `.border-secondary-lighter`, `.border-secondary-lightest`.

### Font and Text

* font weight:
  * `.font-weight-thin`(100)
  * `.font-weight-extra-light`(200)
  * `.font-weight-medium`(500)
  * `.font-weight-semi-bold`(600)
  * `.font-weight-extra-bold`(800)
  * `.font-weight-black`(900)

* font size:
  * `.font-size-normal`(16px)
  * `.font-size-large`(18px), `.font-size-huge`(20px)
  * `.font-size-extra`(22px), `.font-size-super`(24px)
  * `.font-size-small`(14px), `.font-size-tiny`(12px)
* link color inherit:

```html
<div class="text-info link-inherit">
  <a>with info color</a>
  <a class="text-success">with success color</a>
</div>
```

### Filter

* `.bg-filter`: add filter to background image
  * `.bg-filter.bg-filter-blur`: blur and zoom in a bit
  * `.bg-filter.bg-filter-grayscale`: black and white
  * `.bg-filter.bg-filter-empty`: container has no children

## Change Log

```text
181128
* add demo page
```

```text
181126
* apply brightness to border
```

```text
181114
* add darkest/lightest color
* add extra/super font size
```

```text
180815
* add background filter
```

```text
180813
* major update for bt4
```