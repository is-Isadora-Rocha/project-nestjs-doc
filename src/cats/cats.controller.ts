import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
    @Post()
    @Header('Cache-Control', 'none') // cabeçalho de resposta personalizado
    @HttpCode(204)
    create(): string {
        return 'This action adds a new cat';
    }

    /*
    @Post()
    async create(@Body() CreateCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    } */

    @Get() //cats
    @Redirect('https://nestjs.com', 301) // redirecionamento, url e statusCode
    findAll(): string {
        return 'This action return all cats';
    }

    // @Redirect()

    // prefix(cats) + decorador = GET /cats/docs
    @Get('docs')
    // direcionado a url = sem nenhum parâmetro de consulta ou valor diferente de 5
    @Redirect('https://docs.nestjs.com', 302)
    // /docs?version=5, redirecionado a url na condição
    getDocs(@Query('version') version){
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return 'This action returns a #${params.id} cat';
    }

    /* @Get(':id')
    findOne(@Param('id') id: string): string {
        return 'This action returns a #${id} cat';
    } */
}
