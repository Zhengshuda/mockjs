import RandExp from "randexp";

export const mockJs = () => {
	const mock = (options: Record<string, any>) => {
		return deconstruction(options)
	}

	// 解构数据
	const deconstruction = (options: Record<string, any>) => {
		const newObj: Record<string, any> = {};

		Object.keys(options).forEach(item => {
			const value = options[item];
			if (Object.prototype.toString.call(value) === '[object Object]') {
				const name = item.split('|')[0];
				// 指定长度的数组
				if (item.includes('|')) {
					const length = item.split('|')[1];
					const arr = [];

					for (let index = 0; index < Number(length); index++) {
						const res = deconstruction(value);
						arr.push(res);
					}
					newObj[name] = arr;
					return;
				}
				newObj[name] = deconstruction(value);
				return;
			}


			// 随机字符串
			if (typeof value === 'string' && value.includes('@String')) {
				const length = value.split('|')[1];
				if (length.includes('-')) {
					const min = length.split('-')[0];
					const max = length.split('-')[1];
					newObj[item] = mockString(Number(min), Number(max));
					return;
				}
				newObj[item] = mockString(Number(length) || 1);
				return;
			}

			// 随机数字
			if (typeof value === 'string' && value.includes('@Number')) {
				const length = value.split('|')[1];
				if (length.includes('-')) {
					const min = length.split('-')[0];
					const max = length.split('-')[1];
					newObj[item] = mockNumber(Number(min), Number(max));
					return;
				}
				newObj[item] = mockNumber();
				return;
			}

			// 随机布尔值
			if (typeof value === 'string' && value.includes('@Boolean')) {
				const length = value.split('|')[1];
				if (length.includes('-')) {
					const min = length.split('-')[0];
					const max = length.split('-')[1];
					newObj[item] = mockBoolean(Number(min) / Number(max));
					return;
				}
				newObj[item] = mockBoolean();
				return;
			}

			// 时间
			if (typeof value === 'string' && value.includes('@Date')) {
				newObj[item] = mockDate({});
				return;
			}

			// 正则
			if (Object.prototype.toString.call(value)) {
				newObj[item] = gen(value);
				return;
			}

			// 其他类型
			newObj[item] = value;
		});
		return newObj;
	};

	const mockString = (min: number, max?: number) => {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|\\;:\'",.<>? ';
		const charactersLength = characters.length;

		let _length = 0;
		if (!max) {
			_length = min;
		} else {
			_length = Math.floor(Math.random() * (max - min + 1)) + min;
		}

		// 随机从字符合集中取
		for (var i = 0; i < _length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	const mockNumber = (min = 0, max = 100) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	const mockBoolean = (num = 0.5) => {
		return Math.random() < num;
	}

	const mockDate = ({ start = '', end = '', format = 'yyyy-MM-dd' }) => {
		// 定义时间范围
		const _start = new Date(start || '1970-01-01');
		const _end = end ? new Date(end) : new Date();

		// 生成随机时间
		const randomTime = new Date(_start.getTime() + Math.random() * (_end.getTime() - _start.getTime()));

		// 格式化时间
		const year = randomTime.getFullYear().toString();
		const month = (randomTime.getMonth() + 1).toString().padStart(2, '0');
		const day = randomTime.getDate().toString().padStart(2, '0');
		const hour = randomTime.getHours().toString().padStart(2, '0');
		const minute = randomTime.getMinutes().toString().padStart(2, '0');
		const second = randomTime.getSeconds().toString().padStart(2, '0');
		const _format = format
			.replace('yyyy', year)
			.replace('MM', month)
			.replace('dd', day)
			.replace('hh', hour)
			.replace('mm', minute)
			.replace('ss', second)
		return _format
	}

	const gen = (reg: RegExp) => {
		return new RandExp(reg).gen();
	};

	return {
		mock,
		mockString,
		mockNumber,
		mockBoolean,
		mockDate,
		gen
	}
}

// test
const { mock } = mockJs();
const result = mock({
	'data|5': {
		name: '@String|2-3',
		age: '@Number|18-24',
		woman: '@Boolean|2-3',
		phone: /^1[3-9]\d{9}$/,
		birthday: '@Date',
	}
});
console.log(result);
