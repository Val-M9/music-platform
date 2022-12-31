import { CreateCommentDto } from './dto/create-comment.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Types } from 'mongoose';
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

  async search(query: string): Promise<Track[]> {
    const tracks = await this.trackModel.find({
      name: { $regex: new RegExp(query, 'i') },
    });

    return tracks;
  }

  async getAll(): Promise<Track[]> {
    const tracks = await this.trackModel.find();

    return tracks;
  }

  async getById(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id).populate('comments');

    return track;
  }

  async delete(id: ObjectId): Promise<Types.ObjectId> {
    const deletedTrack = await this.trackModel.findByIdAndDelete(id);

    return deletedTrack._id;
  }

  async addComment(commentDto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(commentDto.trackId);
    const comment = await this.commentModel.create({ ...commentDto });
    track.comments.push(comment);
    track.save();

    return comment;
  }

  async incrementListens(id: ObjectId) {
    const track = await this.trackModel.findById(id);
    track.listens += 1;
    track.save();
  }
}
