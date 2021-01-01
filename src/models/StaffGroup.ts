import { SanityBlockContent, RawBlock } from './SanityBlockContent';

export class StaffGroup extends SanityBlockContent {
    constructor(
        public title: string,
        public employees: string[],
        public imageUrl: string,
        content: RawBlock[]
    ) {
        super(content);
    }

    get commaSeparatedEmployeeNames(): string {
        return this.employees.join(', ');
    }
}
