import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTrackDto } from './dto/create-track.dto';
import { Track, TrackDocument } from './schemas/track.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async createTrack(trackDto: CreateTrackDto): Promise<Track> {
    const track = await this.trackModel.create({ ...trackDto, listens: 0 });

    return track;
  }

  async getAll(): Promise<Track[]> {
    const tracks = await this.trackModel.find();

    return tracks;
  }
}
