$(function() {
	// Custom select plugin init
	$('select').customSelect();

	// Test data
	var model = {
		'default':['Model'],
		'Ford': ['Explorer', 'Mondeo', 'Focus'],
		'Audi': ['A1', 'A3', 'A4', 'A5', 'R8']
	};
	var year = {
		'default':['Year'],
		'Explorer': ['2001', '2002', '2003'],
		'Mondeo': ['2002', '2003', '2004'],
		'Focus': ['2001', '2002', '2003'],
		'A1': ['2002', '2003'],
		'A3': ['2001'],
		'A4': ['2001', '2002', '2003'],
		'A5': ['2001', '2002', '2004'],
		'R8': ['2001', '2004']
	};
	var status = {
		'default':['Status'],
		'2001': ['Used', 'New'],
		'2002': ['Used', 'New'],
		'2003': ['Used'],
		'2004': ['Used', 'New']
	};

	$('#filtersForm').find('select').on('change', function() {
		var $selected = $(this);

		if ($selected.val() == 'Make' || $selected.val() == 'Model' || $selected.val() == 'Year') {
			resetSelects($selected);
		} else {
			switch ($selected.attr('id')) {
				case 'make':
					updateSelect($selected, model);
				break;

				case 'model':
					updateSelect($selected, year);
				break;

				case 'year':
					updateSelect($selected, status);
				break;
			}
		}
	});

	function updateSelect(selected, data) {
		var selectedVal = selected.val(),
			$formOverlay = $('.js-form-overlay');

		$formOverlay.show();

		setTimeout(function() {
			$formOverlay.hide();
			resetSelects(selected);

			for (var i = 0; i < data[selectedVal].length; i++) {
				selected.parent()
				.next('.js-select-wrapper')
				.find('select')
				.append( $('<option value="' + data[selectedVal][i] + '">' + data[selectedVal][i] + '</option>') );
			}

		}, 1000);

		$('select').trigger('update');
	}

	function resetSelects(selected) {
		var nextSelects = selected.parent().nextAll('.js-select-wrapper').find('select');

		for (var i = 0; i < nextSelects.length; i++) {
			var prev = $(nextSelects[i]).find('option')[0];

			$(nextSelects[i]).html('<option>' + $(prev).text() + '</option>');
		};
		$('select').trigger('update');
	}	

});