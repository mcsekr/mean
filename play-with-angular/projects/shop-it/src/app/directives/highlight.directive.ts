import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // @Input()
  _appHighlight: string = "yellow"

  @Input()
  set appHighlight(value: string) {
    if (value)
      this._appHighlight = value;
    else
      this._appHighlight = "yellow";
  }

  constructor(private ele: ElementRef) {
    console.log(this.ele.nativeElement);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.ele.nativeElement.style.backgroundColor = this._appHighlight;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.ele.nativeElement.style.backgroundColor = '';
  }

}
