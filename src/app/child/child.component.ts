import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-childcomponent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() receivedText: string = "";
  message: string = "";
  @Output() sentMessage: EventEmitter<string> = new EventEmitter();

  sendMessage(msg: string) {
    this.sentMessage.emit(msg);
  }
}
