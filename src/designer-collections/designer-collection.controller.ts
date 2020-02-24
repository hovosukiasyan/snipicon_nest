import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {DesignerCollectionService} from "./designer-collection.service";
import {DesignerCollection} from "./designer-collection.entity";

@Controller('designer-collection')
export class DesignerCollectionController {
    constructor(private service: DesignerCollectionService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getDesignerCollection(params.id);
    }

    @Post()
    create(@Body() designerCollection: DesignerCollection) {
        return this.service.createDesignerCollection(designerCollection);
    }

    // @Put()
    // update(@Body() designer_collection: DesignerCollection) {
    //     return this.service.updateTag(designer_collection);
    // }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteDesignerCollection(params.id);
    }
}
