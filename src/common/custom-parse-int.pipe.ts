import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CustomParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const myValue = parseInt(value, 10);
    if (isNaN(myValue)) {
      throw new BadRequestException(`Param '${value}' must be a number`);
    }
    return myValue;
  }
}
