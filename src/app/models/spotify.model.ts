import { Deserializable } from './deserializable.model';
import { Seeds } from './seeds.model';
import { Tracks } from './tracks.model';

export class Spotify implements Deserializable {

    public seeds: Seeds[];
    public tracks: Tracks[];

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}
