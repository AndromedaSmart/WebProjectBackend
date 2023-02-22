import {Controller, Get, Render, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';
import {TransformInterceptor} from "./transform.interceptor";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  @UseInterceptors (TransformInterceptor)
  root() {
    return { message: '21', object: 'string', authorised: true, user: {name: 'Andromeda'} };
  }
}
