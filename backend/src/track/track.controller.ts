import { ObjectId } from 'mongoose';
import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackService } from './track.service';

@Controller('tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post()
  create(@Body() createTrackDto: CreateTrackDto) {
    return this.trackService.createTrack(createTrackDto);
  }

  @Get('/search')
  search(@Query('query') query: string) {
    return this.trackService.search(query);
  }

  @Get()
  getAll() {
    return this.trackService.getAll();
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
