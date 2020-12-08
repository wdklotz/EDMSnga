import { Component, Input } from '@angular/core';
import { DocInterface } from '../../models/interfaces';

// A component with inline template to display Array<DocInterface>
@Component({
    selector: 'json-display',
    template:
     `  <p>CollectionSize: {{ docs.length }}</p>
        <pre>{{ asJSON('1') }}</pre>
        <pre>{{ docs | json }}</pre>  `
})

export class DocInterfaceDisplayComponent {
    @Input() docs:Array<DocInterface>;

    asJSON(anz: string = '1'): string {
        return JSON.stringify(this.docs.slice(0,parseInt(anz)));
    };    
}