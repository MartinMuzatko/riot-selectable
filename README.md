# ![riot-selectable](http://i.imgur.com/Ecc9xPB.png)

A tiny mixin to quickly make lists selectable.
Really, this is nothing more than a tiny controller of the `selected` property.
Works best with an array of objects or an object of objects.
Doesn't work with an Array of literals (Strings, Numbers).

## Demo
Multiple Lists http://embed.plnkr.co/EPg8ys5XcFpobyW6bgrn/

One List: http://plnkr.co/edit/n17MeAp4l11U5v3wQoH6?p=preview

# Features

 - Select/All
 - Deselect/All
 - Toggle/All (Inverts Selection)
 - getSelected
 - getDeselected

All items/objects gain the `selected` property upon selection.

## select, deselect & toggle

Selects, deselects or toggles an item of your choice.

## selectAll, deselectAll & toggleAll

Selects, deselects or toggles all items of the list.

# Usage

## One list

**Logic:**
```js
this.mixin(new Selectable(this, this.files, 'file'))
```

this will place the above mentioned methods within the tag instance.

**Layout:**
```html
<div class={active: file.selected} each={file in files}>
	{ file.name }.{file.extension}, size: {file.size}KB
	<span onclick={select}>Select</span>
	<span onclick={deselect}>Deselect</span>
	<span onclick={toggle}>Toggle</span>
</div>

<span onclick={selectAll}>Select All</span>
<span onclick={deselectAll}>Deselect All</span>
<span onclick={toggleAll}>Toggle All</span>
<span>Selected: {getSelected().length}</span>
<span>Deselected: {getDeselected().length}</span>
```


## Multiple lists

if you have multiple lists to select from in your custom tag, it is best to setup a new object to perform your selections on.

**Logic:**
```js
this.itemSelect = new Selectable(this, this.items, 'item')
```

This doesn't pollute the tag instance with the methods (as usual with mixins).
Selectable methods are now accessible from `this.itemSelect`.


**Layout:**
```html
<div class={active: file.selected} each={file in files}>
	{ file.name }.{file.extension}, size: {file.size}KB
	<span onclick={itemSelect.select}>Select</span>
	<span onclick={itemSelect.deselect}>Deselect</span>
	<span onclick={itemSelect.toggle}>Toggle</span>
</div>

<span onclick={itemSelect.selectAll}>Select All</span>
<span onclick={itemSelect.deselectAll}>Deselect All</span>
<span onclick={itemSelect.toggleAll}>Toggle All</span>
<span>Selected: {itemSelect.getSelected().length}</span>
<span>Deselected: {itemSelect.getDeselected().length}</span>
```
