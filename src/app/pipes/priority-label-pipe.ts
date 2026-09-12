import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityLabel',
})
export class PriorityLabelPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]){
    if(value == null || value ===undefined) return ""
    switch (value) {
      case 'high':
        return 'عالي الاهمية'
      case 'medium':
        return 'متوسط الاهمية'
      case 'low':
        return 'منخفض الاهمية'
    }
    return null;
  }
}
