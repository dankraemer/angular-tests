
export class LikeComponent {
    constructor(private _likesCount: number, private _isSelected: boolean) {
    }

    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }

    onClick() {
        //if (this.isSelected) {
        //    this.likesCount--;
        //} else {
        //    this.likesCount++;
        //}

        // Alternative ternary operator
        this._likesCount += (this._isSelected) ? -1 : 1;
        // Toggle boolean value
        this._isSelected = !this._isSelected;
    }
}