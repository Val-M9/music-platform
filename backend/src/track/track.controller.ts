import { ObjectId } from 'mongoose';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackService } from './track.service';

@Controller('tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  create(@UploadedFiles() files, @Body() createTrackDto: CreateTrackDto) {
    const { picture, audio } = files;
    return this.trackService.createTrack(createTrackDto, audio[0], picture[0]);
  }

  @Get('/search')
  search(@Query('query') query: string) {
    return this.trackService.search(query);
  }

  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.trackService.getAll(count, offset);
  }

  @Get(':id')
  getById(@Param('id') id: ObjectId) {
    return this.trackService.getById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.trackService.delete(id);
  }

  @Post('/comment')
  addComment(@Body() commentDto: CreateCommentDto) {
    return this.trackService.addComment(commentDto);
  }

  @Post('/listens/:id')
  incrementListens(@Param('id') id: ObjectId) {
    return this.trackService.incrementListens(id);
  }
}
