import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string | Date | null | undefined): string {
    if (!value) return '';

    const date = new Date(value);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 60) return 'الآن';

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `من ${minutes} ${minutes === 1 ? 'دقيقة' : 'دقايق'}`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `من ${hours} ${hours === 1 ? 'ساعة' : 'ساعات'}`;

    const days = Math.floor(hours / 24);
    if (days < 30) return `من ${days} ${days === 1 ? 'يوم' : 'أيام'}`;

    const months = Math.floor(days / 30);
    if (months < 12) return `من ${months} ${months === 1 ? 'شهر' : 'شهور'}`;

    const years = Math.floor(months / 12);
    return `من ${years} ${years === 1 ? 'سنة' : 'سنين'}`;
  }
}
