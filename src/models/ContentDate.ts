export class ContentDate {
    public static months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    private _date: Date;
    constructor(dateString: string) {
        this._date = new Date(dateString);
    }

    get formattedDate(): string {
        const month = ContentDate.months[this._date.getUTCMonth()];;
        const day = this._date.getUTCDate();
        const year = this._date.getUTCFullYear();
        return `${month} ${day}, ${year}`;
    }
}
