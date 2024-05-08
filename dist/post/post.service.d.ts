import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { FindOneOptions, Repository } from 'typeorm';
export declare class PostService {
    private readonly repo;
    constructor(repo: Repository<Post>);
    create(createPostDto: CreatePostDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Post[]>;
    findOne(id: FindOneOptions<Post>): Promise<Post>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
