import NumberKeyword from './NumberKeyword';

export default class MultipleOf extends NumberKeyword {
	constructor(value) {
		super();
		this.value = value;
	}

	set value(value) {
		if (typeof value != 'number' || value <= 0) {
			throw new Error('value must be a number greater than zero');
		}

		this._value = value;
	}

	get value() {
		return this._value;
	}

	build(context) {
		context = context || {};

		context['multipleOf'] = this.value;
		return context;
	}
}