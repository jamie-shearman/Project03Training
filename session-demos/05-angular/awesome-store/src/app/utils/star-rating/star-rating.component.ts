import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component(
    {
        selector: 'app-star-rating',
        templateUrl: './star-rating.component.html',
        styleUrls: [
            './star-rating.component.css'
        ]
    }
)
export class StarRatingComponent {
    @Input()
    num_stars: number;

    @Input()
    color: string;

    @Input()
    size: string;

    @Output()
    /* events may have data associated with them. we specify the type for that data in <>, eg. <number> */
    /*buttonClick = new EventEmitter<number>();*/
    buttonClick = new EventEmitter();

    strStyle: string;

    ngOnInit() {
        this.strStyle = `color: ${this.color}`;
    }

    buttonClicked() {
        this.buttonClick.emit();
    }
}