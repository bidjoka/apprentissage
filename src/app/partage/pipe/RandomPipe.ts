import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'random'
})

export class RandomPipe implements PipeTransform {
	transform(value: any, ...args: any[]) {
		throw new Error("Method not implemented.");
	}

}