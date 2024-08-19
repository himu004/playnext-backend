import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,
            required: true,
        },
        thumbNail: {
            type: String,
            required: true,
        },
        tittle: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        views: {
            type: Number,
            duration: 0,
        },
        isPublic: {
            type: Boolean,
            duration: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }, {timestamps: true}
);

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model('Video', videoSchema)