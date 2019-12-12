import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandoUtilService {

    constructor() { }

    public range(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public oneSample(list: any[]): any {
        return list[Math.floor(Math.random() * list.length)];
    }
    
    public sample(list: any[], sampleSize = 1): any[] {
        const copiedList: any[] = [...list];
        const sampleList: any[] = [];
        while (sampleSize) {
            const index = Math.floor(Math.random() * copiedList.length);
            console.log(index);
            sampleList.push(copiedList[index]);
            copiedList.splice(index, 1);
            sampleSize--;
        }

        console.log(sampleList);

        return sampleList;
    }
}
