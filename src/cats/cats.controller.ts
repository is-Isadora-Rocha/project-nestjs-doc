import { Controller, Get, Req} from '@nestjs/common';
import { request } from 'https';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action return all cats';
    }
}
