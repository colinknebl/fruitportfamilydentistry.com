import { Content, RawBlock } from './content/Content';

export class StaffGroup {
    public content: Content;
    constructor(
        public title: string,
        public employees: string[],
        public imageUrl: string,
        content: RawBlock[]
    ) {
        this.content = new Content(content);
    }

    get commaSeparatedEmployeeNames(): string {
        return this.employees.join(', ');
    }
}
