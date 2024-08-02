import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect} from '@nestjs/common';

@Controller('cats')
export class CatsController {

    // o código de status de resposta é sempre 200 por padrão, 
    // exceto para solicitações POST que são 201.
    @Post()
    @Header('Cache-Control', 'none')
    @HttpCode(204)
    create(): string {
        return 'This action adds a new cat';
    }

    @Get()
    @Redirect('https://nestjs.com', 301)
    findAll(): string {
        return 'This action return all cats';
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
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

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return 'This action returns a #${id} cat';
    }
}
