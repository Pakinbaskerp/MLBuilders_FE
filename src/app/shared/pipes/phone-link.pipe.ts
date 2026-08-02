import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneLink',
  standalone: true
})
export class PhoneLinkPipe implements PipeTransform {
  transform(phoneNumber: string): string {
    const sanitized = phoneNumber.replace(/[^\d+]/g, '');
    return `tel:${sanitized}`;
  }
}
