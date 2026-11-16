import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name: string = '';
  email: string = '';
  message: string = '';

  sendMessage(): void {
    const to = 'mathubalamathu2006@gmail.com';

    const subject = encodeURIComponent(`Portfolio Contact from ${this.name}`);

    const body = encodeURIComponent(
      `Name: ${this.name}\n` + `Email: ${this.email}\n\n` + `Message:\n${this.message}`,
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` + `&to=${to}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  }
}
