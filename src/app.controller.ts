import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/Student.entity';


@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

   //segundo endpoint - ESTRUCTURAR UN ENDPOINT
  //1. verbo (Metodo) http sobre el cual recibir
  // Metodos disponibles: GET, POST, PUT, DELETE.
  // 2.Nombre del metodo a ejecutar 
  //   cuando se invoque el endpoint
  @Get("/ficha")
  getFicha(): String {
    return "endpoint de la ficha 2902093"
  }

  //tercer endpoint
  @Get("/identificacion/:id/ciudad/:ciudad")
  identificacion(@Param('id') id:string, 
                  @Param('ciudad') ciudad:string,
                  @Query('nombre') nombre:string,
                  @Query('edad') edad:number ):Student {
    return new Student(+id, nombre, edad, ciudad);
  }

}
