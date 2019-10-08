import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "gp-star",
    templateUrl: "./rating.component.html",
    styleUrls: ["./rating.component.css"]
})
export class RatingComponent implements OnChanges {
    
    @Input() rating: number;
    larguraEstrela: number;
    @Output() ratingClicado: EventEmitter<string> =
        new EventEmitter<string>();


    ngOnChanges(): void {
        this.larguraEstrela = this.rating * 75 / 5;
    }

    onClick(): void {
        this.ratingClicado.emit(`O rating é ${this.rating}`);
}

}