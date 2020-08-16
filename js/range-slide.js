$('input[type="range"]').rangeslider({
	// Feature detection the default is `true`.
	  // Set this to `false` if you want to use
	  // the polyfill also in Browsers which support
	  // the native <input type="range"> element.
	  polyfill: false,
  
	  // Default CSS classes
	  rangeClass: 'rangeslider',
	  disabledClass: 'rangeslider--disabled',
	  horizontalClass: 'rangeslider--horizontal',
	  fillClass: 'rangeslider__fill',
	  handleClass: 'rangeslider__handle',
  
	  // Callback function
	  onInit: function() {
		$rangeEl = this.$range;
		// add value label to handle
		var rangeLabels = this.$element.attr('labels');
		rangeLabels = rangeLabels.split(', ');
		var $handle = $rangeEl.find('.rangeslider__handle');
		var handleValue = '<div class="rangeslider__handle__value">' + rangeLabels[this.value-1] + '</div>';
		$handle.append(handleValue);
		
		// get range index labels 
		
		
		// add labels
		$rangeEl.append('<div class="rangeslider__labels"></div>');
		$(rangeLabels).each(function(index, value) {
		  $rangeEl.find('.rangeslider__labels').append('<span class="rangeslider__labels__label">' + value + '</span>');
		})
	  },
  
	  // Callback function
	  onSlide: function(position, value) {
		var rangeLabels = this.$element.attr('labels');
		rangeLabels = rangeLabels.split(', ');
		var $handle = this.$range.find('.rangeslider__handle__value');
		$handle.text(rangeLabels[this.value-1] );
	  },
  
	  // Callback function
	  onSlideEnd: function(position, value) {}
  });
  