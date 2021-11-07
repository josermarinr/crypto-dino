import { Controller, Get } from '@nestjs/common';
import { CoincapService } from './coincap.service';

@Controller()
export class CoincapController {
  constructor(private readonly services: CoincapService) {}

  @Get()
  getAllCrypto() {
    return this.services.getAll();
  }
}
