import { Module, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ResolverModule } from './api/resolvers/resolver.module';
import { CurrenciesService } from './domain/entities/currencies.service';
import { CoincapService } from './externalServices/coincap/coincap.service';

@Module({
    imports: [
        ResolverModule,
        CacheModule.register(),
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            include: [ResolverModule],
            autoSchemaFile: join(process.cwd(), '/bff/schema/schema.gql'),
        }),
    ],
    controllers: [AppController],
    providers: [AppService, CurrenciesService, CoincapService],
})
export class AppModule {}
