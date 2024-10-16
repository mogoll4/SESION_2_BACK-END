import { Get, Injectable } from '@nestjs/common';
import { get } from 'http';


// endpoint: puerta del software 
//  -Acepta peticiones de clientes bajo una url semantica
//  -retornar el(los ) datos esperados al cliente
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello kittky significa hola demonio';
  }

  //segundo endpoint - ESTRUCTURAR UN ENDPOINT
  //1. verbo (Metodo) http sobre el cual recibir
  // Metodos disponibles: GET, POST, PUT, DELETE.
  // 2.Nombre del metodo a ejecutar 
  //   cuando se invoque el endpoint
  @Get("/ficha")
  getFicha(): String {
    return "endpoint de la ficha 2902093"
  }

}
