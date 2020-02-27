import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';
import { ProjectsModule } from './projects/projects.module';
import { AccountsModule } from './accounts/accounts.module';
import { DesignerCollectionModule } from './designer-collections/designer-collection.module';
import { IconTwinsModule } from './icon-twins/icon-twins.module';
import { MinimisedIconsModule } from './minimised-icons/minimised-icons.module';
import { NormalisedIconsModule } from './normalised-icons/normalised-icons.module';
import { StandartisedIconsModule } from './standartised-icons/standartised-icons.module';
import { AuthenticationModule} from "./authentication/authentication.module";
import { FiltersModule } from './filters/filters.module';
import { XmlGradientsModule } from './xml-gradients/xml-gradients.module';
import { XmlFiltersModule } from './xml-filters/xml-filters.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'snipicon_nest',
          entities: [],
          synchronize: true,
          autoLoadEntities: true,
      }),
      AuthenticationModule,
      AccountsModule,
      TagsModule,
      ProjectsModule,
      DesignerCollectionModule,
      IconTwinsModule,
      MinimisedIconsModule,
      NormalisedIconsModule,
      StandartisedIconsModule,
      FiltersModule,
      XmlGradientsModule,
      XmlFiltersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
