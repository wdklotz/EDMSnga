import { Component, Input } from '@angular/core';
import {DocInterface } from '../dashboard/dashboard.component'

@Component({
    selector: 'json-display',
    template:
     `  <p>CollectionSize: {{ docs.length }}</p>
        <pre>{{ asJSON('1') }}</pre>
        <pre>{{docs | json}}</pre>  `
})

export class AsJsonDisplayComponent {
    // @Input() collectionSize: number;
    @Input() docs:Array<DocInterface>;

    asJSON(anz: string = '1'): string {
        return JSON.stringify(this.docs.slice(0,parseInt(anz)));
    };    
}