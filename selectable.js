var Selectable = function(tag, items, item)
{
	this.tag = tag
	this.item = item
	this.items = items
	
	
	this.toggle = function(event)
	{
		if (event instanceof Event)
		{
			event.item[this.item].selected = !event.item[this.item].selected
		}
		else
		{
			event.selected = !event.selected
			this.refresh()
		}
	}.bind(this)

	this.select = function()
	{
		if (event instanceof Event)
		{
			event.item[this.item].selected = true
		}
		else
		{
			event.selected = true
			this.refresh()
		}
	}.bind(this)
	
	this.deselect = function()
	{
		if (event instanceof Event)
		{
			event.item[this.item].selected = false
		}
		else
		{
			event.selected = false
			this.refresh()
		}
	}.bind(this)
	
	this.toggleAll = function(event)
	{
		this.items.map(function(item){item.selected = !item.selected})
		this.refresh()

	}.bind(this)
	
	this.selectAll = function(event)
	{
		this.items.map(function(item){item.selected = true})
		this.refresh()

	}.bind(this)
	
	this.deselectAll = function(event)
	{
		this.items.map(function(item){item.selected = false})
		this.refresh()

	}.bind(this)

	this.refresh = function(event)
	{
		if (!(event instanceof Event))
		{
			this.tag.update()
		}
	}.bind(this)

	this.getSelected = function()
	{
		return this.items.filter(function(item){return item.selected})
	}

	this.getDeselected = function()
	{
		return this.items.filter(function(item){return !item.selected})
	}
}
